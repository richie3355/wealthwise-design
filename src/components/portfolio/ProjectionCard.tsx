import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

// Calculate yearly projections with a 7% average annual growth rate
const calculateProjections = () => {
  const startYear = 2024;
  const endYear = 2034;
  const initialValue = 640485; // Current net worth
  const annualGrowthRate = 0.07; // 7% annual growth

  const projections = [];
  let currentValue = initialValue;

  for (let year = startYear; year <= endYear; year++) {
    projections.push({
      year: year.toString(),
      value: Math.round(currentValue)
    });
    currentValue *= (1 + annualGrowthRate);
  }

  return projections;
};

const data = calculateProjections();

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
                dataKey="year" 
                tick={{ fontSize: 10 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                width={55}
                tick={{ fontSize: 10 }}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Projected Value"]}
                labelFormatter={(label) => `Year: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectionCard;