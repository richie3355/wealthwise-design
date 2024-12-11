import { motion } from "framer-motion";
import { Shield, Car, Heart, FileText, ChevronRight, Plus, Zap, DollarSign, Percent } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const insuranceTabs = [
  { icon: Shield, label: "Life", id: "life" },
  { icon: Car, label: "Motor", id: "motor" },
  { icon: Heart, label: "Health", id: "health" },
  { icon: FileText, label: "Orders", id: "orders" },
];

const features = [
  { 
    icon: DollarSign, 
    title: "No Income",
    subtitle: "Proof",
    className: "text-blue-500"
  },
  { 
    icon: Zap, 
    title: "Faster",
    subtitle: "policy issuance",
    className: "text-green-500"
  },
  { 
    icon: Percent, 
    title: "Upto 12%*",
    subtitle: "Discount",
    className: "text-green-600"
  },
];

const InsuranceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="glass-card rounded-3xl p-4 mt-6"
    >
      <h2 className="text-xl font-bold mb-4 text-left">My Insurances</h2>
      
      <Tabs defaultValue="life" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2 bg-transparent h-auto p-0">
          {insuranceTabs.map(({ icon: Icon, label, id }) => (
            <TabsTrigger
              key={id}
              value={id}
              className={`
                data-[state=active]:bg-blue-50 data-[state=active]:text-blue-500
                py-2 px-3 rounded-2xl bg-gray-50 border-none
                flex flex-col items-center gap-1
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs font-medium">{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-6 text-left">
        <h3 className="text-sm text-gray-700 mb-2">My approved insurance</h3>
        <div className="flex justify-between items-center mb-1">
          <span className="text-2xl font-bold text-[#1A1F2C]">$200,000</span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
            Claim now!
          </button>
        </div>
        <p className="text-red-500 text-xs mb-6">Offer Expires in 7 days</p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-10 h-10 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-1`}>
                <feature.icon className={`w-5 h-5 ${feature.className}`} />
              </div>
              <h4 className="font-semibold text-sm text-[#1A1F2C]">{feature.title}</h4>
              <p className="text-xs text-gray-500">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <Plus className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Track my existing Policy</h3>
              <p className="text-xs text-gray-500">Add my existing policies</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default InsuranceCard;