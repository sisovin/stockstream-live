import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Plus, Star } from "lucide-react";

const WatchListPanel = () => {
  const watchlist = [
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.56, change: 3.2, volume: "42.5M" },
    { symbol: "META", name: "Meta Platforms", price: 512.34, change: -1.5, volume: "18.3M" },
    { symbol: "NFLX", name: "Netflix Inc.", price: 456.78, change: 4.8, volume: "12.1M" },
    { symbol: "AMD", name: "Advanced Micro Devices", price: 168.92, change: 2.3, volume: "35.7M" },
    { symbol: "INTC", name: "Intel Corp.", price: 42.15, change: -0.8, volume: "28.4M" }
  ];

  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          Watchlist
        </CardTitle>
        <Button size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" />
          Add Stock
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {watchlist.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
              <div className="flex-1">
                <div className="font-semibold">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground">{stock.name}</div>
              </div>
              
              <div className="text-right">
                <div className="font-semibold">${stock.price.toFixed(2)}</div>
                <div className={`text-xs flex items-center gap-1 justify-end ${stock.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                </div>
              </div>

              <div className="text-xs text-muted-foreground ml-6">
                Vol: {stock.volume}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchListPanel;
