import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

// Calculate historical growth data (last 12 months)
const calculateHistoricalGrowth = () => {
  const initialValue = 500000; // Value from 12 months ago
  const monthlyGrowthRate = 0.02; // Average 2% monthly growth
  const months = [
    'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'
  ];

  const historicalData = [];
  let currentValue = initialValue;

  for (let i = 0; i < months.length; i++) {
    historicalData.push({
      month: months[i],
      value: Math.round(currentValue)
    });
    currentValue *= (1 + monthlyGrowthRate);
  }

  return historicalData;
};

const data = calculateHistoricalGrowth();

const ProjectionCard = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-blue-500" />
            Net Worth Growth
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[140px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 9 }}
                interval="preserveStartEnd"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                width={45}
                tick={{ fontSize: 9 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Net Worth"]}
                labelFormatter={(label) => `${label} 2024`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 2 }}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectionCard;