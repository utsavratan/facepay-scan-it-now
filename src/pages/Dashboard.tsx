
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScanFace } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Simulated user data
  const userData = {
    name: 'Utsav Singh',
    upiId: 'misterutsav@fam',
    balance: 12450.75,
    recentTransactions: [
      { id: 1, name: 'Mobile Recharge', amount: -349, date: '2023-05-06' },
      { id: 2, name: 'Received from Rahul', amount: 1200, date: '2023-05-05' },
      { id: 3, name: 'Electricity Bill', amount: -1450, date: '2023-05-03' },
      { id: 4, name: 'Grocery Store', amount: -850, date: '2023-05-02' },
      { id: 5, name: 'FacePay Payment', amount: -120, date: '2023-05-08' }
    ]
  };
  
  // Service categories
  const services = [
    {
      title: 'Mobile Recharge',
      description: 'Recharge your prepaid mobile or pay postpaid bills',
      icon: 'phone',
      link: '/recharge',
      color: 'blue'
    },
    {
      title: 'Bill Payments',
      description: 'Pay utility bills, education fees, and more',
      icon: 'credit-card',
      link: '/bills',
      color: 'purple'
    },
    {
      title: 'Rent Payment',
      description: 'Pay your house or office rent seamlessly',
      icon: 'home',
      link: '/rent',
      color: 'green'
    },
    {
      title: 'Money Transfer',
      description: 'Send money to friends and family instantly',
      icon: 'user',
      link: '/transfer',
      color: 'orange'
    },
    {
      title: 'Subscriptions',
      description: 'Manage and pay your subscription services',
      icon: 'settings',
      link: '/subscriptions',
      color: 'red'
    },
    {
      title: 'FacePay',
      description: 'Make a payment using facial recognition',
      icon: 'user',
      link: '/scan',
      color: 'blue'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="md:w-3/4 space-y-8">
            {/* Greeting */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Welcome, {userData.name}</h1>
                <p className="text-facipay-gray">Your UPI ID: {userData.upiId}</p>
              </div>
              
              <Link to="/scan">
                <Button className="gradient-bg flex items-center gap-2">
                  <ScanFace size={18} />
                  <span>Pay Now</span>
                </Button>
              </Link>
            </div>
            
            {/* Balance Card */}
            <Card className="bg-gradient-to-r from-facipay-blue to-facipay-purple text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-white/80">Available Balance</p>
                  <h2 className="text-3xl font-bold">₹{userData.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none" asChild>
                    <Link to="/add-money">Add Money</Link>
                  </Button>
                  <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none" asChild>
                    <Link to="/transaction-history">View History</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Services */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ServiceCard 
                    key={index} 
                    title={service.title} 
                    description={service.description}
                    icon={service.icon as any}
                    link={service.link}
                    color={service.color}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/4 space-y-6">
            {/* Recent Transactions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-4">
                  {userData.recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-xs text-facipay-gray">{new Date(transaction.date).toLocaleDateString()}</p>
                      </div>
                      <span className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <Button variant="ghost" className="w-full text-facipay-blue" asChild>
                    <Link to="/transaction-history">View All Transactions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/profile">Manage Profile</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/profile">Account Settings</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/help">Help & Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
