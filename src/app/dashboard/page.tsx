'use client';

import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: '+15.3%',
    trend: 'up',
    icon: ShoppingCart,
  },
  {
    title: 'Products Sold',
    value: '3,456',
    change: '+12.5%',
    trend: 'up',
    icon: Package,
  },
  {
    title: 'Active Customers',
    value: '892',
    change: '-2.4%',
    trend: 'down',
    icon: Users,
  },
];

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    product: 'AquaPure Pro 5-Stage Filter',
    amount: 299,
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    product: 'CrystalFlow Commercial Unit',
    amount: 899,
    status: 'processing',
    date: '2024-01-14',
  },
  {
    id: 'ORD-003',
    customer: 'Mike Johnson',
    product: 'EcoFilter Compact Home',
    amount: 149,
    status: 'shipped',
    date: '2024-01-14',
  },
  {
    id: 'ORD-004',
    customer: 'Sarah Williams',
    product: 'PureTech Industrial System',
    amount: 1599,
    status: 'pending',
    date: '2024-01-13',
  },
];

const topProducts = [
  { name: 'AquaPure Pro 5-Stage Filter', sales: 234, revenue: 69966 },
  { name: 'EcoFilter Compact Home', sales: 189, revenue: 28161 },
  { name: 'CrystalFlow Commercial Unit', sales: 87, revenue: 78213 },
  { name: 'FlowMax Office System', sales: 76, revenue: 34124 },
];

export default function DashboardPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-secondary text-secondary-foreground';
      case 'processing':
        return 'bg-blue-500 text-white';
      case 'shipped':
        return 'bg-primary text-primary-foreground';
      case 'pending':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-8'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold'>Seller Dashboard</h1>
            <p className='text-muted-foreground'>
              Welcome back! Here's your business overview.
            </p>
          </div>
          <Button>Download Report</Button>
        </div>

        {/* Stats Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-sm font-medium text-muted-foreground'>
                  {stat.title}
                </CardTitle>
                <stat.icon className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>{stat.value}</div>
                <div className='flex items-center gap-1 text-xs mt-1'>
                  {stat.trend === 'up' ? (
                    <TrendingUp className='h-3 w-3 text-secondary' />
                  ) : (
                    <TrendingDown className='h-3 w-3 text-destructive' />
                  )}
                  <span
                    className={
                      stat.trend === 'up'
                        ? 'text-secondary'
                        : 'text-destructive'
                    }
                  >
                    {stat.change}
                  </span>
                  <span className='text-muted-foreground'>from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue='orders' className='space-y-6'>
          <TabsList>
            <TabsTrigger value='orders'>Recent Orders</TabsTrigger>
            <TabsTrigger value='products'>Top Products</TabsTrigger>
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value='orders' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className='flex items-center justify-between p-4 border rounded-lg'
                    >
                      <div className='space-y-1'>
                        <div className='flex items-center gap-3'>
                          <span className='font-semibold'>{order.id}</span>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          {order.customer}
                        </p>
                        <p className='text-sm'>{order.product}</p>
                      </div>
                      <div className='text-right'>
                        <div className='font-bold text-lg'>${order.amount}</div>
                        <div className='text-sm text-muted-foreground'>
                          {order.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='products' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {topProducts.map((product, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between p-4 border rounded-lg'
                    >
                      <div className='space-y-1'>
                        <p className='font-semibold'>{product.name}</p>
                        <p className='text-sm text-muted-foreground'>
                          {product.sales} units sold
                        </p>
                      </div>
                      <div className='text-right'>
                        <div className='font-bold text-lg text-primary'>
                          ${product.revenue.toLocaleString()}
                        </div>
                        <div className='text-sm text-muted-foreground'>
                          Revenue
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='analytics' className='space-y-4'>
            <div className='grid md:grid-cols-2 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='h-64 flex items-center justify-center bg-muted rounded-lg'>
                    <p className='text-muted-foreground'>
                      Sales chart would go here
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='h-64 flex items-center justify-center bg-muted rounded-lg'>
                    <p className='text-muted-foreground'>
                      Customer growth chart would go here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
