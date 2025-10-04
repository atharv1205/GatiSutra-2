import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { regulatoryData } from "@/data/dummyData";
import MetricCard from "@/components/MetricCard";
import { Scale, FileText, DollarSign } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const RegulatoryPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Regulatory, Legal & Funding Guidance</h1>
        <p className="text-muted-foreground">Compliance tracking and subsidy optimization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Compliance Score" value="98%" icon={Scale} trend="Fully compliant" variant="success" />
        <MetricCard title="Active Subsidies" value="4" icon={FileText} trend="All programs enrolled" variant="primary" />
        <MetricCard title="Annual Savings" value="$420K" icon={DollarSign} trend="From all schemes" variant="success" />
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Subsidy & Compliance Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Annual Savings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {regulatoryData.compliance.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.item}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === "Complete" ? "default" : "secondary"}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="font-semibold text-success">{item.savings}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Compliance Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Environmental Permits</span>
                <Badge variant="default">Complete</Badge>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Grid Connection Standards</span>
                <Badge variant="default">Complete</Badge>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Safety Certifications</span>
                <Badge variant="default">Complete</Badge>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Annual Reporting</span>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Funding Opportunities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm mb-1">Green Energy Fund 2025</p>
              <p className="text-xs text-muted-foreground mb-2">Deadline: March 31, 2025</p>
              <Badge>$500K Available</Badge>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm mb-1">Smart Campus Initiative</p>
              <p className="text-xs text-muted-foreground mb-2">Deadline: June 15, 2025</p>
              <Badge>$300K Available</Badge>
            </div>
            <div className="p-3 border border-border rounded-lg">
              <p className="font-medium text-sm mb-1">Carbon Reduction Grant</p>
              <p className="text-xs text-muted-foreground mb-2">Deadline: September 1, 2025</p>
              <Badge>$750K Available</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegulatoryPage;
