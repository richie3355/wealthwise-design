import { motion } from "framer-motion";
import NetWorthCard from "@/components/NetWorthCard";
import InvestmentsCard from "@/components/portfolio/InvestmentsCard";
import StockPerformanceCard from "@/components/portfolio/StockPerformanceCard";
import GoalsCard from "@/components/portfolio/GoalsCard";
import ProjectionCard from "@/components/portfolio/ProjectionCard";
import Navigation from "@/components/Navigation";
import FloatingChatbot from "@/components/FloatingChatbot";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto px-4 py-4"
      >
        <header className="mb-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-bold text-gray-900"
          >
            Portfolio Overview
          </motion.h1>
        </header>

        <div className="space-y-4">
          <NetWorthCard amount={640485} currency="USD" />
          <ProjectionCard />
          <InvestmentsCard />
          <StockPerformanceCard />
          <GoalsCard />
        </div>
      </motion.div>
      <Navigation />
      <FloatingChatbot />
    </div>
  );
};

export default Portfolio;