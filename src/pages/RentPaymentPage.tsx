
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const RentPaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [purpose, setPurpose] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than 0",
        variant: "destructive",
      });
      return;
    }
    
    if (!recipient) {
      toast({
        title: "Missing information",
        description: "Please enter recipient details",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate successful payment
    toast({
      title: "Rent Payment Successful!",
      description: `₹${amount} has been sent to ${recipient} for ${purpose || 'rent payment'}.`,
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
              <CardTitle className="text-center">Rent Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient UPI ID / Phone Number</Label>
                  <Input
                    id="recipient"
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Enter UPI ID or phone number"
                    required
                  />
                </div>
                
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
                  <Label htmlFor="purpose">Purpose / Description (Optional)</Label>
                  <Input
                    id="purpose"
                    type="text"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    placeholder="e.g., May 2023 Rent"
                  />
                </div>
                
                <Button type="submit" className="w-full gradient-bg">
                  Pay Rent
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

export default RentPaymentPage;
