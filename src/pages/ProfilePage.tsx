
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, Shield, CreditCard, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: "Utsav Singh",
    email: "utsav.singh@example.com",
    phone: "+91 9876543210",
    upiId: "misterutsav@fam",
    balance: 12450.75,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-6">
            <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" alt={user.name} />
                  <AvatarFallback className="bg-facipay-blue text-white text-2xl">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                <p className="text-facipay-gray mb-3">{user.phone} | {user.email}</p>
                <p className="text-facipay-gray mb-4">UPI ID: {user.upiId}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Button variant="outline" size="sm">
                    <User size={16} className="mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings size={16} className="mr-2" />
                    Preferences
                  </Button>
                  <Button variant="outline" size="sm">
                    <Shield size={16} className="mr-2" />
                    Security
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 text-center p-4 bg-facipay-light-blue rounded-lg">
                <p className="text-facipay-gray mb-1">Current Balance</p>
                <p className="text-2xl font-bold text-facipay-blue">
                  ₹{user.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </p>
                <Link to="/add-money">
                  <Button className="gradient-bg mt-2" size="sm">Add Money</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Profile Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <CreditCard className="h-10 w-10 text-facipay-blue mb-2" />
                <h3 className="font-medium mb-2">Payment Methods</h3>
                <p className="text-sm text-facipay-gray mb-3">Manage your cards and bank accounts</p>
                <Button variant="outline" className="w-full">Manage</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <History className="h-10 w-10 text-facipay-blue mb-2" />
                <h3 className="font-medium mb-2">Transaction History</h3>
                <p className="text-sm text-facipay-gray mb-3">View all your past transactions</p>
                <Link to="/transaction-history" className="w-full">
                  <Button variant="outline" className="w-full">View History</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-facipay-blue mb-2" />
                <h3 className="font-medium mb-2">KYC Verification</h3>
                <p className="text-sm text-facipay-gray mb-3">Update your KYC documents</p>
                <Button variant="outline" className="w-full">Verify Now</Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <h4 className="font-medium">Notifications</h4>
                    <p className="text-sm text-facipay-gray">Manage notification preferences</p>
                  </div>
                  <Button variant="ghost">Manage</Button>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <h4 className="font-medium">Privacy</h4>
                    <p className="text-sm text-facipay-gray">Control your privacy settings</p>
                  </div>
                  <Button variant="ghost">Manage</Button>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <h4 className="font-medium">Security</h4>
                    <p className="text-sm text-facipay-gray">Update security settings</p>
                  </div>
                  <Button variant="ghost">Manage</Button>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <h4 className="font-medium">Help & Support</h4>
                    <p className="text-sm text-facipay-gray">Get help with your account</p>
                  </div>
                  <Button variant="ghost">Contact</Button>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <div>
                    <h4 className="font-medium text-red-600">Log Out</h4>
                    <p className="text-sm text-facipay-gray">Sign out from your account</p>
                  </div>
                  <Button variant="ghost" className="text-red-600">Log Out</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
