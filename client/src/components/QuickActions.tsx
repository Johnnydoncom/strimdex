import { Smartphone, Wifi, Tv, Zap, ShoppingBag, ListTodo, UserPlus, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuickActions() {
  const actions = [
    { icon: Smartphone, label: "Buy Airtime", color: "bg-blue-500" },
    { icon: Wifi, label: "Buy Data", color: "bg-green-500" },
    { icon: Tv, label: "Cable TV", color: "bg-purple-500" },
    { icon: Zap, label: "Electricity", color: "bg-yellow-500" },
    { icon: ShoppingBag, label: "Marketplace", color: "bg-pink-500" },
    { icon: ListTodo, label: "Tasks", color: "bg-indigo-500" },
    { icon: UserPlus, label: "Refer & Earn", color: "bg-orange-500" },
    { icon: CreditCard, label: "Fund Wallet", color: "bg-red-500" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          className="h-auto flex-col gap-3 p-4 hover-elevate"
          data-testid={`button-${action.label.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => console.log(`${action.label} clicked`)}
        >
          <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
            <action.icon className="h-6 w-6 text-white" />
          </div>
          <span className="text-sm font-medium">{action.label}</span>
        </Button>
      ))}
    </div>
  );
}
