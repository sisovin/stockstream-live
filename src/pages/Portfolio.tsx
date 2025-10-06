import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

const Portfolio = () => {
  const portfolioStats = {
    totalValue: 127543.82,
    totalCost: 109309.26,
    totalGain: 18234.56,
    totalGainPercent: 16.67,
    todayChange: 2547.35,
    todayChangePercent: 2.04,
    cashBalance: 15420.50
  };

  const holdings = [
    { 
      symbol: "AAPL", 
      name: "Apple Inc.", 
      shares: 50, 
      avgCost: 168.50, 
      currentPrice: 178.23,
      marketValue: 8911.50,
      totalGain: 486.50,
      totalGainPercent: 5.77,
      dayChange: 2.5,
      allocation: 6.98
    },
    { 
      symbol: "GOOGL", 
      name: "Alphabet Inc.", 
      shares: 30, 
      avgCost: 138.90, 
      currentPrice: 142.67,
      marketValue: 4280.10,
      totalGain: 113.10,
      totalGainPercent: 2.71,
      dayChange: 1.8,
      allocation: 3.36
    },
    { 
      symbol: "MSFT", 
      name: "Microsoft Corp.", 
      shares: 25, 
      avgCost: 415.20, 
      currentPrice: 412.34,
      marketValue: 10308.50,
      totalGain: -71.50,
      totalGainPercent: -0.69,
      dayChange: -0.4,
      allocation: 8.08
    },
    { 
      symbol: "TSLA", 
      name: "Tesla Inc.", 
      shares: 15, 
      avgCost: 235.40, 
      currentPrice: 242.89,
      marketValue: 3643.35,
      totalGain: 112.35,
      totalGainPercent: 3.18,
      dayChange: 4.1,
      allocation: 2.86
    },
    { 
      symbol: "NVDA", 
      name: "NVIDIA Corp.", 
      shares: 20, 
      avgCost: 845.60, 
      currentPrice: 896.34,
      marketValue: 17926.80,
      totalGain: 1014.80,
      totalGainPercent: 6.00,
      dayChange: 5.6,
      allocation: 14.06
    }
  ];

  const transactions = [
    { date: "2025-10-05", type: "BUY", symbol: "NVDA", shares: 5, price: 896.34, total: -4481.70 },
    { date: "2025-10-03", type: "SELL", symbol: "AAPL", shares: 10, price: 176.50, total: 1765.00 },
    { date: "2025-10-01", type: "BUY", symbol: "GOOGL", shares: 15, price: 141.20, total: -2118.00 },
    { date: "2025-09-28", type: "BUY", symbol: "TSLA", shares: 5, price: 238.90, total: -1194.50 },
    { date: "2025-09-25", type: "SELL", symbol: "MSFT", shares: 5, price: 418.30, total: 2091.50 }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
            <p className="text-muted-foreground">Track your investments and performance</p>
          </div>

          {/* Portfolio Summary Cards */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <DollarSign className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${portfolioStats.totalValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Cash: ${portfolioStats.cashBalance.toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Change</CardTitle>
                {portfolioStats.todayChange >= 0 ? 
                  <TrendingUp className="h-5 w-5 text-success" /> : 
                  <TrendingDown className="h-5 w-5 text-destructive" />
                }
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${portfolioStats.todayChange.toLocaleString()}</div>
                <p className={`text-xs flex items-center gap-1 mt-1 ${portfolioStats.todayChange >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {portfolioStats.todayChange >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {portfolioStats.todayChangePercent > 0 ? '+' : ''}{portfolioStats.todayChangePercent.toFixed(2)}%
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Gain/Loss</CardTitle>
                <Activity className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">${portfolioStats.totalGain.toLocaleString()}</div>
                <p className="text-xs text-success flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +{portfolioStats.totalGainPercent.toFixed(2)}%
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
                <DollarSign className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${portfolioStats.totalCost.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Investment basis
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Holdings and Transactions */}
          <Tabs defaultValue="holdings" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="holdings">Holdings</TabsTrigger>
              <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="holdings" className="mt-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Your Holdings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {holdings.map((stock) => {
                      const isPositive = stock.totalGain >= 0;
                      const isDayPositive = stock.dayChange >= 0;

                      return (
                        <div key={stock.symbol} className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-lg">{stock.symbol}</span>
                                <span className="text-sm text-muted-foreground">{stock.name}</span>
                              </div>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <span>{stock.shares} shares @ ${stock.avgCost.toFixed(2)}</span>
                                <span>{stock.allocation.toFixed(2)}% of portfolio</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-lg">${stock.currentPrice.toFixed(2)}</div>
                              <div className={`text-sm flex items-center gap-1 justify-end ${isDayPositive ? 'text-success' : 'text-destructive'}`}>
                                {isDayPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                {stock.dayChange > 0 ? '+' : ''}{stock.dayChange.toFixed(2)}%
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div>
                              <div className="text-sm text-muted-foreground">Market Value</div>
                              <div className="font-semibold">${stock.marketValue.toLocaleString()}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">Total Return</div>
                              <div className={`font-semibold ${isPositive ? 'text-success' : 'text-destructive'}`}>
                                {isPositive ? '+' : ''}${Math.abs(stock.totalGain).toFixed(2)} ({isPositive ? '+' : ''}{stock.totalGainPercent.toFixed(2)}%)
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="mt-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transactions.map((tx, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-4">
                          <div className={`px-3 py-1 rounded text-sm font-medium ${
                            tx.type === 'BUY' ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                          }`}>
                            {tx.type}
                          </div>
                          <div>
                            <div className="font-semibold">{tx.symbol}</div>
                            <div className="text-sm text-muted-foreground">{tx.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">
                            {tx.shares} shares @ ${tx.price.toFixed(2)}
                          </div>
                          <div className={`text-sm ${tx.total > 0 ? 'text-success' : 'text-muted-foreground'}`}>
                            {tx.total > 0 ? '+' : ''}${Math.abs(tx.total).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
