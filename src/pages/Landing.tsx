import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Bell, Shield, Zap, Users } from "lucide-react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const Landing = () => {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Real-Time Data",
      description: "Access live market data with instant price updates and streaming charts for informed decisions."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description: "Powerful charting tools with technical indicators and historical data analysis."
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Smart Alerts",
      description: "Custom price alerts and notifications to never miss a trading opportunity."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Trading",
      description: "Bank-level security with encrypted data and secure transaction processing."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance infrastructure."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Insights",
      description: "Connect with traders and access market sentiment analysis."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Trade Smarter with
              <span className="block text-transparent bg-clip-text gradient-primary">Real-Time Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience the future of stock trading with live market data, intelligent analytics, 
              and a platform built for both beginners and pros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-lg">
                <Link to="/dashboard">Start Trading</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/markets">Explore Markets</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Ticker */}
      <section className="border-y border-border bg-card py-4 overflow-hidden">
        <div className="flex space-x-8 animate-ticker">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex space-x-8 shrink-0">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">AAPL</span>
                <span className="text-success">+2.5%</span>
                <span className="text-muted-foreground">$178.23</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">GOOGL</span>
                <span className="text-success">+1.8%</span>
                <span className="text-muted-foreground">$142.67</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">MSFT</span>
                <span className="text-destructive">-0.4%</span>
                <span className="text-muted-foreground">$412.34</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">AMZN</span>
                <span className="text-success">+3.2%</span>
                <span className="text-muted-foreground">$178.56</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">TSLA</span>
                <span className="text-success">+4.1%</span>
                <span className="text-muted-foreground">$242.89</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">NVDA</span>
                <span className="text-success">+5.6%</span>
                <span className="text-muted-foreground">$896.34</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Everything You Need to Trade</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to give you the edge in today's markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Trading?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of traders who trust TradeVue for their investment journey
            </p>
            <Button asChild size="lg" className="gradient-primary text-lg">
              <Link to="/dashboard">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
