
import { Users, Award, Clock, Heart } from 'lucide-react';
import Hero from '@/components/Hero';

const About = () => {
  const values = [
    {
      title: 'Client-Focused',
      description: 'Your success is our success. We listen to your needs and deliver solutions that align with your goals.',
      icon: <Users className="w-6 h-6 text-brand-600" />,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design to development to customer service.',
      icon: <Award className="w-6 h-6 text-brand-600" />,
    },
    {
      title: 'Timeliness',
      description: 'We respect your time and deliver projects on schedule without compromising quality.',
      icon: <Clock className="w-6 h-6 text-brand-600" />,
    },
    {
      title: 'Passion',
      description: "We're passionate about web design and bring enthusiasm and creativity to every project.",
      icon: <Heart className="w-6 h-6 text-brand-600" />,
    },
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="About Us"
        subtitle="Get to know our team and our story"
        ctaText="Contact us"
        ctaLink="/contact"
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                WebFlow was founded in 2015 with a simple mission: to help businesses succeed online. What started as a small team of three has now grown into a diverse group of designers, developers, and digital strategists.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Over the years, we've worked with clients across various industries, from startups to established enterprises. Each project has added to our expertise and strengthened our commitment to delivering exceptional digital experiences.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Today, we continue to evolve and stay at the forefront of web technologies, always with our clients' goals at the center of everything we do.
              </p>
            </div>
            <div className="order-1 lg:order-2 bg-gray-100 h-64 md:h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Company History Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white text-center"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-brand-100">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-base text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg overflow-hidden shadow">
                <div className="bg-gray-100 h-64 flex items-center justify-center">
                  <p className="text-gray-400">Team Member Photo</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Team Member {member}</h3>
                  <p className="text-brand-600">Position Title</p>
                  <p className="mt-3 text-base text-gray-500">
                    Brief description about the team member and their experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
