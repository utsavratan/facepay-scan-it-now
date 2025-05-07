
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const AddMoneyPage = () => {
  const [amount, setAmount] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddMoney = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than 0",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate successful money addition
    toast({
      title: "Money Added Successfully!",
      description: `₹${amount} has been added to your wallet.`,
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Add Money to Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddMoney} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-facipay-gray">₹</span>
                    <Input
                      id="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-8"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button type="button" variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <svg className="h-6 w-6 mb-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                      </svg>
                      Debit Card
                    </Button>
                    <Button type="button" variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <svg className="h-6 w-6 mb-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                      </svg>
                      Credit Card
                    </Button>
                    <Button type="button" variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <svg className="h-6 w-6 mb-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21,9V7H15V9H21M15,5H17V3H15M19,5H21V3H19M7,9H9V11H7V13H5V11H3V9H5V7H7M15,15V13H7V15H15M15,17V15H17V17H15M15,19V17H13V19H15M11,19V17H13V19H11M9,19V17H11V19H9M7,19V17H9V19H7M11,3H9V5H11M13,3H11V5H13M15,5V7H13V5H15Z" />
                      </svg>
                      UPI
                    </Button>
                    <Button type="button" variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <svg className="h-6 w-6 mb-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z" />
                      </svg>
                      Net Banking
                    </Button>
                  </div>
                </div>
                
                <Button type="submit" className="w-full gradient-bg">
                  Add Money
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddMoneyPage;
