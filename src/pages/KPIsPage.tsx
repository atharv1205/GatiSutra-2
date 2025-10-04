import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { kpisData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Users, DollarSign, Leaf } from "lucide-react";

const KPIsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Social, Economic & Environmental KPIs</h1>
        <p className="text-muted-foreground">Impact metrics across all sustainability dimensions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Jobs Created"
          value={kpisData.metrics.jobsCreated}
          icon={Users}
          trend="Direct & indirect employment"
          variant="primary"
        />
        <MetricCard
          title="Money Saved"
          value={kpisData.metrics.moneySaved}
          icon={DollarSign}
          trend="Annual operational savings"
          variant="success"
        />
        <MetricCard
          title="CO₂ Reduction"
          value={kpisData.metrics.co2Reduced}
          icon={Leaf}
          trend="Carbon offset achieved"
          variant="success"
        />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Monthly Carbon Reduction Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={kpisData.carbonTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Tons CO₂', angle: -90, position: 'insideLeft' }} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Bar dataKey="reduction" fill="hsl(var(--success))" name="CO₂ Reduced (tons)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Social Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Community Programs</span>
              <span className="font-bold text-lg">12 Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Training Sessions</span>
              <span className="font-bold text-lg">48/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Student Engagement</span>
              <span className="font-bold text-lg">850+</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Economic Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">ROI Period</span>
              <span className="font-bold text-lg">4.2 years</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Energy Cost Reduction</span>
              <span className="font-bold text-lg text-success">-32%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Revenue from Trading</span>
              <span className="font-bold text-lg">$180K/year</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KPIsPage;
