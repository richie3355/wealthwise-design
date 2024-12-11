import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

// Calculate historical growth data (last 12 months)
const calculateHistoricalGrowth = () => {
  const initialValue = 500000; // Value from 12 months ago
  const monthlyGrowthRate = 0.02; // Average 2% monthly growth
  const months = [
    'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023',
    'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'
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
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Net Worth Growth (Last 12 Months)
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
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                width={55}
                tick={{ fontSize: 10 }}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Net Worth"]}
                labelFormatter={(label) => `${label}`}
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