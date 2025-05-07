
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Plus } from 'lucide-react';

const SubscriptionsPage = () => {
  // Sample subscriptions data
  const activeSubscriptions = [
    { id: 1, name: "Netflix", amount: 499, billingDate: "15th of every month", logo: "N" },
    { id: 2, name: "Amazon Prime", amount: 179, billingDate: "3rd of every month", logo: "P" },
    { id: 3, name: "Spotify", amount: 119, billingDate: "21st of every month", logo: "S" }
  ];

  // Sample subscription categories
  const categories = [
    { id: 1, name: "Entertainment", color: "blue" },
    { id: 2, name: "Utilities", color: "green" },
    { id: 3, name: "Health & Fitness", color: "purple" },
    { id: 4, name: "Shopping", color: "orange" },
    { id: 5, name: "Productivity", color: "red" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Subscriptions</h1>
          <Button className="gradient-bg">
            <Plus size={18} className="mr-2" />
            Add Subscription
          </Button>
        </div>
        
        {/* Active Subscriptions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Active Subscriptions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSubscriptions.map((sub) => (
              <Card key={sub.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-facipay-blue flex items-center justify-center text-white font-bold mr-3">
                        {sub.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold">{sub.name}</h3>
                        <p className="text-sm text-facipay-gray">{sub.billingDate}</p>
                      </div>
                    </div>
                    <span className="font-medium">₹{sub.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Browse Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className={`border-l-4 border-${category.color}-500`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <Button variant="link" className="text-facipay-blue p-0">
                    Browse all services
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionsPage;
