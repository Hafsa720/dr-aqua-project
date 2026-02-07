'use client';

import React, { useEffect, useState } from 'react';

import type { Customer } from '@/types/dashboard';

interface CustomerManagerProps {
  customers: Customer[];
  updateCustomers: (customers: Customer[]) => void;
}

interface Reminder {
  customerId: number;
  customerName: string;
  type: '1-month' | '2-month';
  message: string;
}

export default function CustomerManager({
  customers,
  updateCustomers,
}: CustomerManagerProps) {
  const [customer, setCustomer] = useState({ name: '', contact: '' });
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addCustomer = () => {
    if (!customer.name || !customer.contact) {
      alert('Please fill in all fields!');
      return;
    }
    updateCustomers([
      ...customers,
      { ...customer, id: Date.now(), history: [] },
    ]);
    setCustomer({ name: '', contact: '' });
  };

  const deleteCustomer = (id: number) => {
    if (confirm('Are you sure you want to delete this customer?')) {
      updateCustomers(customers.filter((c) => c.id !== id));
    }
  };

  // Check for reminders
  useEffect(() => {
    const checkReminders = () => {
      const newReminders: Reminder[] = [];
      const now = new Date();

      customers.forEach((c) => {
        if (c.history.length > 0) {
          const lastSale = c.history[c.history.length - 1];
          if (!lastSale) return;
          const lastPurchase = new Date(lastSale.date);
          const diffMs = now.getTime() - lastPurchase.getTime();
          const diffDays = diffMs / (1000 * 60 * 60 * 24);
          const diffMonths = diffDays / 30;

          if (diffMonths >= 1 && diffMonths < 2) {
            newReminders.push({
              customerId: c.id,
              customerName: c.name,
              type: '1-month',
              message: `${c.name} - 1 month service check due`,
            });
            // Simulated notification (in production, integrate with email/SMS API)
          }
          if (diffMonths >= 2) {
            newReminders.push({
              customerId: c.id,
              customerName: c.name,
              type: '2-month',
              message: `${c.name} - 2 month filter replacement due`,
            });
            // Simulated notification (in production, integrate with email/SMS API)
          }
        }
      });

      setReminders(newReminders);
    };

    checkReminders();
    const interval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [customers]);

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
        Customer Management
      </h2>

      {/* Reminders Section */}
      {reminders.length > 0 && (
        <div className='mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg'>
          <h3 className='text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-300'>
            ⚠️ Service Reminders
          </h3>
          <ul className='space-y-1'>
            {reminders.map((r, i) => (
              <li key={i} className='text-yellow-700 dark:text-yellow-400'>
                {r.type === '1-month' ? '🔔' : '🔴'} {r.message}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCustomer();
        }}
        className='mb-6 flex flex-wrap gap-3'
      >
        <input
          type='text'
          placeholder='Customer Name'
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          required
          className='flex-1 min-w-[150px] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        />
        <input
          type='text'
          placeholder='Contact (Phone/Email)'
          value={customer.contact}
          onChange={(e) =>
            setCustomer({ ...customer, contact: e.target.value })
          }
          required
          className='flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        />
        <button
          type='submit'
          className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors'
        >
          Add Customer
        </button>
      </form>

      <div className='overflow-x-auto'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-100 dark:bg-gray-700'>
              <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b dark:border-gray-600'>
                Name
              </th>
              <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b dark:border-gray-600'>
                Contact
              </th>
              <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b dark:border-gray-600'>
                Purchase History
              </th>
              <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b dark:border-gray-600'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className='border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              >
                <td className='px-4 py-3 text-gray-900 dark:text-white'>
                  {c.name}
                </td>
                <td className='px-4 py-3 text-gray-900 dark:text-white'>
                  {c.contact}
                </td>
                <td className='px-4 py-3 text-gray-900 dark:text-white'>
                  {c.history.length > 0 ? (
                    <div className='space-y-1'>
                      {c.history.slice(-3).map((h, i) => (
                        <div key={i} className='text-sm'>
                          <span className='font-mono text-blue-600 dark:text-blue-400'>
                            {h.invoice}
                          </span>
                          <span className='ml-2'>${h.total}</span>
                        </div>
                      ))}
                      {c.history.length > 3 && (
                        <span className='text-xs text-gray-500'>
                          +{c.history.length - 3} more
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className='text-gray-500 dark:text-gray-400'>
                      No purchases yet
                    </span>
                  )}
                </td>
                <td className='px-4 py-3'>
                  <button
                    onClick={() => deleteCustomer(c.id)}
                    className='px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded transition-colors'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className='px-4 py-8 text-center text-gray-500 dark:text-gray-400'
                >
                  No customers yet. Add your first customer above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
