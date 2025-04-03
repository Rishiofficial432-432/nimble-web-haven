
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project"
        ctaText="View our services"
        ctaLink="/services"
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Let's Start a Conversation
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="mt-12">
                <ContactForm />
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <ContactInfo />
              
              <div className="mt-8 h-64 md:h-96 bg-gray-200 rounded-lg">
                {/* Map placeholder */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  Map Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: 'How long does it take to build a website?',
                answer: 'The timeline varies depending on the complexity of the project. A simple website might take 2-3 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your needs during our consultation.'
              },
              {
                question: 'Do you offer website maintenance services?',
                answer: 'Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. We can discuss these options based on your needs.'
              },
              {
                question: 'Can you help with content creation?',
                answer: 'Absolutely! We offer content creation services including copywriting, photography, and graphic design to enhance your website.'
              },
              {
                question: 'Do you work with clients outside your location?',
                answer: 'Yes, we work with clients worldwide. We use video conferencing and project management tools to maintain clear communication regardless of location.'
              }
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-gray-500">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
