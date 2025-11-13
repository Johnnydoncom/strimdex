import { Smartphone, Wallet, Gift, Users, Shield, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "VTU Services",
      description: "Buy airtime, data bundles, cable TV, and pay electricity bills with instant cashback.",
    },
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Secure wallet to manage your funds, track cashback, and make quick withdrawals.",
    },
    {
      icon: Gift,
      title: "Marketplace",
      description: "Shop digital products and services with exclusive cashback offers on every purchase.",
    },
    {
      icon: Users,
      title: "Referral Program",
      description: "Earn extra rewards by referring friends and family to Strimdex platform.",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Bank-level security with encrypted transactions and data protection.",
    },
    {
      icon: Zap,
      title: "Instant Rewards",
      description: "Complete micro-tasks and surveys to earn additional cashback instantly.",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Why Choose Strimdex?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to earn while you spend
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group p-6 rounded-xl border bg-card hover-elevate transition-all"
              data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
