# Stock Stream Live

Build a stunning **real-time stock trading platform**—inspired by Robinhood’s simplicity and Bloomberg Terminal’s data richness.

---

## 🚀 Overview

**Stock Stream Live** delivers a modern, interactive experience for tracking and managing stocks, portfolios, and watchlists. Built with **React**, **Vite**, and **React Router**, it’s designed for both clarity and data-driven power.

> **Design Vision**
> - **Inspiration:** Robinhood's simplicity meets Bloomberg Terminal's data richness
> - **Colors:** Deep navy background, electric blue accents, vivid green (gains), and red (losses)
> - **Style:** Modern, sleek, professional with smooth animations
> - **Fonts:** Clean sans-serif for excellent readability
> - **Animations:** Smooth price tickers, subtle hover effects, and fluid transitions

---

## 🖥️ Key Features

- **Landing Page:** Modern hero section, engaging introduction
- **Header & Footer:** Consistent navigation and branding
- **Dashboard:**  
  - Portfolio Summary  
  - Stock Tracker  
  - Watchlist
- **Markets Page:** Live price tables (mocked real-time data for now; ready for WebSocket integration)
- **Portfolio Page** (`/portfolio`):
  - Overview cards (total value, today’s change, total gain/loss, cash balance)
  - Detailed holdings (allocation %, returns)
  - Recent transactions history (buy/sell records)
- **Watchlist Page** (`/watchlist`):
  - Fast stock search bar
  - Detailed stock cards (price, stats, quick trade buttons)
  - Popular stocks suggestions
  - Easy add/remove stocks

All pages are accessible from the header navigation and follow the platform’s sleek dark design.

---

## 🛠️ Technologies Used

- **React** (with [Vite](https://vitejs.dev/))
- **TypeScript**
- **React Router**
- **shadcn-ui**
- **Tailwind CSS**

---

## 📦 Getting Started

### 1. **Clone the repository**

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### 2. **Install dependencies**

```sh
npm install
```

### 3. **Start the development server**

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## 🌐 Deployment

- Deploy instantly using [Lovable](https://lovable.dev/projects/0e43a673-d0b1-4109-8e8b-61904e861ed3):  
  Go to **Share → Publish** in the Lovable dashboard.

---

## 🏷️ Custom Domain Support

Connect your own domain:
- Go to **Project > Settings > Domains** in Lovable
- Click **Connect Domain**
- See [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## 🔮 Roadmap & Extensibility

- **Real-Time Data:** Ready for true live data (suggested: Lovable Cloud, WebSocket integration)
- **Authentication:** User login and secure account management
- **Trading Simulator:** Mock trades, track performance
- **Mobile Optimization:** Responsive for all devices
- **API Integration:** Connect to real market data providers

---

## 🤝 Contributing

We welcome contributions!  
- Fork the repo
- Create a feature branch
- Submit a pull request

---

## 📄 License

[MIT](LICENSE)

---

## 💬 Support & Questions

- Open an [issue](https://github.com/sisovin/stockstream-live/issues)
- Visit the [Lovable Project](https://lovable.dev/projects/0e43a673-d0b1-4109-8e8b-61904e861ed3)

---

_Designed for readability, performance, and extensibility._
