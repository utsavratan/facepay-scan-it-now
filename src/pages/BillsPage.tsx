
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Droplets, Receipt, FileText } from 'lucide-react';

const BillsPage = () => {
  const [consumerId, setConsumerId] = useState('');
  const [amount, setAmount] = useState('');
  const [provider, setProvider] = useState('');
  const { toast } = useToast();

  const providers = {
    electricity: ['Tata Power', 'Adani Electricity', 'BESCOM', 'MSEDCL'],
    water: ['Delhi Jal Board', 'Mumbai Municipal Corp', 'Chennai Metro Water'],
    gas: ['Mahanagar Gas', 'Indraprastha Gas', 'Adani Gas'],
  };

  const handleBillPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consumerId) {
      toast({
        title: "Missing information",
        description: "Please enter a valid consumer ID",
        variant: "destructive",
      });
      return;
    }
    
    if (!provider) {
      toast({
        title: "Missing information",
        description: "Please select a service provider",
        variant: "destructive",
      });
      return;
    }
    
    if (!amount || parseInt(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid bill amount",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Processing bill payment",
      description: "Redirecting to scan your face for payment",
    });
    
    // Normally we'd redirect to the scan page with the bill details
    setTimeout(() => {
      window.location.href = `/scan?amount=${amount}&purpose=bill&recipient=${provider}`;
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Pay Bills</h1>
          
          <Tabs defaultValue="electricity">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="electricity" className="flex items-center gap-2">
                <Zap size={16} />
                <span>Electricity</span>
              </TabsTrigger>
              <TabsTrigger value="water" className="flex items-center gap-2">
                <Droplets size={16} />
                <span>Water</span>
              </TabsTrigger>
              <TabsTrigger value="gas" className="flex items-center gap-2">
                <FileText size={16} />
                <span>Gas</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="electricity">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleBillPayment} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="provider">Select Provider</Label>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          {providers.electricity.map((prov) => (
                            <Button
                              key={prov}
                              type="button"
                              variant={provider === prov ? 'default' : 'outline'}
                              className={provider === prov ? 'gradient-bg' : ''}
                              onClick={() => setProvider(prov)}
                            >
                              {prov}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="consumerId">Consumer Number / ID</Label>
                        <Input
                          id="consumerId"
                          value={consumerId}
                          onChange={(e) => setConsumerId(e.target.value)}
                          placeholder="Enter your consumer number"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="amount">Bill Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-facipay-gray">₹</span>
                          <Input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-8"
                            placeholder="Enter bill amount"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg">
                      <Receipt className="mr-2" size={16} />
                      Pay Bill
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="water">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleBillPayment} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="provider">Select Provider</Label>
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {providers.water.map((prov) => (
                            <Button
                              key={prov}
                              type="button"
                              variant={provider === prov ? 'default' : 'outline'}
                              className={provider === prov ? 'gradient-bg' : ''}
                              onClick={() => setProvider(prov)}
                            >
                              {prov}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="consumerId">Consumer Number / ID</Label>
                        <Input
                          id="consumerId"
                          value={consumerId}
                          onChange={(e) => setConsumerId(e.target.value)}
                          placeholder="Enter your consumer number"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="amount">Bill Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-facipay-gray">₹</span>
                          <Input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-8"
                            placeholder="Enter bill amount"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg">
                      <Receipt className="mr-2" size={16} />
                      Pay Bill
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="gas">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleBillPayment} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="provider">Select Provider</Label>
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {providers.gas.map((prov) => (
                            <Button
                              key={prov}
                              type="button"
                              variant={provider === prov ? 'default' : 'outline'}
                              className={provider === prov ? 'gradient-bg' : ''}
                              onClick={() => setProvider(prov)}
                            >
                              {prov}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="consumerId">Consumer Number / ID</Label>
                        <Input
                          id="consumerId"
                          value={consumerId}
                          onChange={(e) => setConsumerId(e.target.value)}
                          placeholder="Enter your consumer number"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="amount">Bill Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-facipay-gray">₹</span>
                          <Input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-8"
                            placeholder="Enter bill amount"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg">
                      <Receipt className="mr-2" size={16} />
                      Pay Bill
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BillsPage;
