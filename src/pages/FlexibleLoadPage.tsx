import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";
import { flexibleLoadData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Gauge, TrendingDown, Thermometer } from "lucide-react";

const FlexibleLoadPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Flexible Load & Comfort Optimization</h1>
        <p className="text-muted-foreground">Smart load management while maintaining optimal comfort</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Power Saved" value="285 kWh" icon={TrendingDown} trend="18% reduction" variant="success" />
        <MetricCard title="Comfort Index" value={`${flexibleLoadData.comfortIndex}%`} icon={Thermometer} trend="Optimal range" variant="primary" />
        <MetricCard title="Active Optimization" value="4 Systems" icon={Gauge} trend="All operational" variant="secondary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Power Consumption: Before vs After Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={flexibleLoadData.consumption}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Legend />
                <Bar dataKey="before" fill="hsl(var(--destructive))" name="Before (kWh)" />
                <Bar dataKey="after" fill="hsl(var(--success))" name="After (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Comfort Index</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {flexibleLoadData.comfortIndex}%
                </div>
                <p className="text-sm text-muted-foreground">Current Level</p>
              </div>
            </div>
            <Progress value={flexibleLoadData.comfortIndex} className="h-3" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Temperature</span>
                <span className="font-medium">22°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Humidity</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Air Quality</span>
                <span className="font-medium text-success">Excellent</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlexibleLoadPage;
