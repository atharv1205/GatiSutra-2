import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { educationData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { GraduationCap, Trophy, Target } from "lucide-react";

const EducationPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Education & Gamification</h1>
        <p className="text-muted-foreground">Leaderboards, challenges, and energy-saving rewards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Active Participants" value="850+" icon={GraduationCap} trend="Students enrolled" variant="primary" />
        <MetricCard title="Total Points Awarded" value="24.5K" icon={Trophy} trend="This semester" variant="success" />
        <MetricCard title="Active Challenges" value="3" icon={Target} trend="In progress" variant="secondary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-warning" />
              Energy Saving Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Savings</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {educationData.leaderboard.map((entry) => (
                  <TableRow key={entry.rank}>
                    <TableCell>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        entry.rank === 1 ? 'bg-warning text-warning-foreground' :
                        entry.rank === 2 ? 'bg-muted' :
                        entry.rank === 3 ? 'bg-primary/20' : 'bg-muted/50'
                      }`}>
                        {entry.rank}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{entry.name}</TableCell>
                    <TableCell>
                      <Badge variant="default">{entry.savings}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">
                      {entry.points.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Active Challenges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {educationData.challenges.map((challenge, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm">{challenge.name}</p>
                  <span className="text-xs text-muted-foreground">
                    {challenge.progress}/{challenge.target}
                  </span>
                </div>
                <Progress 
                  value={(challenge.progress / challenge.target) * 100} 
                  className="h-3"
                />
                <p className="text-xs text-muted-foreground">
                  {Math.round((challenge.progress / challenge.target) * 100)}% Complete
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Rewards Shop</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
              <p className="font-medium text-sm mb-1">Campus Cafe Voucher</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">500 points</span>
                <Badge variant="secondary">Available</Badge>
              </div>
            </div>
            <div className="p-3 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
              <p className="font-medium text-sm mb-1">Library Late Fee Waiver</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">750 points</span>
                <Badge variant="secondary">Available</Badge>
              </div>
            </div>
            <div className="p-3 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
              <p className="font-medium text-sm mb-1">Eco Workshop Pass</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">1000 points</span>
                <Badge variant="secondary">Available</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                🌟
              </div>
              <div>
                <p className="font-medium text-sm">Energy Champion</p>
                <p className="text-xs text-muted-foreground">Save 100 kWh</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                🏆
              </div>
              <div>
                <p className="font-medium text-sm">Consistency King</p>
                <p className="text-xs text-muted-foreground">30 days streak</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center">
                🌱
              </div>
              <div>
                <p className="font-medium text-sm">Green Warrior</p>
                <p className="text-xs text-muted-foreground">Offset 50kg CO₂</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Learning Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm mb-1">📚 Energy 101 Course</p>
              <p className="text-xs text-muted-foreground">12 modules • 3 hours</p>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm mb-1">🎥 Sustainability Webinars</p>
              <p className="text-xs text-muted-foreground">Weekly sessions</p>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm mb-1">📊 Impact Reports</p>
              <p className="text-xs text-muted-foreground">View your stats</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducationPage;
