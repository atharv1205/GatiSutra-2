import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { v2gData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Zap, Battery, TrendingUp } from "lucide-react";

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))"];

const V2GPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">V2G & EV Integration</h1>
        <p className="text-muted-foreground">Vehicle-to-Grid energy management and storage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Solar Generation" value="1,250 kWh" icon={Zap} trend="+8% today" variant="success" />
        <MetricCard title="EV Battery Storage" value="680 kWh" icon={Battery} trend="85% capacity" variant="primary" />
        <MetricCard title="Grid Supply" value="420 kWh" icon={TrendingUp} trend="Peak efficiency" variant="secondary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Solar vs EV Battery (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={v2gData.hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Legend />
                <Line type="monotone" dataKey="solar" stroke="hsl(var(--success))" strokeWidth={2} name="Solar (kWh)" />
                <Line type="monotone" dataKey="evBattery" stroke="hsl(var(--primary))" strokeWidth={2} name="EV Battery (kWh)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Energy Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={v2gData.energyDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {v2gData.energyDistribution.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default V2GPage;
