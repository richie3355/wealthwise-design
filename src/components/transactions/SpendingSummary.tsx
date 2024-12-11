import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Wallet } from "lucide-react";

const SpendingSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Credit Card Spending</span>
            </div>
            <span className="text-base font-bold">$2,450.77</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Debit Card Spending</span>
            </div>
            <span className="text-base font-bold">$1,850.23</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpendingSummary;