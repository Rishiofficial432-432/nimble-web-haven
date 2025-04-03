
import { ArrowRight, Globe, Zap, BarChart3, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const features = [
    {
      title: 'Responsive Design',
      description: 'We create websites that look great on any device, from desktop to mobile.',
      icon: Layout,
    },
    {
      title: 'Performance Optimization',
      description: 'Fast-loading websites that keep your visitors engaged and boost SEO rankings.',
      icon: Zap,
    },
    {
      title: 'Global Reach',
      description: 'Reach customers around the world with websites optimized for international audiences.',
      icon: Globe,
    },
    {
      title: 'Analytics Integration',
      description: 'Track visitor behavior and make data-driven decisions with powerful analytics.',
      icon: BarChart3,
    },
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="Modern Web Design for the Digital Age"
        subtitle="Creating beautiful, responsive websites that drive results for your business."
        ctaText="View our services"
        ctaLink="/services"
      />

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We combine design, technology, and strategy to create exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to transform your online presence?
            </h2>
            <p className="mt-4 text-xl text-brand-100">
              Let's discuss how we can help your business grow.
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

      {/* About Preview Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About WebFlow
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We are a team of passionate designers and developers dedicated to creating beautiful digital experiences. With years of experience in the industry, we understand what it takes to build websites that not only look great but also perform well.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/about" className="flex items-center">
                    Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 h-64 md:h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Team Image</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
