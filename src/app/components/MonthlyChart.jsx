'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

export default function MonthlyChart({ transactions }) {
  const monthlyTotals = transactions.reduce((acc, tx) => {
    const month = new Date(tx.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    acc[month] = (acc[month] || 0) + tx.amount;
    return acc;
  }, {});

  const chartData = Object.entries(monthlyTotals).map(([month, total]) => ({
    month,
    total,
  }));

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

