import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AlertCircle } from "lucide-react";

const monthlyData = [
  { month: "Jan", spending: 2800, budget: 3000 },
  { month: "Feb", spending: 3200, budget: 3000 },
  { month: "Mar", spending: 2900, budget: 3000 },
  { month: "Apr", spending: 3500, budget: 3000 },
  { month: "May", spending: 2700, budget: 3000 },
  { month: "Jun", spending: 2850, budget: 3000 },
];

const MonthlySpendingChart = () => {
  const getBarColor = (entry: any): string => {
    return entry.spending > entry.budget ? "#ef4444" : "#3b82f6";
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Monthly Spending</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 11 }}
                tickMargin={5}
              />
              <YAxis 
                tickFormatter={(value) => `$${value}`}
                width={40}
                tick={{ fontSize: 11 }}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value}`, "Amount"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar 
                dataKey="spending" 
                fill={getBarColor}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle className="h-3 w-3" />
          Red bars indicate months where spending exceeded budget
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlySpendingChart;