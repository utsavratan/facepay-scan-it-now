
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneCall, Wifi, Tv, Zap } from 'lucide-react';

const RechargePage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [operator, setOperator] = useState('jio');
  const { toast } = useToast();

  const operators = {
    mobile: ['jio', 'airtel', 'vi', 'bsnl'],
    dth: ['tata sky', 'dish tv', 'airtel dth', 'd2h'],
    broadband: ['jio fiber', 'airtel xstream', 'act', 'bsnl broadband']
  };

  const popularPlans = {
    jio: [
      { amount: '239', description: '1.5GB/day, Unlimited calls, 28 days' },
      { amount: '479', description: '1.5GB/day, Unlimited calls, 56 days' },
      { amount: '666', description: '2GB/day, Unlimited calls, 84 days' }
    ],
    airtel: [
      { amount: '249', description: '1.5GB/day, Unlimited calls, 28 days' },
      { amount: '499', description: '2GB/day, Unlimited calls, 56 days' },
      { amount: '719', description: '1.5GB/day, Unlimited calls, 84 days' }
    ]
  };

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobileNumber || mobileNumber.length !== 10) {
      toast({
        title: "Invalid number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }
    
    if (!amount || parseInt(amount) < 10) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid recharge amount",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Processing recharge",
      description: "Redirecting to scan your face for payment",
    });
    
    // Normally we'd redirect to the scan page with the recharge details
    setTimeout(() => {
      window.location.href = `/scan?amount=${amount}&purpose=recharge&recipient=${mobileNumber}`;
    }, 1500);
  };

  const selectPlan = (planAmount: string) => {
    setAmount(planAmount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Recharge</h1>
          
          <Tabs defaultValue="mobile">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="mobile" className="flex items-center gap-2">
                <PhoneCall size={16} />
                <span>Mobile</span>
              </TabsTrigger>
              <TabsTrigger value="dth" className="flex items-center gap-2">
                <Tv size={16} />
                <span>DTH</span>
              </TabsTrigger>
              <TabsTrigger value="broadband" className="flex items-center gap-2">
                <Wifi size={16} />
                <span>Broadband</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mobile">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleRecharge} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="mobileNumber">Mobile Number</Label>
                        <Input
                          id="mobileNumber"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="Enter 10-digit mobile number"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="operator">Select Operator</Label>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          {operators.mobile.map((op) => (
                            <Button
                              key={op}
                              type="button"
                              variant={operator === op ? 'default' : 'outline'}
                              className={`capitalize ${operator === op ? 'gradient-bg' : ''}`}
                              onClick={() => setOperator(op)}
                            >
                              {op}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label>Popular Plans</Label>
                        <div className="grid gap-3 mt-2">
                          {(operator === 'jio' || operator === 'airtel') && 
                            popularPlans[operator as keyof typeof popularPlans].map((plan, index) => (
                              <div 
                                key={index}
                                className={`border p-3 rounded-lg cursor-pointer transition-all ${
                                  amount === plan.amount ? 'border-facipay-blue bg-facipay-light-blue' : 'hover:border-facipay-blue'
                                }`}
                                onClick={() => selectPlan(plan.amount)}
                              >
                                <div className="flex justify-between">
                                  <span className="font-medium">₹{plan.amount}</span>
                                  <span className="text-green-600 text-sm">Best Value</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                              </div>
                            ))
                          }
                          
                          {(operator !== 'jio' && operator !== 'airtel') && (
                            <p className="text-sm text-gray-500">Select Jio or Airtel to see plans</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="amount">Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-facipay-gray">₹</span>
                          <Input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-8"
                            placeholder="Enter recharge amount"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg">
                      <Zap className="mr-2" size={16} />
                      Proceed to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="dth">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-gray-500">DTH recharge coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="broadband">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-gray-500">Broadband recharge coming soon</p>
                  </div>
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

export default RechargePage;
