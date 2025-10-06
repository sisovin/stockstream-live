import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import StockTracker from "@/components/dashboard/StockTracker";
import WatchListPanel from "@/components/dashboard/WatchListPanel";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your portfolio and track market movements</p>
          </div>

          <PortfolioSummary />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <StockTracker />
            </div>
            <div>
              <WatchListPanel />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
