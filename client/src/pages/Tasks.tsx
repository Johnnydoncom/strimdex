import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import TaskCard from "@/components/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tasks() {
  const allTasks = [
    {
      id: '1',
      title: 'Complete Brand Survey',
      description: 'Share your opinion about popular brands in Nigeria. Answer 10 questions and earn instant cashback.',
      reward: 250,
      difficulty: 'easy' as const,
      estimatedTime: '5 mins',
      category: 'Survey',
    },
    {
      id: '2',
      title: 'Watch Product Video',
      description: 'Watch a 2-minute video about a new product and answer quiz questions to verify you watched it.',
      reward: 150,
      difficulty: 'easy' as const,
      estimatedTime: '3 mins',
      category: 'Video',
    },
    {
      id: '3',
      title: 'App Testing Feedback',
      description: 'Test a new mobile application and provide detailed feedback on your experience.',
      reward: 500,
      difficulty: 'medium' as const,
      estimatedTime: '15 mins',
      category: 'Testing',
    },
    {
      id: '4',
      title: 'Market Research Interview',
      description: 'Participate in a 30-minute phone interview about consumer preferences.',
      reward: 1000,
      difficulty: 'hard' as const,
      estimatedTime: '30 mins',
      category: 'Interview',
    },
    {
      id: '5',
      title: 'Social Media Engagement',
      description: 'Follow brand pages, like and share specific posts on your social media.',
      reward: 100,
      difficulty: 'easy' as const,
      estimatedTime: '2 mins',
      category: 'Social',
    },
    {
      id: '6',
      title: 'Product Review',
      description: 'Write a detailed review of a product you recently purchased.',
      reward: 300,
      difficulty: 'medium' as const,
      estimatedTime: '10 mins',
      category: 'Review',
    },
  ];

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b bg-background">
            <div className="flex items-center gap-3">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <h1 className="text-xl font-semibold">Micro-Tasks</h1>
            </div>
            <ThemeToggle />
          </header>
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all" data-testid="tab-all-tasks">All Tasks</TabsTrigger>
                  <TabsTrigger value="survey" data-testid="tab-survey">Surveys</TabsTrigger>
                  <TabsTrigger value="video" data-testid="tab-video">Videos</TabsTrigger>
                  <TabsTrigger value="testing" data-testid="tab-testing">Testing</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allTasks.map((task) => (
                      <TaskCard key={task.id} {...task} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="survey" className="mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allTasks.filter(t => t.category === 'Survey').map((task) => (
                      <TaskCard key={task.id} {...task} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="video" className="mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allTasks.filter(t => t.category === 'Video').map((task) => (
                      <TaskCard key={task.id} {...task} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="testing" className="mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allTasks.filter(t => t.category === 'Testing').map((task) => (
                      <TaskCard key={task.id} {...task} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
