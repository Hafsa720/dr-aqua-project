'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import BillingManager from '@/components/dashboard/BillingManager';
import CustomerManager from '@/components/dashboard/CustomerManager';
import InventoryManager from '@/components/dashboard/InventoryManager';
import SalesDashboard from '@/components/dashboard/SalesDashboard';
import type { Customer, Product, Sale } from '@/types/dashboard';

type Tab = 'inventory' | 'billing' | 'customers' | 'dashboard';

export default function ManagementPage() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [inventory, setInventory] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedInventory = localStorage.getItem('draqua-inventory');
    const savedCustomers = localStorage.getItem('draqua-customers');
    const savedSales = localStorage.getItem('draqua-sales');

    if (savedInventory) setInventory(JSON.parse(savedInventory));
    if (savedCustomers) setCustomers(JSON.parse(savedCustomers));
    if (savedSales) setSales(JSON.parse(savedSales));

    setIsLoaded(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('draqua-inventory', JSON.stringify(inventory));
  }, [inventory, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('draqua-customers', JSON.stringify(customers));
  }, [customers, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('draqua-sales', JSON.stringify(sales));
  }, [sales, isLoaded]);

  const updateInventory = (newInventory: Product[]) =>
    setInventory(newInventory);
  const updateCustomers = (newCustomers: Customer[]) =>
    setCustomers(newCustomers);
  const addSale = (sale: Sale) => setSales((prev) => [...prev, sale]);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'inventory', label: 'Inventory', icon: '📦' },
    { id: 'billing', label: 'Billing', icon: '🧾' },
    { id: 'customers', label: 'Customers', icon: '👥' },
  ];

  if (!isLoaded) {
    return (
      <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center'>
        <div className='text-gray-600 dark:text-gray-400'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      {/* Header */}
      <header className='bg-white dark:bg-gray-800 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center gap-4'>
              <Link
                href='/'
                className='text-xl font-bold text-blue-600 dark:text-blue-400'
              >
                Dr. Aqua
              </Link>
              <span className='text-gray-400'>|</span>
              <h1 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Business Management
              </h1>
            </div>
            <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
              <span>Products: {inventory.length}</span>
              <span>•</span>
              <span>Customers: {customers.length}</span>
              <span>•</span>
              <span>Orders: {sales.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className='bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex space-x-1'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className='mr-2'>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {activeTab === 'dashboard' && <SalesDashboard sales={sales} />}
        {activeTab === 'inventory' && (
          <InventoryManager
            inventory={inventory}
            updateInventory={updateInventory}
          />
        )}
        {activeTab === 'billing' && (
          <BillingManager
            inventory={inventory}
            updateInventory={updateInventory}
            customers={customers}
            updateCustomers={updateCustomers}
            addSale={addSale}
          />
        )}
        {activeTab === 'customers' && (
          <CustomerManager
            customers={customers}
            updateCustomers={updateCustomers}
          />
        )}
      </main>

      {/* Footer */}
      <footer className='bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
            Dr. Aqua Business Management System • Data stored locally in browser
          </p>
        </div>
      </footer>
    </div>
  );
}
