
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Phone, Mail, FileQuestion } from 'lucide-react';

const HelpPage = () => {
  const faqs = [
    { 
      question: "How does FacePay work?", 
      answer: "FacePay uses facial recognition technology to authenticate payments. When you make a payment, the system scans your face and matches it with your registered profile to authorize the transaction." 
    },
    { 
      question: "Is FacePay secure?", 
      answer: "Yes, FacePay is highly secure. We use advanced facial recognition algorithms and encryption to ensure your biometric data is protected. The system also includes liveness detection to prevent fraud." 
    },
    { 
      question: "How do I register my face with FacePay?", 
      answer: "To register, go to the Register page from the main menu. Follow the on-screen instructions to scan your face. Make sure you're in a well-lit environment and position your face within the frame." 
    },
    { 
      question: "Can someone else use my face to make payments?", 
      answer: "No, our system includes advanced liveness detection that can distinguish between a real person and a photo or video. Additionally, all payments require PIN verification as a second layer of security." 
    },
    { 
      question: "What if I change my appearance?", 
      answer: "Minor changes like glasses or makeup should not affect the system. For significant changes like facial surgery, you may need to re-register your face. Contact support for assistance." 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
        
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search for help topics..." 
              className="pl-4 pr-10 py-3 w-full rounded-full"
            />
            <Button 
              className="absolute right-1 top-1 rounded-full w-8 h-8 p-0 flex items-center justify-center"
              variant="ghost"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-facipay-blue" />
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-facipay-gray mb-4">Chat with our support team for immediate assistance</p>
              <Button className="gradient-bg">Start Chat</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-facipay-gray mb-4">Speak directly with our customer support team</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Call Support</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-facipay-gray mb-4">Send us an email and we'll respond within 24 hours</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Email Us</Button>
            </CardContent>
          </Card>
        </div>
        
        {/* FAQs */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileQuestion className="mr-2" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-4 border-b last:border-0">
                  <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                  <p className="text-facipay-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpPage;
