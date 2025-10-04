import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";
import { adaptiveControlData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Brain, Zap, TrendingDown } from "lucide-react";

const AdaptiveControlPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Self-Learning & Adaptive Control</h1>
        <p className="text-muted-foreground">AI-driven tariff optimization and demand response</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Learning Efficiency" value={`${adaptiveControlData.efficiency}%`} icon={Brain} trend="Continuously improving" variant="primary" />
        <MetricCard title="Cost Savings" value="$18.5K" icon={TrendingDown} trend="This month" variant="success" />
        <MetricCard title="Tariff Optimization" value="Active" icon={Zap} trend="Real-time adaptation" variant="success" />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Tariff Price vs Adaptive Usage (24h)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={adaptiveControlData.tariffUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" label={{ value: 'Price (¢/kWh)', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" label={{ value: 'Usage (kWh)', angle: 90, position: 'insideRight' }} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="tariff" stroke="hsl(var(--warning))" strokeWidth={2} name="Tariff Price" />
              <Line yAxisId="right" type="monotone" dataKey="usage" stroke="hsl(var(--primary))" strokeWidth={2} name="Usage" />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4">
            System automatically reduces consumption during high-tariff periods and shifts load to low-tariff windows.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Efficiency Improvement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{adaptiveControlData.efficiency}%</div>
              <p className="text-sm text-muted-foreground">Current Efficiency</p>
            </div>
            <Progress value={adaptiveControlData.efficiency} className="h-3" />
            <div className="space-y-2 text-sm mt-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Week 1</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Week 2</span>
                <span className="font-medium">82%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Week 3</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current</span>
                <span className="font-medium text-success">{adaptiveControlData.efficiency}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Learning Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <p className="font-medium text-sm text-success mb-1">Peak Avoidance</p>
              <p className="text-xs text-muted-foreground">Learned to shift 85% of flexible load away from peak hours</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <p className="font-medium text-sm text-primary mb-1">Pattern Recognition</p>
              <p className="text-xs text-muted-foreground">Identified recurring usage patterns with 94% accuracy</p>
            </div>
            <div className="p-3 bg-secondary/10 rounded-lg">
              <p className="font-medium text-sm text-secondary mb-1">Weather Adaptation</p>
              <p className="text-xs text-muted-foreground">Adjusts predictions based on weather forecasts</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg">
              <p className="font-medium text-sm text-warning mb-1">Next Optimization</p>
              <p className="text-xs text-muted-foreground">Scheduled load shift at 14:00 - save $45</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdaptiveControlPage;
