
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, Smartphone, Palette, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, user-friendly websites that reflect your brand and engage your audience.',
      icon: <Palette className="w-10 h-10 text-brand-600" />,
      features: [
        'Custom design tailored to your brand',
        'User experience optimization',
        'Mobile-responsive layouts',
        'Interactive elements and animations',
      ],
    },
    {
      title: 'Web Development',
      description: 'High-performance websites built with modern technologies for optimal functionality.',
      icon: <Code className="w-10 h-10 text-brand-600" />,
      features: [
        'Clean, efficient code',
        'Content management systems',
        'E-commerce integration',
        'Third-party API integration',
      ],
    },
    {
      title: 'Responsive Design',
      description: 'Websites that provide an optimal viewing experience across all devices and screen sizes.',
      icon: <Smartphone className="w-10 h-10 text-brand-600" />,
      features: [
        'Fluid grid layouts',
        'Flexible images and media',
        'Device-specific optimizations',
        'Cross-browser compatibility',
      ],
    },
    {
      title: 'SEO Optimization',
      description: "Strategic optimizations to improve your website's visibility in search engine results.",
      icon: <Search className="w-10 h-10 text-brand-600" />,
      features: [
        'Keyword research and implementation',
        'On-page SEO optimization',
        'Technical SEO improvements',
        'Performance optimization',
      ],
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your website for better user experience and search engine rankings.',
      icon: <Zap className="w-10 h-10 text-brand-600" />,
      features: [
        'Image and asset optimization',
        'Code minification',
        'Caching implementation',
        'Server response time improvements',
      ],
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support to keep your website secure, updated, and running smoothly.',
      icon: <Globe className="w-10 h-10 text-brand-600" />,
      features: [
        'Regular updates and backups',
        'Security monitoring',
        'Content updates',
        'Performance monitoring',
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="Our Services"
        subtitle="Comprehensive web solutions to boost your online presence"
        ctaText="Get in touch"
        ctaLink="/contact"
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-center text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-center text-gray-500">{service.description}</p>
                  
                  <div className="mt-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="flex-shrink-0 inline-flex items-center justify-center h-5 w-5 rounded-full bg-brand-100 text-brand-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="ml-3 text-sm text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Process
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              How we work to deliver exceptional results
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="relative flex-1 mb-12 md:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-brand-600 rounded-full">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
                  <p className="mt-2 text-gray-500">
                    We learn about your business, goals, and target audience to understand your needs.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-12 bottom-0 left-6 w-0.5 bg-brand-100"></div>
            </div>

            <div className="relative flex-1 mb-12 md:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-brand-600 rounded-full">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Strategy</h3>
                  <p className="mt-2 text-gray-500">
                    We develop a customized approach based on your unique requirements and industry best practices.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-12 bottom-0 left-6 w-0.5 bg-brand-100"></div>
            </div>

            <div className="relative flex-1 mb-12 md:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-brand-600 rounded-full">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Implementation</h3>
                  <p className="mt-2 text-gray-500">
                    Our team of experts brings your project to life with attention to detail and technical excellence.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-12 bottom-0 left-6 w-0.5 bg-brand-100"></div>
            </div>

            <div className="relative flex-1">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-brand-600 rounded-full">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Refinement</h3>
                  <p className="mt-2 text-gray-500">
                    We fine-tune your project based on feedback and ensure everything meets your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to start your project?
            </h2>
            <p className="mt-4 text-xl text-brand-100">
              Contact us today for a free consultation.
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact" className="flex items-center">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
