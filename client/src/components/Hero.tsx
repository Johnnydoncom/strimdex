import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Wallet, TrendingUp, Gift, Zap, Coins } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nigeria's #1 Cashback Platform</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Earn{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Cashback
                </span>
                {" "}on Every Transaction
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Turn your everyday spending into rewards. Get instant cashback on airtime, data, bills, shopping & more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14 px-8 shadow-lg shadow-primary/25" data-testid="button-register-user">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8" data-testid="button-register-sme">
                Register as SME
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <Card className="p-4 bg-background/60 backdrop-blur border-primary/10">
                <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Active Users</div>
              </Card>
              <Card className="p-4 bg-background/60 backdrop-blur border-primary/10">
                <div className="text-2xl md:text-3xl font-bold text-primary">₦2.5M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Paid Out</div>
              </Card>
              <Card className="p-4 bg-background/60 backdrop-blur border-primary/10">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Partners</div>
              </Card>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-6 w-full max-w-lg">
              <Card className="p-6 bg-background/90 backdrop-blur shadow-xl border-primary/20 hover-elevate transition-all col-span-2 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <Wallet className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Your Balance</div>
                    <div className="text-3xl font-bold text-primary">₦48,090.75</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">This Month</div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">+₦12,450</div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-background/90 backdrop-blur shadow-xl border-primary/20 hover-elevate transition-all animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Today's Earnings</div>
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">+₦2,450</div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-background/90 backdrop-blur shadow-xl border-primary/20 hover-elevate transition-all animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Cashback Rate</div>
                    <div className="text-xl font-bold text-primary">Up to 5%</div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-background/90 backdrop-blur shadow-xl border-primary/20 hover-elevate transition-all animate-float" style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Transactions</div>
                    <div className="text-xl font-bold">156</div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-background/90 backdrop-blur shadow-xl border-primary/20 hover-elevate transition-all animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Coins className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Referrals</div>
                    <div className="text-xl font-bold">24</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
