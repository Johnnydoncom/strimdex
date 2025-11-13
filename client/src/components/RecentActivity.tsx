import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, Gift, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: string;
  type: 'credit' | 'debit' | 'cashback' | 'purchase';
  description: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

interface RecentActivityProps {
  transactions: Transaction[];
}

export default function RecentActivity({ transactions }: RecentActivityProps) {
  const getIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'credit': return ArrowDownLeft;
      case 'debit': return ArrowUpRight;
      case 'cashback': return Gift;
      case 'purchase': return Smartphone;
    }
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'failed': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    }).format(Math.abs(amount));
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <Button variant="ghost" size="sm" data-testid="button-view-all">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => {
          const Icon = getIcon(transaction.type);
          return (
            <div 
              key={transaction.id} 
              className="flex items-center gap-4 p-3 rounded-lg hover-elevate transition-all"
              data-testid={`transaction-${transaction.id}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.type === 'credit' || transaction.type === 'cashback' 
                  ? 'bg-green-100 dark:bg-green-900/30' 
                  : 'bg-red-100 dark:bg-red-900/30'
              }`}>
                <Icon className={`h-5 w-5 ${
                  transaction.type === 'credit' || transaction.type === 'cashback'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>

              <div className="text-right">
                <p className={`text-sm font-semibold tabular-nums ${
                  transaction.type === 'credit' || transaction.type === 'cashback'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-foreground'
                }`}>
                  {transaction.type === 'credit' || transaction.type === 'cashback' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </p>
                <Badge variant="secondary" className={`text-xs ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
