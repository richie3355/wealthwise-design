import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Wallet } from "lucide-react";

const transactions = [
  {
    id: 1,
    date: "2024-03-10",
    description: "Amazon Purchase",
    amount: -89.99,
    type: "credit",
  },
  {
    id: 2,
    date: "2024-03-09",
    description: "Salary Deposit",
    amount: 3500.00,
    type: "debit",
  },
  {
    id: 3,
    date: "2024-03-08",
    description: "Grocery Store",
    amount: -156.78,
    type: "credit",
  },
  {
    id: 4,
    date: "2024-03-07",
    description: "Gas Station",
    amount: -45.00,
    type: "credit",
  },
];

const TransactionHistory = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Transaction History</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Date</TableHead>
                <TableHead className="text-xs">Description</TableHead>
                <TableHead className="text-xs">Type</TableHead>
                <TableHead className="text-right text-xs">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="text-xs py-2">{new Date(transaction.date).toLocaleDateString()}</TableCell>
                  <TableCell className="text-xs py-2">{transaction.description}</TableCell>
                  <TableCell className="text-xs py-2">
                    {transaction.type === "credit" ? (
                      <CreditCard className="h-3 w-3 text-blue-500 inline mr-1" />
                    ) : (
                      <Wallet className="h-3 w-3 text-green-500 inline mr-1" />
                    )}
                    {transaction.type}
                  </TableCell>
                  <TableCell className={`text-right text-xs py-2 ${
                    transaction.amount < 0 ? "text-red-500" : "text-green-500"
                  }`}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;