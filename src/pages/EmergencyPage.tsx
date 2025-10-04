import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { emergencyData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { AlertTriangle, Battery, Shield } from "lucide-react";

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--success))", "hsl(var(--warning))"];

const EmergencyPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Integrated Emergency Response</h1>
        <p className="text-muted-foreground">Backup power allocation and emergency preparedness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Backup Capacity" value="2.5 MWh" icon={Battery} trend="85% available" variant="success" />
        <MetricCard title="Response Time" value="&lt;3 min" icon={Shield} trend="Automatic switchover" variant="primary" />
        <MetricCard title="Drills Completed" value="12" icon={AlertTriangle} trend="This year" variant="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Backup Power Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={emergencyData.backupAllocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ facility, allocation }) => `${facility}: ${allocation}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="allocation"
                >
                  {emergencyData.backupAllocation.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Emergency Drill History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emergencyData.drills.map((drill, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{drill.date}</TableCell>
                    <TableCell>{drill.type}</TableCell>
                    <TableCell>
                      <Badge variant="default">{drill.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Critical Systems Priority</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
              <div>
                <p className="font-medium text-sm">Level 1 - Medical</p>
                <p className="text-xs text-muted-foreground">Immediate power</p>
              </div>
              <Badge variant="destructive">Critical</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-warning/10 rounded-lg">
              <div>
                <p className="font-medium text-sm">Level 2 - IT Infrastructure</p>
                <p className="text-xs text-muted-foreground">Within 1 minute</p>
              </div>
              <Badge variant="default">High</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
              <div>
                <p className="font-medium text-sm">Level 3 - Labs</p>
                <p className="text-xs text-muted-foreground">Within 3 minutes</p>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm">Emergency Control Center</p>
              <p className="text-xs text-muted-foreground mt-1">📞 +1-800-EMERGENCY</p>
              <p className="text-xs text-muted-foreground">Available 24/7</p>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm">Grid Operator Hotline</p>
              <p className="text-xs text-muted-foreground mt-1">📞 +1-800-GRID-OPS</p>
              <p className="text-xs text-muted-foreground">Direct line to grid control</p>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm">Technical Support</p>
              <p className="text-xs text-muted-foreground mt-1">📞 +1-800-TECH-HELP</p>
              <p className="text-xs text-muted-foreground">Engineering team on-call</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyPage;
