
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MoneyTransferPage = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');
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
        title: "Missing recipient",
        description: "Please enter recipient details",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate successful transfer
    toast({
      title: "Money Transfer Successful!",
      description: `₹${amount} has been sent to ${recipient}`,
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
              <CardTitle className="text-center">Money Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upi">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="upi">UPI Transfer</TabsTrigger>
                  <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upi" className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="recipient">UPI ID / Phone Number</Label>
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
                      <Label htmlFor="note">Note (Optional)</Label>
                      <Input
                        id="note"
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add a note"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg">
                      Send Money
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="bank" className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input
                        id="accountNumber"
                        type="text"
                        placeholder="Enter bank account number"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ifsc">IFSC Code</Label>
                      <Input
                        id="ifsc"
                        type="text"
                        placeholder="Enter IFSC code"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="holderName">Account Holder Name</Label>
                      <Input
                        id="holderName"
                        type="text"
                        placeholder="Enter account holder's name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bankAmount">Amount (₹)</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-facipay-gray">₹</span>
                        <Input
                          id="bankAmount"
                          type="number"
                          className="pl-8"
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg">
                      Transfer to Bank
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MoneyTransferPage;
