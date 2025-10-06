import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Markets = () => {
  const marketIndices = [
    { name: "S&P 500", symbol: "^GSPC", price: 4783.45, change: 1.2, changeValue: 56.78 },
    { name: "Dow Jones", symbol: "^DJI", price: 37305.16, change: 0.8, changeValue: 295.34 },
    { name: "NASDAQ", symbol: "^IXIC", price: 14813.92, change: 1.5, changeValue: 218.45 },
    { name: "Russell 2000", symbol: "^RUT", price: 2027.07, change: -0.3, changeValue: -6.12 }
  ];

  const topGainers = [
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 896.34, change: 5.6 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 242.89, change: 4.8 },
    { symbol: "NFLX", name: "Netflix Inc.", price: 456.78, change: 4.2 },
    { symbol: "AMZN", name: "Amazon.com", price: 178.56, change: 3.2 },
    { symbol: "AAPL", name: "Apple Inc.", price: 178.23, change: 2.5 }
  ];

  const topLosers = [
    { symbol: "INTC", name: "Intel Corp.", price: 42.15, change: -2.8 },
    { symbol: "META", name: "Meta Platforms", price: 512.34, change: -1.5 },
    { symbol: "BA", name: "Boeing Co.", price: 215.67, change: -1.2 },
    { symbol: "DIS", name: "Walt Disney", price: 92.45, change: -0.9 },
    { symbol: "MSFT", name: "Microsoft", price: 412.34, change: -0.4 }
  ];

  const mostActive = [
    { symbol: "AAPL", name: "Apple Inc.", price: 178.23, volume: "58.3M", change: 2.5 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 242.89, volume: "52.1M", change: 4.8 },
    { symbol: "AMZN", name: "Amazon.com", price: 178.56, volume: "42.5M", change: 3.2 },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 896.34, volume: "38.9M", change: 5.6 },
    { symbol: "AMD", name: "AMD Inc.", price: 168.92, volume: "35.7M", change: 2.3 }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Markets</h1>
            <p className="text-muted-foreground">Real-time market data and top movers</p>
          </div>

          {/* Market Indices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketIndices.map((index) => (
              <Card key={index.symbol} className="border-border">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">{index.name}</span>
                      {index.change >= 0 ? 
                        <TrendingUp className="h-4 w-4 text-success" /> : 
                        <TrendingDown className="h-4 w-4 text-destructive" />
                      }
                    </div>
                    <div className="text-2xl font-bold">{index.price.toLocaleString()}</div>
                    <div className={`text-sm ${index.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                      {index.change > 0 ? '+' : ''}{index.changeValue.toFixed(2)} ({index.change > 0 ? '+' : ''}{index.change.toFixed(2)}%)
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Movers */}
          <Tabs defaultValue="gainers" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
              <TabsTrigger value="losers">Top Losers</TabsTrigger>
              <TabsTrigger value="active">Most Active</TabsTrigger>
            </TabsList>

            <TabsContent value="gainers" className="mt-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Top Gainers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topGainers.map((stock) => (
                      <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-semibold">{stock.symbol}</div>
                          <div className="text-sm text-muted-foreground">{stock.name}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${stock.price.toFixed(2)}</div>
                          <div className="text-sm text-success flex items-center gap-1 justify-end">
                            <TrendingUp className="h-3 w-3" />
                            +{stock.change.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="losers" className="mt-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Top Losers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topLosers.map((stock) => (
                      <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-semibold">{stock.symbol}</div>
                          <div className="text-sm text-muted-foreground">{stock.name}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${stock.price.toFixed(2)}</div>
                          <div className="text-sm text-destructive flex items-center gap-1 justify-end">
                            <TrendingDown className="h-3 w-3" />
                            {stock.change.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="active" className="mt-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Most Active</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mostActive.map((stock) => (
                      <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold">{stock.symbol}</div>
                          <div className="text-sm text-muted-foreground">{stock.name}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${stock.price.toFixed(2)}</div>
                          <div className="text-xs text-muted-foreground">Vol: {stock.volume}</div>
                        </div>
                        <div className={`text-sm ml-6 ${stock.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                          {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
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

export default Markets;
