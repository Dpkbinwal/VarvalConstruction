import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, DollarSign, TrendingUp, Plus } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Workers",
      value: "24",
      change: "+3 this month",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Bookings",
      value: "18",
      change: "+5 today",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Revenue",
      value: "$12,450",
      change: "+12% this month",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      title: "Completion Rate",
      value: "94%",
      change: "+2% vs last month",
      icon: TrendingUp,
      color: "text-purple-600"
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Manage your construction workforce
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Worker
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
                <p className="text-xs text-green-600 font-medium">{stat.change}</p>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Bookings</h2>
          <div className="space-y-4">
            {[
              { client: "Tech Corp", worker: "Reshem Singh", service: "Plumbing", time: "2 hours ago" },
              { client: "ABC Builders", worker: "Sana Khan", service: "Electrical Work", time: "5 hours ago" },
              { client: "Green Construction", worker: "Aman Kumar", service: "Masonry", time: "1 day ago" },
            ].map((booking, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div>
                  <p className="font-semibold text-foreground">{booking.client}</p>
                  <p className="text-sm text-muted-foreground">
                    {booking.worker} • {booking.service}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">{booking.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
