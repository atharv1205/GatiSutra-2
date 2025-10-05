import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { 
  Menu, X, Sun, Moon, Home, Info,
  Zap, Gauge, TrendingUp, BarChart3, Users, 
  Activity, Scale, AlertTriangle, Brain, 
  Wrench, GraduationCap, Boxes
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navigation = [
    { name: "Home", path: "/", icon: Home },
    { name: "V2G & EV Integration", path: "/dashboard/v2g", icon: Zap },
    { name: "Flexible Load", path: "/dashboard/flexible-load", icon: Gauge },
    { name: "Market Trading", path: "/dashboard/market-trading", icon: TrendingUp },
    { name: "KPIs", path: "/dashboard/kpis", icon: BarChart3 },
    { name: "Energy Communities", path: "/dashboard/energy-communities", icon: Users },
    { name: "Forecasting", path: "/dashboard/forecasting", icon: Activity },
    { name: "Regulatory Guidance", path: "/dashboard/regulatory", icon: Scale },
    { name: "Emergency Response", path: "/dashboard/emergency", icon: AlertTriangle },
    { name: "Adaptive Control", path: "/dashboard/adaptive-control", icon: Brain },
    { name: "Predictive Maintenance", path: "/dashboard/predictive-maintenance", icon: Wrench },
    { name: "Education & Gamification", path: "/dashboard/education", icon: GraduationCap },
    { name: "Digital Twin", path: "/dashboard/digital-twin", icon: Boxes },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-lg font-bold text-sidebar-foreground">Gatisutra</h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm">{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">
            AI-Driven Campus Energy Intelligence System
          </h2>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
