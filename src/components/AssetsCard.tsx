import { motion } from "framer-motion";
import { Wallet, TrendingUp, Building, Coins, Briefcase, Landmark, CreditCard, DollarSign } from "lucide-react";

const assets = [
  { icon: Wallet, label: "Cash", value: 25000, growth: 2.3 },
  { icon: Coins, label: "Crypto", value: 15000, growth: -2.5 },
  { icon: TrendingUp, label: "Public Investments", value: 150000, growth: 5.7 },
  { icon: Briefcase, label: "Company Equity", value: 300000, growth: 4.2 },
  { icon: Landmark, label: "Fund Investments", value: 200000, growth: 3.8 },
  { icon: Building, label: "Real Estate", value: 450000, growth: 3.1 },
  { icon: CreditCard, label: "Liabilities", value: -50000, growth: -1.2 },
];

const AssetsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="glass-card rounded-2xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Assets</h2>
        <button className="text-sm text-primary font-medium hover:opacity-80 transition-opacity">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {assets.map(({ icon: Icon, label, value, growth }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 hover:bg-gray-50/80 transition-colors"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{label}</h3>
                <p className="text-sm text-gray-500">${Math.abs(value).toLocaleString()}</p>
              </div>
            </div>
            <span className={`text-sm font-medium ${growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {growth >= 0 ? '+' : ''}{growth}%
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AssetsCard;