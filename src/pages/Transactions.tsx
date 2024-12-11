import { Card } from "@/components/ui/card";
import TransactionHistory from "@/components/transactions/TransactionHistory";
import MonthlySpendingChart from "@/components/transactions/MonthlySpendingChart";
import SpendingSummary from "@/components/transactions/SpendingSummary";
import Navigation from "@/components/Navigation";

const Transactions = () => {
  return (
    <div className="container max-w-5xl pb-16 pt-3 space-y-3">
      <h1 className="text-xl font-bold">Transactions</h1>
      
      <SpendingSummary />
      
      <MonthlySpendingChart />
      
      <TransactionHistory />
      
      <Navigation />
    </div>
  );
};

export default Transactions;