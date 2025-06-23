import { useState } from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

const CallToActionSection = () => {
  const [, setIsHovered] = useState(false);

  const handleBookNow = () => {
    // You can replace this with your actual booking logic
    console.log('Book Now clicked');
    // Example: window.open('https://your-booking-link.com', '_blank');
  };

  return (
    <div className="relative py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="../makeup-images/ABP_8219.jpg"
          alt="Beautiful mehndi design on hands with traditional jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-98">
        {/* Main Heading */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Book Your Session?
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed font-light">
          Contact us today to schedule your appointment or class
        </p>

        {/* Call-to-Action Button */}
        <div className="mb-12">
          <button
            onClick={handleBookNow}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300"
          >
            Book Now
          </button>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-white group cursor-pointer">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-white/90 text-sm">+91 98765 43210</p>
          </div>

          <div className="flex flex-col items-center text-white group cursor-pointer">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Book Online</h3>
            <p className="text-white/90 text-sm">24/7 Online Booking</p>
          </div>

          <div className="flex flex-col items-center text-white group cursor-pointer">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-white/90 text-sm">Quick Response</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-white/80 text-sm">
          <p className="mb-2">Available 7 days a week | Home service available</p>
          <p>Professional mehndi artist with 10+ years experience</p>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;