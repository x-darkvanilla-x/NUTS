import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }: { testimonial: { text: string; name: string; service: string; }; index: number; }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between"
      style={{
        animationDelay: `${index * 200}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Quote Icon */}
      <div className="flex justify-start mb-6">
        <div className="bg-amber-100 p-3 rounded-full">
          <Quote className="text-amber-700 w-6 h-6" />
        </div>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-8 flex-grow">
        "{testimonial.text}"
      </blockquote>

      {/* Client Info */}
      <div className="border-t border-gray-100 pt-6">
        <h4 className="font-bold text-amber-900 text-xl mb-2">
          {testimonial.name}
        </h4>
        <p className="text-gray-600 font-medium">
          {testimonial.service}
        </p>
      </div>
    </div>
  );
};

const ClientTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "The mehndi designs for my wedding were absolutely stunning! Everyone was impressed with the intricate details.",
      name: "Priya S.",
      service: "Bridal Mehndi"
    },
    {
      id: 2,
      text: "I learned so much in just a few classes. The techniques taught here have really improved my mehndi application skills.",
      name: "Anita R.",
      service: "Mehndi Classes"
    },
    {
      id: 3,
      text: "My makeup for the engagement ceremony was flawless. It lasted the entire event and photographed beautifully.",
      name: "Meera K.",
      service: "Engagement Makeup"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 px-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{
            fontFamily: "Times New Roman",
          }}>
            What Our Clients Say
          </h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have experienced our exceptional mehndi and makeup services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-amber-800 hover:shadow-xl transform hover:scale-105 active:scale-95">
              Book Your Service
            </button>
            <button className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-amber-700 hover:text-white hover:shadow-xl transform hover:scale-105 active:scale-95">
              View All Reviews
            </button>
          </div>
        </div> */}

        {/* Decorative Elements */}
        <div className="relative mt-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
          </div>
          <div className="relative text-center">
            <p className="text-amber-800 font-semibold text-lg">
              ⭐⭐⭐⭐⭐
            </p>
            <p className="text-gray-600 mt-2">
              Rated 5 stars by over 200+ happy clients
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .bg-amber-25 {
          background-color: #fefcf3;
        }

        .bg-orange-25 {
          background-color: #fef7ed;
        }
      `}</style>
    </div>
  );
};

export default ClientTestimonials;