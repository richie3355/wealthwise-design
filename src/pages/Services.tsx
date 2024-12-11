import { Shield, BarChart2, ChevronRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
            name: "Allianz Term Life Protect+",
            description: "Comprehensive life coverage with flexible terms and additional benefits",
            features: [
              "Coverage from €100,000 to €2,000,000",
              "Terms available: 10, 15, 20, 25, or 30 years",
              "Terminal illness benefit included",
              "Optional critical illness cover up to €500,000",
              "Guaranteed premiums starting from €15/month",
              "24/7 virtual doctor consultations included"
            ]
          },
          {
            name: "AXA Global Health Elite",
            description: "Premium international health coverage across Europe and worldwide",
            features: [
              "100% coverage in private hospitals across EU",
              "Direct billing with 95% of European hospitals",
              "Dental and vision coverage included",
              "Mental health support & wellness programs",
              "Maternity coverage up to €50,000",
              "Annual health screening & preventive care"
            ]
          },
          {
            name: "Zurich Property Shield",
            description: "Complete protection for your home and valuable assets",
            features: [
              "Buildings coverage up to €2M",
              "Contents insurance up to €250,000",
              "Jewelry & art coverage up to €100,000",
              "Cyber protection against digital threats",
              "Emergency home assistance 24/7",
              "Natural disaster coverage included"
            ]
          },
          {
            name: "ERGO Vehicle Complete",
            description: "Comprehensive auto insurance with premium services",
            features: [
              "Full comprehensive coverage (Kasko)",
              "New vehicle replacement within 2 years",
              "Roadside assistance across Europe",
              "No claims bonus protection",
              "Electric vehicle charging coverage",
              "Courtesy car for up to 21 days"
            ]
          }
        ]
      }
    },
    {
      icon: BarChart2,
      title: "Investment Tools",
      description: "Grow your wealth with smart investment options",
      items: ["Stocks & ETFs", "Sustainable Investments", "Retirement Planning", "Wealth Management"],
      details: {
        title: "European Investment Products",
        plans: [
          {
            name: "BlackRock EU Equity Portfolio",
            description: "Diversified investment in leading European companies",
            features: [
              "Access to EURO STOXX 50 companies",
              "Dividend reinvestment option",
              "Minimum investment: €1,000",
              "Annual management fee: 0.20%",
              "Real-time portfolio tracking",
              "Quarterly rebalancing included"
            ]
          },
          {
            name: "Amundi Green Future Fund",
            description: "Sustainable and ESG-focused investment solutions",
            features: [
              "100% renewable energy investments",
              "Carbon-neutral portfolio companies",
              "EU taxonomy-aligned investments",
              "Quarterly ESG impact reports",
              "Minimum investment: €500",
              "Annual management fee: 0.35%"
            ]
          },
          {
            name: "Vanguard European Retirement 2050",
            description: "Long-term retirement planning with automatic rebalancing",
            features: [
              "Target date retirement strategy",
              "Automatic risk adjustment over time",
              "Mix of stocks, bonds, and cash",
              "Monthly investment from €50",
              "Tax-efficient structure",
              "Free retirement planning tools"
            ]
          },
          {
            name: "UBS Wealth Management Premium",
            description: "Personalized wealth management for high-net-worth individuals",
            features: [
              "Dedicated wealth advisor",
              "Custom portfolio construction",
              "Alternative investments access",
              "Estate planning services",
              "Minimum investment: €500,000",
              "Quarterly portfolio review"
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
              <SheetContent side="right" className="w-full sm:max-w-none p-0">
                <div className="h-full overflow-y-auto">
                  <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center gap-2">
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetTitle className="text-xl">{service.details.title}</SheetTitle>
                  </div>
                  <div className="p-6">
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