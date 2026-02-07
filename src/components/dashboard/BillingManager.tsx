'use client';

import React, { useRef, useState } from 'react';

import type { Customer, Product, Sale } from '@/types/dashboard';

interface BillingManagerProps {
  inventory: Product[];
  updateInventory: (inventory: Product[]) => void;
  customers: Customer[];
  updateCustomers: (customers: Customer[]) => void;
  addSale: (sale: Sale) => void;
}

export default function BillingManager({
  inventory,
  updateInventory,
  customers,
  updateCustomers,
  addSale,
}: BillingManagerProps) {
  const [bill, setBill] = useState<{
    customerId: string;
    items: (Product & { qty: number })[];
  }>({
    customerId: '',
    items: [],
  });
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const billRef = useRef<HTMLDivElement>(null);

  const addItem = () => {
    const product = inventory.find((p) => p.id === Number(selectedProduct));
    if (product && product.quantity >= quantity) {
      setBill({
        ...bill,
        items: [...bill.items, { ...product, qty: quantity }],
      });
      setSelectedProduct('');
      setQuantity(1);
    } else {
      alert('Product not available or insufficient quantity!');
    }
  };

  const removeItem = (index: number) => {
    setBill({ ...bill, items: bill.items.filter((_, i) => i !== index) });
  };

  const generateBill = () => {
    if (!bill.customerId) {
      alert('Please select a customer!');
      return;
    }
    if (bill.items.length === 0) {
      alert('Please add items to the bill!');
      return;
    }

    const total = bill.items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );
    const invoice = `INV-${Date.now()}`;
    const sale: Sale = {
      invoice,
      customerId: Number(bill.customerId),
      items: bill.items,
      total,
      date: new Date(),
    };

    addSale(sale);

    // Update inventory
    updateInventory(
      inventory.map((p) => {
        const sold = bill.items.find((i) => i.id === p.id);
        return sold ? { ...p, quantity: p.quantity - sold.qty } : p;
      }),
    );

    // Update customer history
    updateCustomers(
      customers.map((c) =>
        c.id === Number(bill.customerId)
          ? { ...c, history: [...c.history, sale] }
          : c,
      ),
    );

    alert(
      `Bill generated successfully!\nInvoice: ${invoice}\nTotal: $${total}`,
    );
    setBill({ customerId: '', items: [] });
  };

  const downloadPDF = async () => {
    if (!billRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const canvas = await html2canvas(billRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`receipt-${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const total = bill.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
        Billing & Receipts
      </h2>

      <div className='mb-6 flex flex-wrap gap-3'>
        <select
          value={bill.customerId}
          onChange={(e) => setBill({ ...bill, customerId: e.target.value })}
          className='flex-1 min-w-[150px] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        >
          <option value=''>Select Customer</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className='flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        >
          <option value=''>Select Product</option>
          {inventory
            .filter((p) => p.quantity > 0)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} (Stock: {p.quantity}) - ${p.price}
              </option>
            ))}
        </select>

        <input
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          min='1'
          className='w-20 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        />

        <button
          onClick={addItem}
          className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors'
        >
          Add Item
        </button>
      </div>

      <div
        ref={billRef}
        className='mb-6 p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900'
      >
        <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
          Bill Preview
        </h3>

        {bill.items.length > 0 ? (
          <>
            <table className='w-full mb-4'>
              <thead>
                <tr className='border-b dark:border-gray-600'>
                  <th className='text-left py-2 text-gray-900 dark:text-white'>
                    Product
                  </th>
                  <th className='text-right py-2 text-gray-900 dark:text-white'>
                    Qty
                  </th>
                  <th className='text-right py-2 text-gray-900 dark:text-white'>
                    Price
                  </th>
                  <th className='text-right py-2 text-gray-900 dark:text-white'>
                    Subtotal
                  </th>
                  <th className='text-right py-2 text-gray-900 dark:text-white'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bill.items.map((item, i) => (
                  <tr key={i} className='border-b dark:border-gray-600'>
                    <td className='py-2 text-gray-900 dark:text-white'>
                      {item.name}
                    </td>
                    <td className='text-right py-2 text-gray-900 dark:text-white'>
                      {item.qty}
                    </td>
                    <td className='text-right py-2 text-gray-900 dark:text-white'>
                      ${item.price}
                    </td>
                    <td className='text-right py-2 text-gray-900 dark:text-white'>
                      ${item.price * item.qty}
                    </td>
                    <td className='text-right py-2'>
                      <button
                        onClick={() => removeItem(i)}
                        className='text-red-500 hover:text-red-700'
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='text-right text-xl font-bold text-gray-900 dark:text-white'>
              Total: ${total}
            </div>
          </>
        ) : (
          <p className='text-gray-500 dark:text-gray-400 text-center py-4'>
            No items added yet. Select products above to create a bill.
          </p>
        )}
      </div>

      <div className='flex gap-3'>
        <button
          onClick={generateBill}
          className='px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors'
        >
          Generate Bill
        </button>
        <button
          onClick={downloadPDF}
          disabled={bill.items.length === 0}
          className='px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-md font-medium transition-colors'
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
