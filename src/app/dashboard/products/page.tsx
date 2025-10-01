'use client';

import { Edit, Plus, Search,Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const initialProducts = [
  {
    id: '1',
    name: 'AquaPure Pro 5-Stage Filter',
    price: 299,
    stock: 45,
    category: 'Residential',
    status: 'active',
  },
  {
    id: '2',
    name: 'CrystalFlow Commercial Unit',
    price: 899,
    stock: 12,
    category: 'Commercial',
    status: 'active',
  },
  {
    id: '3',
    name: 'EcoFilter Compact Home',
    price: 149,
    stock: 78,
    category: 'Residential',
    status: 'active',
  },
  {
    id: '4',
    name: 'PureTech Industrial System',
    price: 1599,
    stock: 5,
    category: 'Industrial',
    status: 'low-stock',
  },
];

export default function ProductsManagementPage() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-8'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold'>Product Management</h1>
            <p className='text-muted-foreground'>
              Manage your water filtration products inventory
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className='h-4 w-4 mr-2' />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className='max-w-2xl'>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                  Fill in the details to add a new product to your inventory.
                </DialogDescription>
              </DialogHeader>
              <form className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='productName'>Product Name</Label>
                  <Input id='productName' placeholder='Enter product name' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='price'>Price ($)</Label>
                    <Input id='price' type='number' placeholder='0.00' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='stock'>Stock Quantity</Label>
                    <Input id='stock' type='number' placeholder='0' />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='category'>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select category' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='residential'>Residential</SelectItem>
                      <SelectItem value='commercial'>Commercial</SelectItem>
                      <SelectItem value='industrial'>Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='description'>Description</Label>
                  <Textarea
                    id='description'
                    placeholder='Enter product description'
                    rows={3}
                  />
                </div>
                <div className='flex gap-3'>
                  <Button
                    type='button'
                    variant='outline'
                    onClick={() => setIsAddDialogOpen(false)}
                    className='flex-1 bg-transparent'
                  >
                    Cancel
                  </Button>
                  <Button type='submit' className='flex-1'>
                    Add Product
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <div className='relative max-w-md'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
          <Input
            placeholder='Search products...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='pl-10'
          />
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Products ({filteredProducts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className='flex items-center justify-between p-4 border rounded-lg'
                >
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='font-semibold'>{product.name}</h3>
                      <Badge variant='outline'>{product.category}</Badge>
                      {product.status === 'low-stock' && (
                        <Badge variant='destructive'>Low Stock</Badge>
                      )}
                    </div>
                    <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                      <span>Price: ${product.price}</span>
                      <span>Stock: {product.stock} units</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Button variant='outline' size='sm'>
                      <Edit className='h-4 w-4' />
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 className='h-4 w-4 text-destructive' />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
