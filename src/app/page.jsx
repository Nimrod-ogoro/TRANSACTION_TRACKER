'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import MonthlyChart from './components/MonthlyChart';
import { Toaster } from 'sonner';

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get('/api/transactions');
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111] dark:bg-[#0a0a0a] dark:text-white">
      {/* Header */}
      <header className="bg-white dark:bg-[#121212] shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">💰 Finance Tracker</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Track. Budget. Win.</p>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8 max-w-6xl mx-auto">
        <TransactionForm onTransactionAdded={fetchTransactions} />
        <MonthlyChart transactions={transactions} />
        <div className="md:col-span-2">
          <TransactionList transactions={transactions} onDelete={fetchTransactions} />
        </div>
      </div>

      <Toaster position="bottom-right" richColors />
    </main>
  );
}
