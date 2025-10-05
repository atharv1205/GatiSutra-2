import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">About AI-Driven Campus Energy Intelligence System</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive platform for intelligent campus energy optimization
        </p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            The AI-Driven Campus Energy Intelligence System is an integrated solution designed to revolutionize how educational institutions
            manage, optimize, and sustain their energy infrastructure. By combining cutting-edge AI, IoT sensors, and real-time
            analytics, we enable campuses to achieve unprecedented levels of efficiency while reducing costs and environmental impact.
          </p>
          <p>
            Our platform brings together 12 specialized modules that work in harmony to create a truly intelligent energy ecosystem—from
            vehicle-to-grid integration to predictive maintenance, from emergency response to gamified education.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Real-time energy monitoring and optimization</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>AI-powered forecasting and predictive maintenance</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Vehicle-to-Grid integration with EVs</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Campus-to-campus energy sharing networks</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Automated market participation and trading</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Integrated emergency response systems</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Self-learning adaptive control algorithms</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Educational gamification and community engagement</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
              <p>Hyperreal 3D digital twin visualization</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Impact Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg">
              <p className="text-2xl font-bold text-success mb-1">850 tons</p>
              <p className="text-sm text-muted-foreground">CO₂ Reduction Annually</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">$1.2M</p>
              <p className="text-sm text-muted-foreground">Cost Savings Per Year</p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg">
              <p className="text-2xl font-bold text-secondary mb-1">94.2%</p>
              <p className="text-sm text-muted-foreground">System Efficiency</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="font-bold text-primary">React</p>
              <p className="text-xs text-muted-foreground mt-1">Frontend Framework</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="font-bold text-primary">Recharts</p>
              <p className="text-xs text-muted-foreground mt-1">Data Visualization</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="font-bold text-primary">TailwindCSS</p>
              <p className="text-xs text-muted-foreground mt-1">Styling</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <p className="font-bold text-primary">TypeScript</p>
              <p className="text-xs text-muted-foreground mt-1">Type Safety</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Built with modern web technologies for performance, scalability, and maintainability.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Contact & Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              📧
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">support@gatisutra.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              📞
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">+91-0000000000</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              🌐
            </div>
            <div>
              <p className="font-medium">Website</p>
              <p className="text-sm text-muted-foreground">www.gatisutra.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
