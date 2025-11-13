import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface VTUFormProps {
  serviceType: 'airtime' | 'data' | 'cable' | 'electricity';
}

export default function VTUForm({ serviceType }: VTUFormProps) {
  const [network, setNetwork] = useState('');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');

  const cashbackRates: Record<string, number> = {
    airtime: 2,
    data: 3,
    cable: 2.5,
    electricity: 1.5,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('VTU purchase:', { serviceType, network, amount, phone });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold capitalize">{serviceType} Purchase</h3>
          <Badge className="bg-primary/10 text-primary">
            {cashbackRates[serviceType]}% cashback
          </Badge>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="network">
              {serviceType === 'airtime' || serviceType === 'data' ? 'Network' : 'Provider'}
            </Label>
            <Select value={network} onValueChange={setNetwork}>
              <SelectTrigger id="network" data-testid="select-network">
                <SelectValue placeholder="Select network" />
              </SelectTrigger>
              <SelectContent>
                {serviceType === 'airtime' || serviceType === 'data' ? (
                  <>
                    <SelectItem value="mtn">MTN</SelectItem>
                    <SelectItem value="glo">Glo</SelectItem>
                    <SelectItem value="airtel">Airtel</SelectItem>
                    <SelectItem value="9mobile">9mobile</SelectItem>
                  </>
                ) : serviceType === 'cable' ? (
                  <>
                    <SelectItem value="dstv">DStv</SelectItem>
                    <SelectItem value="gotv">GOtv</SelectItem>
                    <SelectItem value="startimes">Startimes</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="ekedc">EKEDC</SelectItem>
                    <SelectItem value="ikedc">IKEDC</SelectItem>
                    <SelectItem value="aedc">AEDC</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              {serviceType === 'cable' || serviceType === 'electricity' ? 'Account Number' : 'Phone Number'}
            </Label>
            <Input
              id="phone"
              placeholder={serviceType === 'cable' || serviceType === 'electricity' ? 'Enter account number' : '08012345678'}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              data-testid="input-phone"
            />
          </div>

          {serviceType === 'data' && (
            <div className="space-y-2">
              <Label htmlFor="plan">Data Plan</Label>
              <Select>
                <SelectTrigger id="plan" data-testid="select-plan">
                  <SelectValue placeholder="Select data plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1gb">1GB - ₦500</SelectItem>
                  <SelectItem value="2gb">2GB - ₦1,000</SelectItem>
                  <SelectItem value="5gb">5GB - ₦2,000</SelectItem>
                  <SelectItem value="10gb">10GB - ₦3,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {serviceType !== 'data' && (
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                data-testid="input-amount"
              />
            </div>
          )}

          <div className="rounded-lg bg-muted p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium">₦{amount || '0'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cashback ({cashbackRates[serviceType]}%)</span>
              <span className="font-medium text-primary">
                +₦{amount ? ((parseFloat(amount) * cashbackRates[serviceType]) / 100).toFixed(2) : '0.00'}
              </span>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" data-testid="button-proceed">
            Proceed to Payment
          </Button>
        </form>
      </div>
    </Card>
  );
}
