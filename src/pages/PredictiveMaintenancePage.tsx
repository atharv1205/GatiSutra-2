import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { predictiveMaintenanceData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Wrench, AlertTriangle, CheckCircle } from "lucide-react";

const PredictiveMaintenancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">AI-Driven Predictive Maintenance</h1>
        <p className="text-muted-foreground">Equipment health monitoring and failure prediction</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Active Alerts" value="3" icon={AlertTriangle} trend="1 high priority" variant="warning" />
        <MetricCard title="Systems Monitored" value="48" icon={Wrench} trend="All operational" variant="primary" />
        <MetricCard title="Uptime" value="99.7%" icon={CheckCircle} trend="Last 90 days" variant="success" />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Sensor Data: Temperature vs Vibration</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number" 
                dataKey="temperature" 
                name="Temperature" 
                unit="°C" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Temperature (°C)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                type="number" 
                dataKey="vibration" 
                name="Vibration" 
                unit="mm/s" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Vibration (mm/s)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Scatter name="Sensor Readings" data={predictiveMaintenanceData.sensorData} fill="hsl(var(--primary))" />
            </ScatterChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4">
            Points in the upper-right quadrant indicate potential equipment stress requiring attention.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {predictiveMaintenanceData.alerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-4 rounded-lg border-l-4 ${
                  alert.severity === 'high' 
                    ? 'bg-destructive/10 border-destructive' 
                    : alert.severity === 'medium' 
                    ? 'bg-warning/10 border-warning' 
                    : 'bg-muted border-muted-foreground'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-sm">{alert.message}</p>
                  <Badge 
                    variant={
                      alert.severity === 'high' 
                        ? 'destructive' 
                        : alert.severity === 'medium' 
                        ? 'default' 
                        : 'secondary'
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Maintenance Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-sm">Solar Panel Inspection</p>
                <Badge variant="secondary">Due in 5 days</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Routine quarterly check</p>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-sm">Battery System Calibration</p>
                <Badge variant="default">Due in 12 days</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Annual calibration cycle</p>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-sm">Inverter Firmware Update</p>
                <Badge variant="default">Due in 20 days</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Security and performance update</p>
            </div>
            <div className="p-3 bg-success/10 border border-success rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-sm">HVAC Filter Replacement</p>
                <Badge>Completed</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Done 2 days ago</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictiveMaintenancePage;
