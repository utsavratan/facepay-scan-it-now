
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, User, Bell } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="gradient-bg h-8 w-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-xl gradient-text">FaciPay</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-facipay-dark hover:text-facipay-blue transition-colors">Home</Link>
          <Link to="/features" className="text-facipay-dark hover:text-facipay-blue transition-colors">Features</Link>
          <Link to="/how-it-works" className="text-facipay-dark hover:text-facipay-blue transition-colors">How It Works</Link>
          <Link to="/support" className="text-facipay-dark hover:text-facipay-blue transition-colors">Support</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button className="gradient-bg" asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
        
        <div className="flex md:hidden items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/notifications">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-facipay-dark hover:text-facipay-blue py-2 px-3 rounded-md hover:bg-facipay-light-blue transition-colors">Home</Link>
            <Link to="/features" className="text-facipay-dark hover:text-facipay-blue py-2 px-3 rounded-md hover:bg-facipay-light-blue transition-colors">Features</Link>
            <Link to="/how-it-works" className="text-facipay-dark hover:text-facipay-blue py-2 px-3 rounded-md hover:bg-facipay-light-blue transition-colors">How It Works</Link>
            <Link to="/support" className="text-facipay-dark hover:text-facipay-blue py-2 px-3 rounded-md hover:bg-facipay-light-blue transition-colors">Support</Link>
            <div className="pt-2 flex space-x-2">
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="gradient-bg flex-1" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
