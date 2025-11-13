import ReferralCard from '../ReferralCard'

export default function ReferralCardExample() {
  return (
    <ReferralCard 
      referralCode="STRM123ABC"
      totalReferrals={24}
      totalEarnings={12000}
    />
  )
}
