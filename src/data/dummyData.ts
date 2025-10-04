// Dummy data for all dashboard modules

export const v2gData = {
  hourlyData: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    solar: Math.random() * 50 + 20,
    evBattery: Math.random() * 30 + 10,
  })),
  energyDistribution: [
    { name: "Stored", value: 65 },
    { name: "Supplied to Grid", value: 35 },
  ],
};

export const flexibleLoadData = {
  consumption: [
    { category: "HVAC", before: 120, after: 85 },
    { category: "Lighting", before: 80, after: 60 },
    { category: "Equipment", before: 150, after: 130 },
    { category: "Computing", before: 200, after: 180 },
  ],
  comfortIndex: 92,
};

export const marketTradingData = {
  weeklyTrend: Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    bought: Math.random() * 100 + 50,
    sold: Math.random() * 80 + 40,
  })),
  recentTransactions: [
    { id: 1, timestamp: "2025-01-15 14:30", type: "Sell", amount: "45 kWh", price: "$12.50" },
    { id: 2, timestamp: "2025-01-15 12:15", type: "Buy", amount: "30 kWh", price: "$8.40" },
    { id: 3, timestamp: "2025-01-15 09:00", type: "Sell", amount: "60 kWh", price: "$16.80" },
    { id: 4, timestamp: "2025-01-14 16:45", type: "Buy", amount: "25 kWh", price: "$7.00" },
  ],
};

export const kpisData = {
  metrics: {
    jobsCreated: 142,
    moneySaved: "$1.2M",
    co2Reduced: "850 tons",
  },
  carbonTrend: Array.from({ length: 12 }, (_, i) => ({
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
    reduction: Math.random() * 30 + 40,
  })),
};

export const energyCommunitiesData = {
  sharing: [
    { campus: "Main Campus", surplus: 120, received: 45 },
    { campus: "North Wing", surplus: 80, received: 95 },
    { campus: "Research Lab", surplus: 60, received: 110 },
    { campus: "Student Housing", surplus: 90, received: 70 },
  ],
};

export const forecastingData = {
  demandForecast: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    predicted: Math.random() * 200 + 100,
    actual: Math.random() * 200 + 100,
  })),
};

export const regulatoryData = {
  compliance: [
    { item: "Renewable Energy Certificates", status: "Complete", savings: "12%" },
    { item: "Carbon Credits Program", status: "In Progress", savings: "8%" },
    { item: "Energy Efficiency Subsidy", status: "Complete", savings: "15%" },
    { item: "Grid Feed-in Tariff", status: "Complete", savings: "10%" },
  ],
};

export const emergencyData = {
  backupAllocation: [
    { facility: "Labs", allocation: 40 },
    { facility: "Hostels", allocation: 25 },
    { facility: "IT Infrastructure", allocation: 20 },
    { facility: "Medical", allocation: 15 },
  ],
  drills: [
    { date: "2025-01-10", type: "Power Outage Drill", status: "Completed" },
    { date: "2024-12-15", type: "Grid Failure Simulation", status: "Completed" },
    { date: "2024-11-20", type: "Emergency Load Shedding", status: "Completed" },
  ],
};

export const adaptiveControlData = {
  tariffUsage: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    tariff: (Math.sin(i / 4) + 1.5) * 10,
    usage: (Math.cos(i / 4) + 1.5) * 50,
  })),
  efficiency: 87,
};

export const predictiveMaintenanceData = {
  sensorData: Array.from({ length: 50 }, (_, i) => ({
    temperature: Math.random() * 40 + 60,
    vibration: Math.random() * 15 + 5,
  })),
  alerts: [
    { id: 1, message: "Battery overheating detected in Block A", severity: "high", time: "2 hours ago" },
    { id: 2, message: "Turbine maintenance due in 3 days", severity: "medium", time: "5 hours ago" },
    { id: 3, message: "Inverter efficiency dropping", severity: "low", time: "1 day ago" },
  ],
};

export const educationData = {
  leaderboard: [
    { rank: 1, name: "Alice Johnson", savings: "18.5%", points: 2450 },
    { rank: 2, name: "Bob Smith", savings: "16.2%", points: 2180 },
    { rank: 3, name: "Carol Williams", savings: "15.8%", points: 2100 },
    { rank: 4, name: "David Brown", savings: "14.3%", points: 1950 },
    { rank: 5, name: "Emma Davis", savings: "13.7%", points: 1850 },
  ],
  challenges: [
    { name: "Reduce 10% Usage", progress: 75, target: 100 },
    { name: "Plant 50 Trees Initiative", progress: 32, target: 50 },
    { name: "Zero Waste Week", progress: 60, target: 100 },
  ],
};

export const digitalTwinData = {
  scenarios: ["Normal Operation", "Peak Load", "Blackout Simulation", "Maximum Renewable"],
  stats: {
    realTimeLoad: "450 kW",
    prediction: "485 kW (next hour)",
    efficiency: "94.2%",
  },
};
