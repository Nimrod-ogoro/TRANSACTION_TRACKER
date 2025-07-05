'use client';
import React from 'react';
import axios from 'axios';
import { toast } from 'sonner';

export default function TransactionList({ transactions, onDelete }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      toast.success('Transaction deleted!');
      onDelete();
    } catch {
      toast.error('Failed to delete');
    }
  };

  return (
    <section className="transaction-section">
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
        🧾 Transaction History
      </h2>

      {transactions.length === 0 ? (
        <p style={{ color: '#777' }}>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map((tx) => (
            <li key={tx._id} className="transaction-item">
              <div className="tx-info">
                <div className="tx-title">
                  <span role="img" aria-label="icon" className="tx-icon">
                    💸
                  </span>
                  <span className="tx-description">{tx.description}</span>
                </div>
                <div className="tx-date">
                  {new Date(tx.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>

              <div className="tx-meta">
                <span className="tx-amount">${tx.amount.toLocaleString()}</span>
                <button onClick={() => handleDelete(tx._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

