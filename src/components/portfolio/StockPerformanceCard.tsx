import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartBar } from "lucide-react";

const data = [
  { stock: "AAPL", growth: 25.4 },
  { stock: "MSFT", growth: 22.1 },
  { stock: "GOOGL", growth: 18.7 },
  { stock: "AMZN", growth: 15.2 },
  { stock: "META", growth: 12.8 },
];

const StockPerformanceCard = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          <div className="flex items-center gap-2">
            <ChartBar className="h-5 w-5 text-blue-500" />
            Stock Performance
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="stock" />
              <YAxis 
                tickFormatter={(value) => `${value}%`}
                width={40}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, "Growth"]}
                labelFormatter={(label) => `Stock: ${label}`}
              />
              <Bar dataKey="growth" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockPerformanceCard;