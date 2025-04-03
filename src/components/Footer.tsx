
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-brand-700">WebFlow</Link>
            <p className="mt-4 text-gray-500 max-w-md">
              Creating beautiful, responsive websites that drive results for your business.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-brand-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-brand-500 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-500 hover:text-brand-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-brand-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-500">
                123 Web Street, Digital City
              </li>
              <li className="text-gray-500">
                hello@webflow.example
              </li>
              <li className="text-gray-500">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} WebFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
