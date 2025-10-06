import { useState } from 'react';
import { Phone, Calendar, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookingDialog } from '@/components/BookingDialog';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface WorkerCardProps {
  name: string;
  role: string;
  rating: number;
  location: string;
  available: boolean;
  image: string;
  experience: string;
}

export const WorkerCard = ({
  name,
  role,
  rating,
  location,
  available,
  image,
  experience,
}: WorkerCardProps) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('user');

  const handleCall = () => {
    toast({
      title: 'Calling...',
      description: `Connecting you with ${name}`,
    });
  };

  const handleBooking = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isAuthenticated
      ? setBookingOpen(true)
      : (toast({
          title: 'Authenticate',
          description: 'Please Login or Signup before placing booking',
        }),
        navigate('/auth'));
  };

  return (
    <>
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        workerName={name}
        workerRole={role}
      />
      <Card className="overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group animate-slide-up">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            {available ? (
              <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
                Available
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="bg-muted-foreground/80 text-white border-0"
              >
                Busy
              </Badge>
            )}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <p className="text-primary font-semibold">{role}</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold text-foreground">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            {experience} years of experience
          </p>

          <div className="flex gap-2 pt-2">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={handleBooking}
              disabled={!available}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Button>
            {/* <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handleCall}
            >
              <Phone className="h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </Card>
    </>
  );
};