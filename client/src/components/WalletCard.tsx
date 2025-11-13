import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ArrowUpRight, ArrowDownLeft, Send } from "lucide-react";
import { useState } from "react";

interface WalletCardProps {
  availableBalance: number;
  lockedBalance: number;
}

export default function WalletCard({ availableBalance, lockedBalance }: WalletCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 border-0 text-primary-foreground">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-primary-foreground/80 mb-1">Total Balance</p>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold tabular-nums" data-testid="text-total-balance">
                {showBalance ? formatCurrency(availableBalance + lockedBalance) : '₦•••••••'}
              </h2>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowBalance(!showBalance)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-toggle-balance"
              >
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-primary-foreground/70 mb-1">Available</p>
            <p className="text-lg font-semibold tabular-nums" data-testid="text-available-balance">
              {showBalance ? formatCurrency(availableBalance) : '₦•••••'}
            </p>
          </div>
          <div>
            <p className="text-xs text-primary-foreground/70 mb-1">Locked Cashback</p>
            <p className="text-lg font-semibold tabular-nums" data-testid="text-locked-balance">
              {showBalance ? formatCurrency(lockedBalance) : '₦•••••'}
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            className="flex-1 bg-background text-foreground hover:bg-background/90"
            data-testid="button-add-funds"
          >
            <ArrowDownLeft className="h-4 w-4 mr-2" />
            Add Funds
          </Button>
          <Button 
            className="flex-1 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-0"
            variant="outline"
            data-testid="button-withdraw"
          >
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Withdraw
          </Button>
          <Button 
            size="icon"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-0"
            variant="outline"
            data-testid="button-transfer"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl -ml-12 -mb-12" />
    </Card>
  );
}
