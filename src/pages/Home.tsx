import { Link } from "react-router-dom";
import { 
  Zap, Gauge, TrendingUp, BarChart3, Users, 
  Activity, Scale, AlertTriangle, Brain, 
  Wrench, GraduationCap, Boxes, ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const sparklineData = Array.from({ length: 10 }, () => ({
  value: Math.random() * 100,
}));

const modules = [
  {
    title: "V2G & EV Integration",
    path: "/dashboard/v2g",
    icon: Zap,
    description: "Monitor solar generation and EV battery storage in real-time",
    color: "primary",
  },
  {
    title: "Flexible Load",
    path: "/dashboard/flexible-load",
    icon: Gauge,
    description: "Optimize power consumption while maintaining comfort",
    color: "secondary",
  },
  {
    title: "Market Trading",
    path: "/dashboard/market-trading",
    icon: TrendingUp,
    description: "Track energy buying and selling transactions",
    color: "success",
  },
  {
    title: "KPIs Dashboard",
    path: "/dashboard/kpis",
    icon: BarChart3,
    description: "Social, economic, and environmental metrics",
    color: "primary",
  },
  {
    title: "Energy Communities",
    path: "/dashboard/energy-communities",
    icon: Users,
    description: "Campus-to-campus energy sharing network",
    color: "secondary",
  },
  {
    title: "Forecasting",
    path: "/dashboard/forecasting",
    icon: Activity,
    description: "AI-powered demand prediction and uncertainty modeling",
    color: "success",
  },
  {
    title: "Regulatory Guidance",
    path: "/dashboard/regulatory",
    icon: Scale,
    description: "Compliance tracking and subsidy optimization",
    color: "primary",
  },
  {
    title: "Emergency Response",
    path: "/dashboard/emergency",
    icon: AlertTriangle,
    description: "Backup power allocation and drill management",
    color: "warning",
  },
  {
    title: "Adaptive Control",
    path: "/dashboard/adaptive-control",
    icon: Brain,
    description: "Self-learning tariff optimization",
    color: "secondary",
  },
  {
    title: "Predictive Maintenance",
    path: "/dashboard/predictive-maintenance",
    icon: Wrench,
    description: "AI-driven equipment health monitoring",
    color: "destructive",
  },
  {
    title: "Education & Gamification",
    path: "/dashboard/education",
    icon: GraduationCap,
    description: "Leaderboards and energy-saving challenges",
    color: "success",
  },
  {
    title: "Digital Twin",
    path: "/dashboard/digital-twin",
    icon: Boxes,
    description: "3D simulation and scenario modeling",
    color: "primary",
  },
];

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Energy Management Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive overview of all smart energy systems
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Energy Saved"
          value="1,245 kWh"
          icon={Zap}
          trend="+12.5% from last month"
          variant="success"
        />
        <MetricCard
          title="Active Modules"
          value="12"
          icon={BarChart3}
          trend="All systems operational"
          variant="primary"
        />
        <MetricCard
          title="CO₂ Reduction"
          value="850 tons"
          icon={Activity}
          trend="Annual savings"
          variant="success"
        />
        <MetricCard
          title="System Efficiency"
          value="94.2%"
          icon={Gauge}
          trend="+2.1% improvement"
          variant="primary"
        />
      </div>

      {/* Module Cards */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">System Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card key={module.path} className="shadow-card hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-3 rounded-lg bg-${module.color}/10`}>
                    <module.icon className={`h-6 w-6 text-${module.color}`} />
                  </div>
                  <ResponsiveContainer width={80} height={30}>
                    <LineChart data={sparklineData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={module.path}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
