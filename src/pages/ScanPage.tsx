
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaceScanner from '@/components/FaceScanner';
import PaymentForm from '@/components/PaymentForm';
import { useNavigate } from 'react-router-dom';

const ScanPage = () => {
  const [scanComplete, setScanComplete] = useState(false);
  const navigate = useNavigate();

  const handleSuccessfulScan = () => {
    setScanComplete(true);
  };

  const handlePaymentComplete = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {scanComplete ? 'Enter Payment Details' : 'FaciPay Scan'}
          </h1>
          <p className="text-facipay-gray">
            {scanComplete 
              ? 'Your face has been verified. Please enter the payment amount.' 
              : 'Position your face in the frame to authenticate and make a payment.'
            }
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          {!scanComplete ? (
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <FaceScanner onSuccessfulScan={handleSuccessfulScan} />
            </div>
          ) : (
            <PaymentForm onPaymentComplete={handlePaymentComplete} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScanPage;
