import { DollarSign, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface NetWorthCardProps {
  amount: number;
  currency: string;
}

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
    </motion.div>
  );
};

export default NetWorthCard;