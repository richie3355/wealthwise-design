import { Shield, BarChart2, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Insurance Plans",
      description: "Protect what matters most with our comprehensive insurance solutions",
      items: ["Life Insurance", "Health Insurance", "Property Insurance", "Vehicle Insurance"],
      details: {
        title: "European Insurance Solutions",
        plans: [
          {
            name: "Term Life Insurance",
            description: "Coverage up to €1.5M with optional critical illness protection",
            features: [
              "Flexible terms from 10-30 years",
              "Critical illness cover optional",
              "Death benefit paid tax-free",
              "Fixed monthly premiums"
            ]
          },
          {
            name: "Private Health Insurance",
            description: "Comprehensive healthcare coverage across EU countries",
            features: [
              "Access to private hospitals",
              "No waiting period for most treatments",
              "Coverage in all EU countries",
              "Digital health services included"
            ]
          },
          {
            name: "Property & Contents",
            description: "Complete protection for your home and belongings",
            features: [
              "Buildings coverage up to €1M",
              "Contents insurance up to €100K",
              "Natural disaster protection",
              "24/7 emergency assistance"
            ]
          }
        ]
      }
    },
    {
      icon: BarChart2,
      title: "Investment Tools",
      description: "Grow your wealth with smart investment options",
      items: ["Stocks & ETFs", "Mutual Funds", "Retirement Planning", "Portfolio Management"],
      details: {
        title: "European Investment Products",
        plans: [
          {
            name: "EU Stock & ETF Portfolio",
            description: "Diversified investment in European markets",
            features: [
              "Access to all EU stock exchanges",
              "Commission-free ETF trading",
              "Automatic dividend reinvestment",
              "Real-time market data"
            ]
          },
          {
            name: "Sustainable Investment Funds",
            description: "ESG-focused investment solutions",
            features: [
              "Green energy sector funds",
              "Social responsibility screening",
              "Low carbon footprint options",
              "Impact investment tracking"
            ]
          },
          {
            name: "European Pension Planning",
            description: "Long-term retirement solutions",
            features: [
              "Tax-efficient pension products",
              "Cross-border pension transfer",
              "Multiple currency options",
              "Regular saving plans"
            ]
          }
        ]
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 pb-20 pt-4">
      <h1 className="text-2xl font-bold mb-6">Financial Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Sheet key={index}>
              <SheetTrigger className="w-full">
                <Card className="glass-card hover:shadow-lg transition-shadow text-left">
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
                    <div className="flex items-center justify-end mt-4 text-blue-500">
                      <span className="text-sm">View Details</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>{service.details.title}</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  {service.details.plans.map((plan, idx) => (
                    <div key={idx} className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="text-sm flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          );
        })}
      </div>
      <Navigation />
    </div>
  );
};

export default Services;