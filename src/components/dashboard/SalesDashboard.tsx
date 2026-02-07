'use client';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useRef } from 'react';

import type { Sale } from '@/types/dashboard';

// Register Chart.js components (including BarController for bar charts)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface SalesDashboardProps {
  sales: Sale[];
}

export default function SalesDashboard({ sales }: SalesDashboardProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  const now = new Date();

  const dailySales = sales
    .filter((s) => new Date(s.date).toDateString() === now.toDateString())
    .reduce((sum, s) => sum + s.total, 0);

  const weeklySales = sales
    .filter(
      (s) =>
        (now.getTime() - new Date(s.date).getTime()) / (1000 * 60 * 60 * 24) <=
        7,
    )
    .reduce((sum, s) => sum + s.total, 0);

  const monthlySales = sales
    .filter(
      (s) =>
        new Date(s.date).getMonth() === now.getMonth() &&
        new Date(s.date).getFullYear() === now.getFullYear(),
    )
    .reduce((sum, s) => sum + s.total, 0);

  const totalRevenue = sales.reduce((sum, s) => sum + s.total, 0);
  const totalOrders = sales.length;

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: ['Daily', 'Weekly', 'Monthly'],
        datasets: [
          {
            label: 'Sales ($)',
            data: [dailySales, weeklySales, monthlySales],
            backgroundColor: [
              'rgba(239, 68, 68, 0.7)',
              'rgba(59, 130, 246, 0.7)',
              'rgba(34, 197, 94, 0.7)',
            ],
            borderColor: [
              'rgb(239, 68, 68)',
              'rgb(59, 130, 246)',
              'rgb(34, 197, 94)',
            ],
            borderWidth: 2,
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Sales Overview',
            font: {
              size: 16,
              weight: 'bold',
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return '$' + value;
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [dailySales, weeklySales, monthlySales]);

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
        Sales Dashboard
      </h2>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        <div className='bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4'>
          <h3 className='text-sm font-medium text-red-600 dark:text-red-400'>
            Daily Sales
          </h3>
          <p className='text-2xl font-bold text-red-700 dark:text-red-300'>
            ${dailySales.toFixed(2)}
          </p>
        </div>

        <div className='bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4'>
          <h3 className='text-sm font-medium text-blue-600 dark:text-blue-400'>
            Weekly Sales
          </h3>
          <p className='text-2xl font-bold text-blue-700 dark:text-blue-300'>
            ${weeklySales.toFixed(2)}
          </p>
        </div>

        <div className='bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4'>
          <h3 className='text-sm font-medium text-green-600 dark:text-green-400'>
            Monthly Sales
          </h3>
          <p className='text-2xl font-bold text-green-700 dark:text-green-300'>
            ${monthlySales.toFixed(2)}
          </p>
        </div>

        <div className='bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg p-4'>
          <h3 className='text-sm font-medium text-purple-600 dark:text-purple-400'>
            Total Revenue
          </h3>
          <p className='text-2xl font-bold text-purple-700 dark:text-purple-300'>
            ${totalRevenue.toFixed(2)}
          </p>
          <p className='text-xs text-purple-500 dark:text-purple-400 mt-1'>
            {totalOrders} orders
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className='h-80 bg-gray-50 dark:bg-gray-900 rounded-lg p-4'>
        <canvas ref={chartRef}></canvas>
      </div>

      {/* Recent Sales */}
      {sales.length > 0 && (
        <div className='mt-8'>
          <h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>
            Recent Sales
          </h3>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-gray-100 dark:bg-gray-700'>
                  <th className='px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white'>
                    Invoice
                  </th>
                  <th className='px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white'>
                    Date
                  </th>
                  <th className='px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white'>
                    Items
                  </th>
                  <th className='px-4 py-2 text-right text-sm font-semibold text-gray-900 dark:text-white'>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {sales
                  .slice(-5)
                  .reverse()
                  .map((sale, i) => (
                    <tr key={i} className='border-b dark:border-gray-600'>
                      <td className='px-4 py-2 font-mono text-blue-600 dark:text-blue-400'>
                        {sale.invoice}
                      </td>
                      <td className='px-4 py-2 text-gray-900 dark:text-white'>
                        {new Date(sale.date).toLocaleDateString()}
                      </td>
                      <td className='px-4 py-2 text-gray-900 dark:text-white'>
                        {sale.items.length} items
                      </td>
                      <td className='px-4 py-2 text-right font-semibold text-gray-900 dark:text-white'>
                        ${sale.total}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {sales.length === 0 && (
        <div className='mt-8 text-center text-gray-500 dark:text-gray-400 py-8'>
          No sales recorded yet. Create bills to see your sales data here.
        </div>
      )}
    </div>
  );
}
