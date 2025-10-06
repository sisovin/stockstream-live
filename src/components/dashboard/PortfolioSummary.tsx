import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

const PortfolioSummary = () => {
  const portfolioData = {
    totalValue: 127543.82,
    todayChange: 2547.35,
    todayChangePercent: 2.04,
    totalGain: 18234.56,
    totalGainPercent: 16.67
  };

  const stats = [
    {
      title: "Total Value",
      value: `$${portfolioData.totalValue.toLocaleString()}`,
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />,
      change: null
    },
    {
      title: "Today's Change",
      value: `$${portfolioData.todayChange.toLocaleString()}`,
      icon: portfolioData.todayChange >= 0 ? 
        <TrendingUp className="h-5 w-5 text-success" /> : 
        <TrendingDown className="h-5 w-5 text-destructive" />,
      change: portfolioData.todayChangePercent,
      isPositive: portfolioData.todayChange >= 0
    },
    {
      title: "Total Gain/Loss",
      value: `$${portfolioData.totalGain.toLocaleString()}`,
      icon: <Activity className="h-5 w-5 text-muted-foreground" />,
      change: portfolioData.totalGainPercent,
      isPositive: portfolioData.totalGain >= 0
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            {stat.change !== null && (
              <p className={`text-xs ${stat.isPositive ? 'text-success' : 'text-destructive'} flex items-center gap-1 mt-1`}>
                {stat.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {stat.change > 0 ? '+' : ''}{stat.change.toFixed(2)}%
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PortfolioSummary;
