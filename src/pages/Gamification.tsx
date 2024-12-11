import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy, Target, Wallet, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Gamification = () => {
  const navigate = useNavigate();
  
  const achievements = [
    {
      title: "Savings Master",
      progress: 75,
      description: "Save €1000 in your emergency fund",
      icon: Wallet,
      reward: "2% bonus interest rate"
    },
    {
      title: "Investment Pioneer",
      progress: 40,
      description: "Create a diversified portfolio",
      icon: TrendingUp,
      reward: "Free stock analysis report"
    },
    {
      title: "Budget Champion",
      progress: 90,
      description: "Stay within budget for 3 months",
      icon: Target,
      reward: "€50 cashback"
    }
  ];

  return (
    <div className="container max-w-2xl mx-auto p-4 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Financial Goals</h1>
      </div>

      <Card className="p-4 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-8 w-8 text-primary" />
          <div>
            <h2 className="font-semibold">Level 5 Financial Expert</h2>
            <p className="text-sm text-muted-foreground">2,500 points to next level</p>
          </div>
        </div>
        <Progress value={65} className="h-2" />
      </Card>

      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start gap-4">
              <achievement.icon className="h-6 w-6 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                <Progress value={achievement.progress} className="h-2 mb-2" />
                <p className="text-xs text-primary">Reward: {achievement.reward}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gamification;