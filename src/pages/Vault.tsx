import { Card } from "@/components/ui/card";
import { ArrowLeft, Lock, FileText, CreditCard, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Vault = () => {
  const navigate = useNavigate();
  
  const documents = [
    {
      title: "Account Statements",
      icon: FileText,
      items: ["2024 Q1 Statement", "2023 Annual Statement", "Tax Documents 2023"]
    },
    {
      title: "Card Documents",
      icon: CreditCard,
      items: ["Credit Card Agreement", "Debit Card Terms", "Card Insurance Policy"]
    },
    {
      title: "Security Documents",
      icon: Key,
      items: ["2FA Setup Guide", "Security Settings", "Privacy Policy"]
    }
  ];

  return (
    <div className="container max-w-2xl mx-auto p-4 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Secure Vault</h1>
      </div>

      <Card className="p-4 mb-6 bg-primary text-primary-foreground">
        <div className="flex items-center gap-3">
          <Lock className="h-8 w-8" />
          <div>
            <h2 className="font-semibold">Your Documents are Secure</h2>
            <p className="text-sm opacity-90">End-to-end encrypted storage</p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {documents.map((section, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">{section.title}</h3>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm p-2 hover:bg-secondary rounded-md cursor-pointer">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vault;