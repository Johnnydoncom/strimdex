import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Coins } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  reward: number;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
  category: string;
}

export default function TaskCard({ id, title, description, reward, difficulty, estimatedTime, category }: TaskCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`task-${id}`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">{category}</Badge>
              <Badge className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-primary">
              <Coins className="h-4 w-4" />
              <span className="text-xl font-bold tabular-nums">₦{reward}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{estimatedTime}</span>
          </div>
          <Button size="sm" data-testid={`button-start-task-${id}`}>
            Start Task
          </Button>
        </div>
      </div>
    </Card>
  );
}
