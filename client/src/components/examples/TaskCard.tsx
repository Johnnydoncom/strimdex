import TaskCard from '../TaskCard'

export default function TaskCardExample() {
  return (
    <TaskCard 
      id="1"
      title="Complete Brand Survey"
      description="Share your opinion about popular brands in Nigeria. Answer 10 questions and earn instant cashback."
      reward={250}
      difficulty="easy"
      estimatedTime="5 mins"
      category="Survey"
    />
  )
}
