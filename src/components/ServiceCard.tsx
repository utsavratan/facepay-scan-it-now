
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
    const props = { size: 32, className: `text-${color}-500` };
    
    switch (icon) {
      case 'phone': return <Phone {...props} />;
      case 'credit-card': return <CreditCard {...props} />;
      case 'home': return <Home {...props} />;
      case 'settings': return <Settings {...props} />;
      case 'user': return <User {...props} />;
      default: return null;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-${color}-100 mb-4`}>
          {getIcon()}
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-facipay-gray mb-4">{description}</p>
        
        <Button asChild className={`bg-${color}-500 hover:bg-${color}-600 text-white`}>
          <Link to={link}>
            Go to {title}
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
