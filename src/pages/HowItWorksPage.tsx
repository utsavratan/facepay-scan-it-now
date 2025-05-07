
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ScanFace, CreditCard, Lock, User } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">How FaciPay Works</h1>
          <p className="text-lg text-facipay-gray mb-10">
            FaciPay is a revolutionary payment system that uses facial recognition to make payments
            quick, secure, and convenient. Here's how it works:
          </p>
          
          {/* Step 1 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full bg-facipay-light-blue flex items-center justify-center flex-shrink-0">
                  <User size={40} className="text-facipay-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Step 1: Registration</h2>
                  <p className="text-facipay-gray">
                    First, create a FaciPay account and link your UPI ID. Our app will guide you 
                    through a quick and secure process to register your facial biometrics. This data
                    is encrypted and stored securely, ensuring only you can access your payment methods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Step 2 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full bg-facipay-light-purple flex items-center justify-center flex-shrink-0">
                  <ScanFace size={40} className="text-facipay-purple" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Step 2: Face Scanning</h2>
                  <p className="text-facipay-gray">
                    When you want to make a payment, simply tap the "Pay" button and position your face
                    in the scanner. FaciPay uses advanced biometric technology to verify your identity
                    in seconds. The scanning process is contactless and works in various lighting conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Step 3 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full bg-facipay-light-blue flex items-center justify-center flex-shrink-0">
                  <CreditCard size={40} className="text-facipay-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Step 3: Payment Details</h2>
                  <p className="text-facipay-gray">
                    After your face is verified, enter the payment amount and recipient details.
                    For added security, you'll need to confirm the payment with your PIN (default: 2525).
                    This two-factor authentication ensures that even if someone has your device,
                    they cannot make payments without your face and PIN.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Step 4 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full bg-facipay-light-green flex items-center justify-center flex-shrink-0">
                  <Lock size={40} className="text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Step 4: Instant Confirmation</h2>
                  <p className="text-facipay-gray">
                    Once confirmed, the payment is processed instantly through the UPI network.
                    You'll receive a confirmation receipt, and the transaction will be added to your
                    history. All transactions are secured with end-to-end encryption and comply with
                    the highest security standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to experience the future of payments?</h3>
            <p className="text-facipay-gray mb-6">
              FaciPay makes transactions faster, more secure, and more convenient than ever before.
              No more fumbling for cards or phones – just your face and PIN is all you need.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
