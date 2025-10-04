import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { forecastingData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Activity, TrendingUp, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ForecastingPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Ensemble Forecasting & Uncertainty Modeling</h1>
        <p className="text-muted-foreground">AI-powered demand prediction using ARIMA, LSTM & ensemble methods</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Forecast Accuracy" value="94.2%" icon={Activity} trend="Last 30 days" variant="success" />
        <MetricCard title="Prediction Horizon" value="48 hours" icon={TrendingUp} trend="Rolling forecast" variant="primary" />
        <MetricCard title="Uncertainty Range" value="±3.5%" icon={AlertCircle} trend="95% confidence" variant="warning" />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Predicted vs Actual Demand (24h)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={forecastingData.demandForecast}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Legend />
              <Line type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" strokeWidth={2} name="Predicted" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="actual" stroke="hsl(var(--success))" strokeWidth={2} name="Actual" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Model Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">ARIMA Model</span>
              <Badge>91.2% Accuracy</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">LSTM Neural Net</span>
              <Badge>93.8% Accuracy</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Ensemble Model</span>
              <Badge variant="default">94.2% Accuracy</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Mean Absolute Error</span>
              <span className="font-bold">5.2 kWh</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Forecast Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-success/10 rounded-lg">
              <p className="text-sm font-medium text-success mb-1">Peak Load Prediction</p>
              <p className="text-xs text-muted-foreground">Expected at 18:00 - 485 kWh</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <p className="text-sm font-medium text-primary mb-1">Low Demand Window</p>
              <p className="text-xs text-muted-foreground">03:00-06:00 - Optimize charging</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg">
              <p className="text-sm font-medium text-warning mb-1">Weather Impact</p>
              <p className="text-xs text-muted-foreground">Rain expected - HVAC load +12%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForecastingPage;
