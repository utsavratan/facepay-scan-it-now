
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard } from 'lucide-react';
import FaceScanner from '@/components/FaceScanner';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    upiId: ''
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate personal details
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address",
          variant: "destructive",
        });
        return;
      }
      
      // Validate phone format (10 digits)
      if (!/^\d{10}$/.test(formData.phone)) {
        toast({
          title: "Invalid phone number",
          description: "Please enter a valid 10-digit phone number",
          variant: "destructive",
        });
        return;
      }
      
      setStep(2);
    } else if (step === 2) {
      // Validate UPI ID
      if (!formData.upiId) {
        toast({
          title: "Missing UPI ID",
          description: "Please enter your UPI ID",
          variant: "destructive",
        });
        return;
      }
      
      setStep(3);
    }
  };

  const handleFaceScanComplete = () => {
    toast({
      title: "Registration Successful!",
      description: "Your FaciPay account has been created successfully",
    });
    
    // Redirect to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your FaciPay Account</h1>
            <p className="text-facipay-gray">
              Complete the steps below to start using facial payments
            </p>
          </div>
          
          {/* Step indicators */}
          <div className="flex items-center justify-center mb-8">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-facipay-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-facipay-blue' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-facipay-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-facipay-blue' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-facipay-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
              3
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            {step === 1 && (
              <form onSubmit={handleNextStep}>
                <h2 className="text-xl font-semibold mb-6">Personal Details</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your 10-digit phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button type="submit" className="w-full gradient-bg">
                    Continue
                  </Button>
                </div>
              </form>
            )}
            
            {step === 2 && (
              <form onSubmit={handleNextStep}>
                <h2 className="text-xl font-semibold mb-6">Link UPI ID</h2>
                <div className="mb-6 p-4 bg-facipay-light-blue rounded-lg">
                  <p className="text-sm text-facipay-blue">
                    Your UPI ID will be linked to your facial data for seamless payments.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <div className="relative">
                      <Input 
                        id="upiId"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleChange}
                        placeholder="username@bank"
                        className="pl-10"
                        required
                      />
                      <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <Button type="button" variant="outline" className="w-1/2" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" className="w-1/2 gradient-bg">
                    Continue
                  </Button>
                </div>
              </form>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Register Your Face</h2>
                <FaceScanner 
                  onSuccessfulScan={handleFaceScanComplete}
                  scanMode="register"
                />
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
