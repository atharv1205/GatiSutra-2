import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { marketTradingData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { TrendingUp, DollarSign, Activity } from "lucide-react";

const MarketTradingPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Market Participation & Energy Trading</h1>
        <p className="text-muted-foreground">Real-time energy market transactions and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Weekly Revenue" value="$2,450" icon={DollarSign} trend="+15% from last week" variant="success" />
        <MetricCard title="Energy Sold" value="485 kWh" icon={TrendingUp} trend="Peak hours optimized" variant="primary" />
        <MetricCard title="Avg. Price/kWh" value="$0.28" icon={Activity} trend="Market rate" variant="secondary" />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Weekly Trading Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTradingData.weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Legend />
              <Line type="monotone" dataKey="bought" stroke="hsl(var(--destructive))" strokeWidth={2} name="Bought (kWh)" />
              <Line type="monotone" dataKey="sold" stroke="hsl(var(--success))" strokeWidth={2} name="Sold (kWh)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketTradingData.recentTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant={tx.type === "Sell" ? "default" : "secondary"}>
                      {tx.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell className="text-right font-semibold">{tx.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketTradingPage;
