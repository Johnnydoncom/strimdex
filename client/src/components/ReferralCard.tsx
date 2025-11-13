import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Share2, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReferralCardProps {
  referralCode: string;
  totalReferrals: number;
  totalEarnings: number;
}

export default function ReferralCard({ referralCode, totalReferrals, totalEarnings }: ReferralCardProps) {
  const { toast } = useToast();
  const referralLink = `https://strimdex.com/ref/${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Strimdex',
        text: 'Earn cashback on every transaction! Use my referral link:',
        url: referralLink,
      });
    } else {
      copyToClipboard();
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Refer & Earn</h3>
          <p className="text-sm text-muted-foreground">
            Invite friends and earn ₦500 for each successful referral
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span className="text-xs">Total Referrals</span>
            </div>
            <p className="text-2xl font-bold tabular-nums" data-testid="text-total-referrals">{totalReferrals}</p>
          </div>
          <div className="p-4 rounded-lg bg-muted space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xs">Total Earnings</span>
            </div>
            <p className="text-2xl font-bold tabular-nums text-primary" data-testid="text-referral-earnings">
              ₦{totalEarnings.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
              data-testid="input-referral-link"
            />
            <Button
              size="icon"
              variant="outline"
              onClick={copyToClipboard}
              data-testid="button-copy"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <Button
            className="w-full"
            onClick={share}
            data-testid="button-share"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Referral Link
          </Button>
        </div>
      </div>
    </Card>
  );
}
