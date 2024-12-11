import { DollarSign, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface NetWorthCardProps {
  amount: number;
  currency: string;
}

const projectionData = [
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

const NetWorthCard = ({ amount, currency }: NetWorthCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card rounded-2xl p-4 mb-4"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-1">Current Net Worth</h2>
          <div className="flex items-center">
            <DollarSign className="w-6 h-6 text-primary mr-1" />
            <span className="text-2xl font-semibold">
              {amount.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-1">{currency}</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <div className="h-[150px] w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={projectionData}>
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis 
              tickFormatter={(value) => `$${(value / 1000)}k`}
              width={45}
              tick={{ fontSize: 12 }}
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
    </motion.div>
  );
};

export default NetWorthCard;