
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, User, Home, CreditCard, PhoneCall, Receipt } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="gradient-bg h-8 w-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-xl gradient-text">FaciPay</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/dashboard" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive('/dashboard') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
            }`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/scan" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive('/scan') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
            }`}
          >
            <CreditCard size={18} />
            <span>Pay</span>
          </Link>
          <Link 
            to="/recharge" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive('/recharge') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
            }`}
          >
            <PhoneCall size={18} />
            <span>Recharge</span>
          </Link>
          <Link 
            to="/bills" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              isActive('/bills') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
            }`}
          >
            <Receipt size={18} />
            <span>Bills</span>
          </Link>
        </div>
        
        <div className="hidden md:flex">
          <Button className="gradient-bg" asChild>
            <Link to="/profile">
              <User size={18} className="mr-2" />
              Profile
            </Link>
          </Button>
        </div>
        
        <div className="flex md:hidden items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/dashboard') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/scan" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/scan') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <CreditCard size={18} />
              <span>Pay</span>
            </Link>
            <Link 
              to="/recharge" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/recharge') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <PhoneCall size={18} />
              <span>Recharge</span>
            </Link>
            <Link 
              to="/bills" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/bills') ? 'bg-facipay-light-blue text-facipay-blue' : 'text-facipay-dark hover:text-facipay-blue'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Receipt size={18} />
              <span>Bills</span>
            </Link>
            <Link 
              to="/profile" 
              className="gradient-bg text-white flex items-center justify-center space-x-2 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={18} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
