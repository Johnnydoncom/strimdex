import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  cashbackPercent: number;
  imageUrl?: string;
  category: string;
}

export default function ProductCard({ id, name, description, price, cashbackPercent, imageUrl, category }: ProductCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all group" data-testid={`product-${id}`}>
      <div className="aspect-square bg-muted relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/30" />
          </div>
        )}
        <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur">
          {cashbackPercent}% back
        </Badge>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <Badge variant="secondary" className="text-xs">{category}</Badge>
          <h3 className="font-semibold line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold tabular-nums">{formatCurrency(price)}</p>
            <p className="text-xs text-muted-foreground">
              Earn {formatCurrency(price * cashbackPercent / 100)} cashback
            </p>
          </div>
          <Button size="icon" data-testid={`button-buy-${id}`}>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
