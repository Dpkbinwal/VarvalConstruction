import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkerCard } from "@/components/WorkerCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const featuredWorkers = [
  {
    id: 1,
    name: "Manish Rana",
    role: "Master Plumber",
    rating: 4.9,
    location: "Downtown",
    available: true,
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop",
    experience: "12"
  },
  {
    id: 2,
    name: "Sana Khan",
    role: "Certified Electrician",
    rating: 4.8,
    location: "West Side",
    available: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    experience: "8"
  },
  {
    id: 3,
    name: "Aman Kumar",
    role: "Expert Mason",
    rating: 5.0,
    location: "East District",
    available: false,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    experience: "15"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Varval Construction?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The fastest way to connect with skilled construction professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Professionals",
                description: "All workers are background-checked and certified"
              },
              {
                icon: Clock,
                title: "Instant Booking",
                description: "Book appointments in seconds, get confirmed instantly"
              },
              {
                icon: Star,
                title: "Top Rated",
                description: "Only the highest-rated professionals on our platform"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-8 rounded-xl bg-card hover:shadow-[var(--shadow-card-hover)] transition-all">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Workers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Featured Workers</h2>
              <p className="text-xl text-muted-foreground">
                Top-rated professionals ready to help
              </p>
            </div>
            <Link to="/workers">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorkers.map((worker) => (
              <WorkerCard key={worker.id} {...worker} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-[hsl(30,100%,48%)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found the perfect construction professional
          </p>
          <Link to="/workers">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold">
              Find Workers Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
