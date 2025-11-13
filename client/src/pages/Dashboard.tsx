import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import WalletCard from "@/components/WalletCard";
import StatCard from "@/components/StatCard";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import TaskCard from "@/components/TaskCard";
import ReferralCard from "@/components/ReferralCard";
import { Wallet, TrendingUp, ListChecks, ShoppingBag } from "lucide-react";

export default function Dashboard() {
  const mockTransactions = [
    {
      id: '1',
      type: 'cashback' as const,
      description: 'Cashback from airtime purchase',
      amount: 50,
      status: 'completed' as const,
      date: '2 hours ago',
    },
    {
      id: '2',
      type: 'debit' as const,
      description: 'DStv Premium Subscription',
      amount: 24500,
      status: 'completed' as const,
      date: '5 hours ago',
    },
    {
      id: '3',
      type: 'credit' as const,
      description: 'Wallet funding via bank transfer',
      amount: 50000,
      status: 'completed' as const,
      date: 'Yesterday',
    },
  ];

  const mockTasks = [
    {
      id: '1',
      title: 'Complete Brand Survey',
      description: 'Share your opinion about popular brands in Nigeria. Answer 10 questions.',
      reward: 250,
      difficulty: 'easy' as const,
      estimatedTime: '5 mins',
      category: 'Survey',
    },
    {
      id: '2',
      title: 'Watch Product Video',
      description: 'Watch a 2-minute video about a new product and answer quiz questions.',
      reward: 150,
      difficulty: 'easy' as const,
      estimatedTime: '3 mins',
      category: 'Video',
    },
  ];

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b bg-background">
            <div className="flex items-center gap-3">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <ThemeToggle />
          </header>
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <WalletCard availableBalance={45250.50} lockedBalance={2840.25} />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Cashback Earned"
                  value="₦12,450"
                  icon={Wallet}
                  trend={{ value: '12.5%', positive: true }}
                  description="This month"
                />
                <StatCard
                  title="Referrals"
                  value="24"
                  icon={TrendingUp}
                  trend={{ value: '8', positive: true }}
                  description="Active referrals"
                />
                <StatCard
                  title="Tasks Completed"
                  value="156"
                  icon={ListChecks}
                  description="All time"
                />
                <StatCard
                  title="Total Spent"
                  value="₦185,000"
                  icon={ShoppingBag}
                  description="This month"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Quick Actions</h2>
                <QuickActions />
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <RecentActivity transactions={mockTransactions} />
                <ReferralCard
                  referralCode="STRM123ABC"
                  totalReferrals={24}
                  totalEarnings={12000}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Available Tasks</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockTasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
