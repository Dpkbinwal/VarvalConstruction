import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Clock, Shield, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Varval Construction</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted platform for connecting clients with skilled construction professionals
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary to-[hsl(30,100%,48%)] rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Target className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white/90">
                Varval Construction bridges the gap between clients and construction professionals. 
                We provide a seamless platform where clients can easily find, book, and connect 
                with verified workers for their construction needs - from plumbers and electricians 
                to carpenters and masons.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Users,
                title: "Browse Workers",
                description: "Search through our database of verified construction professionals by category, location, and availability."
              },
              {
                step: "2",
                icon: Clock,
                title: "Book Appointment",
                description: "Select your preferred worker and book an appointment instantly. Choose a time that works for you."
              },
              {
                step: "3",
                icon: CheckCircle,
                title: "Get Work Done",
                description: "Connect directly with the worker, discuss your project, and get the job done professionally."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="text-center p-8 rounded-xl bg-card hover:shadow-[var(--shadow-card-hover)] transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Verified Professionals",
                description: "All workers undergo background checks and skill verification"
              },
              {
                icon: Award,
                title: "Top Rated Workers",
                description: "Only the highest-rated professionals on our platform"
              },
              {
                icon: Clock,
                title: "Instant Booking",
                description: "Book appointments in seconds with real-time availability"
              },
              {
                icon: Users,
                title: "Wide Network",
                description: "Access to hundreds of skilled workers across all trades"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-muted/30">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-card p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients and find the perfect construction professional today
            </p>
            <Link to="/workers">
              <Button size="lg" className="h-14 px-8 text-lg">
                Find Workers Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
