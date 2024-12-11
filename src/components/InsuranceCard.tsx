import { motion } from "framer-motion";
import { Shield, Car, Heart, FileText } from "lucide-react";

const insurances = [
  { icon: Shield, label: "Life", value: "2.0Cr", status: "Active" },
  { icon: Car, label: "Motor", value: "5L", status: "Pending" },
  { icon: Heart, label: "Health", value: "10L", status: "Active" },
  { icon: FileText, label: "Orders", value: "Pending", status: "In Progress" },
];

const InsuranceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="glass-card rounded-2xl p-6 mt-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">My Insurances</h2>
        <button className="text-sm text-primary font-medium hover:opacity-80 transition-opacity">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {insurances.map(({ icon: Icon, label, value, status }) => (
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
                <p className="text-sm text-gray-500">{value}</p>
              </div>
            </div>
            <span className={`text-sm font-medium ${
              status === 'Active' ? 'text-green-500' : 
              status === 'Pending' ? 'text-yellow-500' : 
              'text-blue-500'
            }`}>
              {status}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InsuranceCard;