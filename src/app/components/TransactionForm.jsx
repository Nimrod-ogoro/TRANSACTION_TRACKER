'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

export default function TransactionForm({ onTransactionAdded }) {
  const [form, setForm] = useState({ amount: '', description: '', date: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.description || !form.date) {
      toast.error('All fields are required.');
      return;
    }

    try {
      await axios.post('/api/transactions', {
        ...form,
        amount: parseFloat(form.amount),
      });
      toast.success('Transaction added!');
      setForm({ amount: '', description: '', date: '' });
      onTransactionAdded();
    } catch {
      toast.error('Something went wrong.');
    }
  };

  return (
    <div className="bg-white dark:bg-[#181818] rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-[#121212]"
          value={form.amount}
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-[#121212]"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-[#121212]"
          value={form.date}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md font-semibold"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

