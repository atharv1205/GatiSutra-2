import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { energyCommunitiesData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Users, Share2, Building2 } from "lucide-react";

const EnergyCommunitiesPage = () => {
  const totalSurplus = energyCommunitiesData.sharing.reduce((sum, item) => sum + item.surplus, 0);
  const totalReceived = energyCommunitiesData.sharing.reduce((sum, item) => sum + item.received, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Integrated Energy Communities</h1>
        <p className="text-muted-foreground">Campus-to-campus energy sharing network</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Active Campuses" value="4" icon={Building2} trend="All connected" variant="primary" />
        <MetricCard title="Total Surplus" value={`${totalSurplus} kWh`} icon={Share2} trend="Shared this week" variant="success" />
        <MetricCard title="Community Efficiency" value="96%" icon={Users} trend="Optimal balance" variant="secondary" />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Campus Energy Sharing</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campus</TableHead>
                <TableHead className="text-right">Surplus Given (kWh)</TableHead>
                <TableHead className="text-right">Energy Received (kWh)</TableHead>
                <TableHead className="text-right">Net Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {energyCommunitiesData.sharing.map((campus) => {
                const netBalance = campus.surplus - campus.received;
                return (
                  <TableRow key={campus.campus}>
                    <TableCell className="font-medium">{campus.campus}</TableCell>
                    <TableCell className="text-right text-success">{campus.surplus}</TableCell>
                    <TableCell className="text-right text-secondary">{campus.received}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={netBalance > 0 ? "default" : "secondary"}>
                        {netBalance > 0 ? "+" : ""}{netBalance} kWh
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Community Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Cost Savings</span>
              <span className="font-bold text-lg text-success">$45K/month</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Grid Independence</span>
              <span className="font-bold text-lg">78%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Peak Load Reduction</span>
              <span className="font-bold text-lg">-25%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Network Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Transactions</span>
              <span className="font-bold text-lg">1,247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Avg Transaction Size</span>
              <span className="font-bold text-lg">85 kWh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Response Time</span>
              <span className="font-bold text-lg text-success">&lt;5 min</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnergyCommunitiesPage;
