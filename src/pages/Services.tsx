import { Shield, CreditCard, Banknote, BarChart2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Insurance Plans",
      description: "Protect what matters most with our comprehensive insurance solutions",
      items: ["Life Insurance", "Health Insurance", "Property Insurance", "Vehicle Insurance"]
    },
    {
      icon: Banknote,
      title: "Banking Solutions",
      description: "Financial products tailored to your needs",
      items: ["Personal Loans", "Home Loans", "Business Loans", "Savings Accounts"]
    },
    {
      icon: CreditCard,
      title: "Credit Cards",
      description: "Exclusive credit card offers with great rewards",
      items: ["Rewards Card", "Travel Card", "Business Card", "Student Card"]
    },
    {
      icon: BarChart2,
      title: "Investment Tools",
      description: "Grow your wealth with smart investment options",
      items: ["Stocks & ETFs", "Mutual Funds", "Retirement Planning", "Portfolio Management"]
    }
  ];

  return (
    <div className="container mx-auto px-4 pb-20 pt-4">
      <h1 className="text-2xl font-bold mb-6">Financial Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Icon className="h-5 w-5 text-blue-500" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Navigation />
    </div>
  );
};

export default Services;