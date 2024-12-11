import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", value: 540000 },
  { month: "Feb", value: 565000 },
  { month: "Mar", value: 580000 },
  { month: "Apr", value: 595000 },
  { month: "May", value: 610000 },
  { month: "Jun", value: 640485 },
  { month: "Jul", value: 660000 },
  { month: "Aug", value: 685000 },
  { month: "Sep", value: 710000 },
];

const ProjectionCard = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Projected Net Worth by 2034
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 10 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000)}k`}
                width={45}
                tick={{ fontSize: 10 }}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Value"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectionCard;