
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface PaymentFormProps {
  onPaymentComplete: () => void;
  upiId?: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  onPaymentComplete,
  upiId = "misterutsav@fam" 
}) => {
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [showPinInput, setShowPinInput] = useState(false);
  const { toast } = useToast();

  const handleAmountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than 0",
        variant: "destructive",
      });
      return;
    }
    
    setShowPinInput(true);
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (pin !== '2525') {
      toast({
        title: "Incorrect PIN",
        description: "The PIN you entered is incorrect. Please try again.",
        variant: "destructive",
      });
      setPin('');
      return;
    }
    
    // Simulate a successful payment
    toast({
      title: "Payment Successful!",
      description: `₹${amount} has been sent to ${upiId}`,
    });
    
    // Reset form
    setAmount('');
    setPin('');
    setShowPinInput(false);
    
    // Call the completion callback
    onPaymentComplete();
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 glass-card">
      {!showPinInput ? (
        <form onSubmit={handleAmountSubmit} className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Enter Payment Amount</h3>
            <p className="text-facipay-gray">Face verified successfully. Please enter the amount to pay.</p>
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
          
          <div className="pt-2">
            <p className="text-sm text-facipay-gray mb-2">
              Paying to: <span className="font-medium text-facipay-dark">{upiId}</span>
            </p>
          </div>
          
          <Button type="submit" className="w-full gradient-bg">
            Proceed to Verification
          </Button>
        </form>
      ) : (
        <form onSubmit={handlePinSubmit} className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Enter Verification PIN</h3>
            <p className="text-facipay-gray">Enter your 4-digit PIN to confirm payment of ₹{amount}</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pin">4-Digit PIN</Label>
            <Input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="****"
              maxLength={4}
              pattern="[0-9]{4}"
              autoFocus
              required
            />
          </div>
          
          <div className="flex space-x-4 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              className="w-1/2"
              onClick={() => setShowPinInput(false)}
            >
              Back
            </Button>
            <Button type="submit" className="w-1/2 gradient-bg">
              Confirm Payment
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
