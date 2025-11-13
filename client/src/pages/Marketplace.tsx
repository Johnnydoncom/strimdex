import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Marketplace() {
  const products = [
    {
      id: '1',
      name: 'Netflix Premium 1 Month',
      description: 'Stream unlimited movies and TV shows in Ultra HD on 4 devices',
      price: 5000,
      cashbackPercent: 5,
      category: 'Streaming',
    },
    {
      id: '2',
      name: 'Spotify Premium 3 Months',
      description: 'Ad-free music streaming with offline downloads',
      price: 3000,
      cashbackPercent: 4,
      category: 'Streaming',
    },
    {
      id: '3',
      name: 'Amazon Gift Card ₦10,000',
      description: 'Digital gift card for Amazon shopping, instant delivery',
      price: 10000,
      cashbackPercent: 3,
      category: 'Gift Cards',
    },
    {
      id: '4',
      name: 'YouTube Premium Family',
      description: 'Ad-free videos, downloads, and YouTube Music for up to 6 people',
      price: 4500,
      cashbackPercent: 5,
      category: 'Streaming',
    },
    {
      id: '5',
      name: 'PlayStation Plus 1 Year',
      description: 'Online multiplayer gaming and monthly free games',
      price: 25000,
      cashbackPercent: 6,
      category: 'Gaming',
    },
    {
      id: '6',
      name: 'Xbox Game Pass Ultimate',
      description: 'Access to hundreds of games on Xbox and PC',
      price: 12000,
      cashbackPercent: 5,
      category: 'Gaming',
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
              <h1 className="text-xl font-semibold">Marketplace</h1>
            </div>
            <ThemeToggle />
          </header>
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all" data-testid="tab-all-products">All Products</TabsTrigger>
                  <TabsTrigger value="streaming" data-testid="tab-streaming">Streaming</TabsTrigger>
                  <TabsTrigger value="gaming" data-testid="tab-gaming">Gaming</TabsTrigger>
                  <TabsTrigger value="giftcards" data-testid="tab-giftcards">Gift Cards</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="streaming" className="mt-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.filter(p => p.category === 'Streaming').map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="gaming" className="mt-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.filter(p => p.category === 'Gaming').map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="giftcards" className="mt-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.filter(p => p.category === 'Gift Cards').map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
