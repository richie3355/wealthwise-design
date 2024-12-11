import { Card } from "@/components/ui/card";
import { ArrowLeft, Bell, ArrowUpRight, ShieldCheck, CreditCard, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  
  const notifications = [
    {
      icon: ShieldCheck,
      title: "Security Alert",
      description: "New device logged in from Paris, France",
      time: "2 hours ago",
      type: "security"
    },
    {
      icon: CreditCard,
      title: "Payment Due",
      description: "Credit card payment due in 3 days",
      time: "5 hours ago",
      type: "payment"
    },
    {
      icon: Wallet,
      title: "Balance Update",
      description: "Received €2,500 from ACME Corp",
      time: "Yesterday",
      type: "transaction"
    },
    {
      icon: ArrowUpRight,
      title: "Investment Alert",
      description: "Your ETF portfolio is up by 3.2%",
      time: "2 days ago",
      type: "investment"
    }
  ];

  return (
    <div className="container max-w-2xl mx-auto p-4 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      <Card className="p-4 mb-6 bg-primary text-primary-foreground">
        <div className="flex items-center gap-3">
          <Bell className="h-8 w-8" />
          <div>
            <h2 className="font-semibold">Notification Center</h2>
            <p className="text-sm opacity-90">Stay updated on your finances</p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex gap-3">
              <notification.icon className="h-6 w-6 text-primary mt-1" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;