import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import VTUForm from "@/components/VTUForm";
import RecentActivity from "@/components/RecentActivity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Wifi, Tv, Zap } from "lucide-react";

export default function VTU() {
  const mockTransactions = [
    {
      id: '1',
      type: 'debit' as const,
      description: 'MTN Airtime Purchase',
      amount: 1000,
      status: 'completed' as const,
      date: '1 hour ago',
    },
    {
      id: '2',
      type: 'cashback' as const,
      description: 'Cashback from airtime',
      amount: 20,
      status: 'completed' as const,
      date: '1 hour ago',
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
              <h1 className="text-xl font-semibold">VTU Services</h1>
            </div>
            <ThemeToggle />
          </header>
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Tabs defaultValue="airtime" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="airtime" className="gap-2" data-testid="tab-airtime">
                        <Smartphone className="h-4 w-4" />
                        <span className="hidden sm:inline">Airtime</span>
                      </TabsTrigger>
                      <TabsTrigger value="data" className="gap-2" data-testid="tab-data">
                        <Wifi className="h-4 w-4" />
                        <span className="hidden sm:inline">Data</span>
                      </TabsTrigger>
                      <TabsTrigger value="cable" className="gap-2" data-testid="tab-cable">
                        <Tv className="h-4 w-4" />
                        <span className="hidden sm:inline">Cable TV</span>
                      </TabsTrigger>
                      <TabsTrigger value="electricity" className="gap-2" data-testid="tab-electricity">
                        <Zap className="h-4 w-4" />
                        <span className="hidden sm:inline">Electricity</span>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="airtime" className="mt-6">
                      <VTUForm serviceType="airtime" />
                    </TabsContent>
                    <TabsContent value="data" className="mt-6">
                      <VTUForm serviceType="data" />
                    </TabsContent>
                    <TabsContent value="cable" className="mt-6">
                      <VTUForm serviceType="cable" />
                    </TabsContent>
                    <TabsContent value="electricity" className="mt-6">
                      <VTUForm serviceType="electricity" />
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="lg:col-span-1">
                  <RecentActivity transactions={mockTransactions} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
