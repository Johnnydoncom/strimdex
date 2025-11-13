import StatCard from '../StatCard'
import { Wallet } from 'lucide-react'

export default function StatCardExample() {
  return (
    <StatCard 
      title="Total Cashback" 
      value="₦12,450" 
      icon={Wallet}
      trend={{ value: '12.5%', positive: true }}
      description="This month"
    />
  )
}
