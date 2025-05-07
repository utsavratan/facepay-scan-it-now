
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ScanFace, CreditCard, Lock, User } from 'lucide-react';
import Footer from '@/components/Footer';

const Index = () => {
  return (
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Pay Securely with Just Your <span className="gradient-text">Face</span>
                </h1>
                <p className="text-lg text-facipay-gray mb-8">
                  FaciPay revolutionizes digital payments by linking your UPI directly to your face. 
                  Scan, verify, and pay in seconds - no cards, no phones, just you.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="gradient-bg" size="lg" asChild>
                    <Link to="/register">Get Started</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/how-it-works">How It Works</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-facipay-light-blue rounded-full filter blur-3xl opacity-70"></div>
                  <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-facipay-light-purple rounded-full filter blur-3xl opacity-70"></div>
                  
                  <div className="relative glass-card p-8">
                    <div className="flex justify-center mb-8">
                      <div className="h-32 w-32 rounded-full border-4 border-facipay-blue flex items-center justify-center bg-white">
                        <ScanFace size={64} className="text-facipay-blue" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-12 bg-white rounded-lg flex items-center px-4 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-facipay-light-blue flex items-center justify-center">
                          <User className="h-5 w-5 text-facipay-blue" />
                        </div>
                        <div className="ml-3">
                          <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-12 bg-white rounded-lg flex items-center px-4 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-facipay-light-purple flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-facipay-purple" />
                        </div>
                        <div className="ml-3">
                          <div className="h-3 w-32 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-12 bg-facipay-blue bg-opacity-10 rounded-lg border-2 border-facipay-blue border-dashed flex items-center justify-center">
                        <span className="text-facipay-blue font-medium">Biometric Verification</span>
                        <Lock className="ml-2 h-4 w-4 text-facipay-blue" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-facipay-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose FaciPay?</h2>
              <p className="text-facipay-gray max-w-2xl mx-auto">
                Experience the future of payments with our secure, fast, and convenient facial recognition payment system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-facipay-light-blue flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-facipay-blue" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Highly Secure</h3>
                <p className="text-facipay-gray">
                  Advanced biometric verification with encryption ensures your payments are protected by the most secure technology available.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-facipay-light-purple flex items-center justify-center mb-4">
                  <ScanFace className="h-6 w-6 text-facipay-purple" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Contactless Payments</h3>
                <p className="text-facipay-gray">
                  No need to carry cards or even your phone. Your face is your payment method, always with you.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-facipay-light-blue flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-facipay-blue" />
                </div>
                <h3 className="font-semibold text-xl mb-3">UPI Integration</h3>
                <p className="text-facipay-gray">
                  Seamlessly links with your existing UPI ID, working with all major banks and payment platforms in India.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How FaciPay Works</h2>
              <p className="text-facipay-gray max-w-2xl mx-auto">
                Simple, secure, and seamless - making payments with FaciPay is as easy as looking at your screen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-facipay-light-blue flex items-center justify-center mx-auto mb-4">
                  <span className="text-facipay-blue font-bold text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">Register Your Face</h3>
                <p className="text-facipay-gray">
                  Create an account, link your UPI ID, and register your facial biometrics securely.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-facipay-light-purple flex items-center justify-center mx-auto mb-4">
                  <span className="text-facipay-purple font-bold text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">Scan Your Face</h3>
                <p className="text-facipay-gray">
                  When making a payment, simply scan your face using our secure verification system.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-facipay-light-blue flex items-center justify-center mx-auto mb-4">
                  <span className="text-facipay-blue font-bold text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">Confirm Payment</h3>
                <p className="text-facipay-gray">
                  Enter the amount and verify with your PIN - and that's it! Your payment is complete.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="gradient-bg" size="lg" asChild>
                <Link to="/register">Start Using FaciPay</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
