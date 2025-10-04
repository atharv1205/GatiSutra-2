import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { digitalTwinData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Boxes, Activity, Zap } from "lucide-react";

const DigitalTwinPage = () => {
  const [scenario, setScenario] = useState("Normal Operation");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Hyperreal Digital Twin Ecosystem</h1>
        <p className="text-muted-foreground">3D campus simulation and scenario modeling</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Real-Time Load" value={digitalTwinData.stats.realTimeLoad} icon={Zap} trend="Current consumption" variant="primary" />
        <MetricCard title="Next Hour Prediction" value={digitalTwinData.stats.prediction} icon={Activity} trend="AI forecast" variant="secondary" />
        <MetricCard title="System Efficiency" value={digitalTwinData.stats.efficiency} icon={Boxes} trend="Overall performance" variant="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle>3D Campus Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center space-y-4">
                <Boxes className="h-24 w-24 text-primary mx-auto animate-pulse" />
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">3D Digital Twin Viewer</p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Interactive 3D model showing real-time energy flow, building systems, and environmental data.
                    Rotate, zoom, and inspect individual components.
                  </p>
                </div>
                <div className="flex gap-4 justify-center text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span>Solar Panels</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span>EV Chargers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <span>Energy Storage</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span>Buildings</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Simulation Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Scenario</label>
              <Select value={scenario} onValueChange={setScenario}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {digitalTwinData.scenarios.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-muted rounded-lg space-y-3">
              <p className="font-medium text-sm">Current Scenario:</p>
              <p className="text-2xl font-bold text-primary">{scenario}</p>
              {scenario === "Normal Operation" && (
                <p className="text-xs text-muted-foreground">
                  Standard operating conditions with balanced load distribution.
                </p>
              )}
              {scenario === "Peak Load" && (
                <p className="text-xs text-muted-foreground">
                  Simulates maximum demand scenario during peak hours.
                </p>
              )}
              {scenario === "Blackout Simulation" && (
                <p className="text-xs text-muted-foreground">
                  Tests emergency backup systems and load prioritization.
                </p>
              )}
              {scenario === "Maximum Renewable" && (
                <p className="text-xs text-muted-foreground">
                  Optimizes for 100% renewable energy generation.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-medium text-sm">Quick Actions</p>
              <button className="w-full p-3 border border-border rounded-lg hover:bg-muted transition-colors text-left">
                <p className="text-sm font-medium">Run Simulation</p>
                <p className="text-xs text-muted-foreground">Execute selected scenario</p>
              </button>
              <button className="w-full p-3 border border-border rounded-lg hover:bg-muted transition-colors text-left">
                <p className="text-sm font-medium">Export Report</p>
                <p className="text-xs text-muted-foreground">Generate PDF analysis</p>
              </button>
              <button className="w-full p-3 border border-border rounded-lg hover:bg-muted transition-colors text-left">
                <p className="text-sm font-medium">Historical Playback</p>
                <p className="text-xs text-muted-foreground">Replay past events</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Live Sensor Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Temperature Sensors</span>
              <span className="font-bold">248 Active</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Power Meters</span>
              <span className="font-bold">156 Active</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Environmental Sensors</span>
              <span className="font-bold">89 Active</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
              <span className="text-sm text-success">Data Update Rate</span>
              <span className="font-bold text-success">Real-time (1s)</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Model Accuracy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Energy Flow</span>
              <span className="font-bold text-success">98.5%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Thermal Dynamics</span>
              <span className="font-bold text-success">96.2%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="text-sm">Load Prediction</span>
              <span className="font-bold text-success">94.8%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
              <span className="text-sm text-primary">Last Calibration</span>
              <span className="font-bold text-primary">2 days ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalTwinPage;
