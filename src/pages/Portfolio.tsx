import { motion } from "framer-motion";
import NetWorthCard from "@/components/NetWorthCard";
import ProjectionCard from "@/components/portfolio/ProjectionCard";
import InvestmentsCard from "@/components/portfolio/InvestmentsCard";
import StockPerformanceCard from "@/components/portfolio/StockPerformanceCard";
import GoalsCard from "@/components/portfolio/GoalsCard";
import Navigation from "@/components/Navigation";

const Portfolio = () => {
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
            Portfolio Overview
          </motion.h1>
        </header>

        <div className="space-y-6">
          <NetWorthCard amount={640485} currency="USD" />
          <ProjectionCard />
          <InvestmentsCard />
          <StockPerformanceCard />
          <GoalsCard />
        </div>
      </motion.div>
      <Navigation />
    </div>
  );
};

export default Portfolio;