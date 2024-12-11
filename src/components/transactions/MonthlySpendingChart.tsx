import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts";

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
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Monthly Spending</CardTitle>
          <span className="text-sm text-muted-foreground">
            Monthly Budget: ${monthlyData[0].budget.toLocaleString()}
          </span>
        </div>
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
              <ReferenceLine 
                y={monthlyData[0].budget} 
                stroke="#64748b" 
                strokeDasharray="3 3"
                label={{ 
                  value: 'Budget Limit',
                  position: 'right',
                  fontSize: 10,
                  fill: '#64748b'
                }}
              />
              <Bar dataKey="spending" radius={[4, 4, 0, 0]}>
                {monthlyData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.spending > entry.budget ? "#ef4444" : "#3b82f6"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlySpendingChart;