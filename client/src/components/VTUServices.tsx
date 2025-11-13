import { Smartphone, Wifi, Tv, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function VTUServices() {
  const services = [
    {
      icon: Smartphone,
      title: "Airtime",
      cashback: "2%",
      description: "All networks",
    },
    {
      icon: Wifi,
      title: "Data Bundles",
      cashback: "3%",
      description: "Best rates",
    },
    {
      icon: Tv,
      title: "Cable TV",
      cashback: "2.5%",
      description: "DStv, GOtv, Startimes",
    },
    {
      icon: Zap,
      title: "Electricity",
      cashback: "1.5%",
      description: "All DISCOs",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">VTU Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay for services and earn cashback on every transaction
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-background rounded-xl p-6 border hover-elevate transition-all cursor-pointer"
              data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {service.cashback} back
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
