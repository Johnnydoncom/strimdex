import RecentActivity from '../RecentActivity'

export default function RecentActivityExample() {
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
    {
      id: '4',
      type: 'purchase' as const,
      description: 'MTN 10GB Data Bundle',
      amount: 3000,
      status: 'completed' as const,
      date: 'Yesterday',
    },
  ];

  return <RecentActivity transactions={mockTransactions} />
}
