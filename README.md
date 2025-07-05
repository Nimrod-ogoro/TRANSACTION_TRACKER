## 📄 `README.md` — Personal Finance Visualizer

```md
# 💰 Personal Finance Visualizer

A sleek, responsive web app to track personal transactions, visualize monthly spending, and manage finances — built with **Next.js**, **React**, **Recharts**, and **MongoDB**.

> ✅ Completed Stage 1: Basic Transaction Tracking

---

## ✨ Features (Stage 1)

- ➕ Add transactions with amount, date, and description
- ❌ Delete transactions
- 📜 View full transaction history in a clean list layout
- 📊 Bar chart for visualizing monthly expenses
- ⚠️ Basic form validation with error feedback
- 🔔 Toast notifications for actions (via `sonner`)
- 💡 Responsive, modern dashboard UI with custom CSS
- ☁️ Connected to MongoDB for data persistence

---

## 🧱 Tech Stack

- **Next.js (App Router)** – frontend framework
- **React** – component architecture
- **Recharts** – for monthly expense bar chart
- **MongoDB** – for storing transaction data
- **Axios** – for API requests
- **Sonner** – for toast notifications
- **CSS** – for custom dashboard styling (overrides Tailwind)

---

## 📂 Folder Structure

```

/src
/app
/components
TransactionForm.jsx
TransactionList.jsx
MonthlyChart.jsx
/api
/transactions
route.js         ← API endpoints (GET, POST, DELETE)
page.jsx             ← Main dashboard page
/styles
globals.css          ← Custom CSS for UI

````

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/finance-visualizer

# 2. Install dependencies
npm install

# 3. Add your MongoDB URI in .env.local
MONGODB_URI=your_mongodb_connection_string

# 4. Run the development server
npm run dev
````

---

## 🌐 Live Demo

[🔗 Click to view the live deployed app](https://your-vercel-url.vercel.app)

---

## 📌 Notes

* This is Stage 1 of a 3-stage app build:

  * ✅ Stage 1: Basic Transaction Tracking (✅ complete)
  * 🔜 Stage 2: Categories + Summary Dashboard
  * 🔜 Stage 3: Budgeting & Insights

* No authentication implemented, per project instructions.

---

## 👨‍💻 Author

**Nimrod Omanga O.**
🚀 Passionate about clean UI, solid backend, and AI integration.

---

## 📃 License

MIT – use freely, credit appreciated.

```

---


