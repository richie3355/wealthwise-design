import { useEffect } from "react";
import NetWorthCard from "../components/NetWorthCard";
import AssetsCard from "../components/AssetsCard";
import InsuranceCard from "../components/InsuranceCard";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "Wealth Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto px-6 py-8"
      >
        <header className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900"
          >
            Welcome Back
          </motion.h1>
        </header>

        <NetWorthCard amount={640485} currency="USD" />
        <AssetsCard />
        <InsuranceCard />
      </motion.div>
      <Navigation />
    </div>
  );
};

export default Index;