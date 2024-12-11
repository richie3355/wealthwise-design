import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Goal } from "lucide-react";

const goals = [
  { name: "Retirement Fund", target: 1000000, current: 640485 },
  { name: "Emergency Fund", target: 50000, current: 45000 },
  { name: "House Down Payment", target: 200000, current: 120000 },
];

const GoalsCard = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          <div className="flex items-center gap-2">
            <Goal className="h-5 w-5 text-blue-500" />
            Financial Goals
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <div key={goal.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{goal.name}</span>
                  <span className="text-gray-900 font-medium">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalsCard;