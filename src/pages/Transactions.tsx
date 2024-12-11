import { Card } from "@/components/ui/card";
import TransactionHistory from "@/components/transactions/TransactionHistory";
import MonthlySpendingChart from "@/components/transactions/MonthlySpendingChart";
import SpendingSummary from "@/components/transactions/SpendingSummary";
import Navigation from "@/components/Navigation";

const Transactions = () => {
  return (
    <div className="container pb-20 pt-4 space-y-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      
      <SpendingSummary />
      
      <MonthlySpendingChart />
      
      <TransactionHistory />
      
      <Navigation />
    </div>
  );
};

export default Transactions;