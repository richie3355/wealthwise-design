import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  
  const newsItems = [
    {
      date: "2024-03-20",
      title: "New EU Banking Regulations",
      description: "Important updates on PSD3 and how it affects your banking experience",
      category: "Regulatory"
    },
    {
      date: "2024-03-19",
      title: "Sustainable Investment Options",
      description: "Explore our new ESG-focused investment portfolios",
      category: "Investment"
    },
    {
      date: "2024-03-18",
      title: "Digital Euro Updates",
      description: "Latest developments in the ECB's digital currency project",
      category: "Innovation"
    },
    {
      date: "2024-03-17",
      title: "Enhanced Security Features",
      description: "New biometric authentication methods now available",
      category: "Security"
    }
  ];

  return (
    <div className="container max-w-2xl mx-auto p-4 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Financial Feed</h1>
      </div>

      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-muted-foreground">{item.date}</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Feed;