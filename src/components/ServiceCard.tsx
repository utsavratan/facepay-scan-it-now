
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Phone, CreditCard, Home, Settings, User } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: 'phone' | 'credit-card' | 'home' | 'settings' | 'user';
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  color
}) => {
  const getIcon = () => {
    const iconSize = 32;
    
    switch (icon) {
      case 'phone': return <Phone size={iconSize} className={getIconColorClass()} />;
      case 'credit-card': return <CreditCard size={iconSize} className={getIconColorClass()} />;
      case 'home': return <Home size={iconSize} className={getIconColorClass()} />;
      case 'settings': return <Settings size={iconSize} className={getIconColorClass()} />;
      case 'user': return <User size={iconSize} className={getIconColorClass()} />;
      default: return null;
    }
  };
  
  const getIconColorClass = () => {
    switch (color) {
      case 'blue': return 'text-blue-500';
      case 'purple': return 'text-purple-500';
      case 'green': return 'text-green-500';
      case 'orange': return 'text-orange-500';
      case 'red': return 'text-red-500';
      default: return 'text-facipay-blue';
    }
  };
  
  const getBackgroundColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-blue-100';
      case 'purple': return 'bg-purple-100';
      case 'green': return 'bg-green-100';
      case 'orange': return 'bg-orange-100';
      case 'red': return 'bg-red-100';
      default: return 'bg-facipay-light-blue';
    }
  };
  
  const getButtonColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'purple': return 'bg-purple-500 hover:bg-purple-600 text-white';
      case 'green': return 'bg-green-500 hover:bg-green-600 text-white';
      case 'orange': return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'red': return 'bg-red-500 hover:bg-red-600 text-white';
      default: return 'bg-facipay-blue hover:bg-facipay-blue/90 text-white';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getBackgroundColorClass()} mb-4`}>
          {getIcon()}
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-facipay-gray mb-4">{description}</p>
        
        <Button asChild className={getButtonColorClass()}>
          <Link to={link}>
            Go to {title}
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
