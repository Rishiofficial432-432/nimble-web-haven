
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
      
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <MapPin className="h-6 w-6 text-brand-600" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Office Address</p>
          <p className="mt-1 text-sm text-gray-500">
            123 Web Street<br />
            Digital City, WS 10101
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Mail className="h-6 w-6 text-brand-600" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Email</p>
          <p className="mt-1 text-sm text-gray-500">hello@webflow.example</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Phone className="h-6 w-6 text-brand-600" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Phone</p>
          <p className="mt-1 text-sm text-gray-500">+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Clock className="h-6 w-6 text-brand-600" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Business Hours</p>
          <p className="mt-1 text-sm text-gray-500">
            Monday - Friday: 9am - 5pm<br />
            Saturday: Closed<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
