import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown, Star, Plus, Search, X } from "lucide-react";
import { useState } from "react";

const Watchlist = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const watchlist = [
    { 
      symbol: "AMZN", 
      name: "Amazon.com Inc.", 
      price: 178.56, 
      change: 3.2, 
      changeValue: 5.54,
      dayHigh: 180.23,
      dayLow: 175.89,
      volume: "42.5M",
      marketCap: "1.85T",
      pe: 58.23
    },
    { 
      symbol: "META", 
      name: "Meta Platforms Inc.", 
      price: 512.34, 
      change: -1.5,
      changeValue: -7.80,
      dayHigh: 520.10,
      dayLow: 510.45,
      volume: "18.3M",
      marketCap: "1.32T",
      pe: 31.45
    },
    { 
      symbol: "NFLX", 
      name: "Netflix Inc.", 
      price: 456.78, 
      change: 4.8,
      changeValue: 20.92,
      dayHigh: 458.90,
      dayLow: 442.15,
      volume: "12.1M",
      marketCap: "201.5B",
      pe: 42.67
    },
    { 
      symbol: "AMD", 
      name: "Advanced Micro Devices", 
      price: 168.92, 
      change: 2.3,
      changeValue: 3.80,
      dayHigh: 170.45,
      dayLow: 166.20,
      volume: "35.7M",
      marketCap: "273.8B",
      pe: 89.12
    },
    { 
      symbol: "INTC", 
      name: "Intel Corporation", 
      price: 42.15, 
      change: -0.8,
      changeValue: -0.34,
      dayHigh: 42.89,
      dayLow: 41.90,
      volume: "28.4M",
      marketCap: "177.4B",
      pe: 15.23
    },
    { 
      symbol: "DIS", 
      name: "Walt Disney Co.", 
      price: 92.45, 
      change: -0.9,
      changeValue: -0.84,
      dayHigh: 93.67,
      dayLow: 91.85,
      volume: "15.2M",
      marketCap: "168.9B",
      pe: 27.89
    },
    { 
      symbol: "PYPL", 
      name: "PayPal Holdings Inc.", 
      price: 63.28, 
      change: 1.7,
      changeValue: 1.06,
      dayHigh: 64.10,
      dayLow: 62.45,
      volume: "22.8M",
      marketCap: "67.5B",
      pe: 18.45
    },
    { 
      symbol: "UBER", 
      name: "Uber Technologies", 
      price: 76.89, 
      change: 3.5,
      changeValue: 2.60,
      dayHigh: 77.45,
      dayLow: 74.20,
      volume: "31.5M",
      marketCap: "156.3B",
      pe: 45.67
    }
  ];

  const popularStocks = [
    { symbol: "COIN", name: "Coinbase Global", price: 234.56, change: 5.2 },
    { symbol: "SQ", name: "Block Inc.", price: 89.34, change: 2.8 },
    { symbol: "SHOP", name: "Shopify Inc.", price: 78.92, change: -1.2 },
    { symbol: "SNAP", name: "Snap Inc.", price: 12.45, change: 6.7 }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Watchlist</h1>
              <p className="text-muted-foreground">Monitor stocks you're interested in</p>
            </div>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Stock
            </Button>
          </div>

          {/* Search Bar */}
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search stocks by symbol or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Watchlist Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {watchlist.map((stock) => {
              const isPositive = stock.change >= 0;

              return (
                <Card key={stock.symbol} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-2xl">{stock.symbol}</CardTitle>
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{stock.name}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-3xl font-bold">${stock.price.toFixed(2)}</div>
                        <div className={`flex items-center gap-1 mt-1 ${isPositive ? 'text-success' : 'text-destructive'}`}>
                          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                          <span className="font-medium">
                            {stock.change > 0 ? '+' : ''}{stock.changeValue.toFixed(2)} ({stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%)
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="gradient-primary">
                        Trade
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-xs text-muted-foreground">Day Range</div>
                        <div className="text-sm font-medium">${stock.dayLow.toFixed(2)} - ${stock.dayHigh.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Volume</div>
                        <div className="text-sm font-medium">{stock.volume}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Market Cap</div>
                        <div className="text-sm font-medium">{stock.marketCap}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">P/E Ratio</div>
                        <div className="text-sm font-medium">{stock.pe.toFixed(2)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Popular Stocks to Add */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Popular Stocks</CardTitle>
              <p className="text-sm text-muted-foreground">Trending stocks you might want to add</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularStocks.map((stock) => (
                  <div key={stock.symbol} className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{stock.symbol}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{stock.name}</div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">${stock.price.toFixed(2)}</span>
                      <span className={`text-xs ${stock.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Watchlist;
