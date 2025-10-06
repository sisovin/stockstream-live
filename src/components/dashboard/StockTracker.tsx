import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const StockTracker = () => {
  const holdings = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 50, avgCost: 168.50, currentPrice: 178.23, change: 2.5 },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 30, avgCost: 138.90, currentPrice: 142.67, change: 1.8 },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 25, avgCost: 415.20, currentPrice: 412.34, change: -0.4 },
    { symbol: "TSLA", name: "Tesla Inc.", shares: 15, avgCost: 235.40, currentPrice: 242.89, change: 4.1 },
    { symbol: "NVDA", name: "NVIDIA Corp.", shares: 20, avgCost: 845.60, currentPrice: 896.34, change: 5.6 }
  ];

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Your Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {holdings.map((stock) => {
            const totalValue = stock.shares * stock.currentPrice;
            const totalCost = stock.shares * stock.avgCost;
            const gainLoss = totalValue - totalCost;
            const gainLossPercent = ((gainLoss / totalCost) * 100);
            const isPositive = gainLoss >= 0;

            return (
              <div key={stock.symbol} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{stock.symbol}</span>
                    <span className="text-sm text-muted-foreground">{stock.name}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{stock.shares} shares</span>
                    <span>Avg: ${stock.avgCost.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="font-semibold">${stock.currentPrice.toFixed(2)}</div>
                  <div className={`text-sm flex items-center gap-1 justify-end ${stock.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                  </div>
                </div>

                <div className={`text-right ml-8 ${isPositive ? 'text-success' : 'text-destructive'}`}>
                  <div className="font-semibold">{isPositive ? '+' : ''}${Math.abs(gainLoss).toFixed(2)}</div>
                  <div className="text-sm">{isPositive ? '+' : ''}{gainLossPercent.toFixed(2)}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StockTracker;
