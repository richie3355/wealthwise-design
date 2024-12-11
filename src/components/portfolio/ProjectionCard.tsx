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
      <CardHeader className="flex flex-row items-center justify-between p-4 space-y-0">
        <CardTitle className="text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
            Net Worth Growth
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 sm:p-4">
        <div className="h-[120px] sm:h-[140px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 8 }}
                interval="preserveStartEnd"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                width={40}
                tick={{ fontSize: 8 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Net Worth"]}
                labelFormatter={(label) => `${label} 2024`}
                contentStyle={{ fontSize: '12px' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={1.5}
                dot={{ r: 1.5 }}
                activeDot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectionCard;