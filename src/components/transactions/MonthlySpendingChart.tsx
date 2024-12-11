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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Monthly Spending</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tickFormatter={(value) => `$${value}`}
                width={45}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value}`, "Amount"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar 
                dataKey="spending" 
                fill={(data: any) => data.spending > data.budget ? "#ef4444" : "#3b82f6"}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-red-500">
          <AlertCircle className="h-4 w-4" />
          Red bars indicate months where spending exceeded budget
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlySpendingChart;