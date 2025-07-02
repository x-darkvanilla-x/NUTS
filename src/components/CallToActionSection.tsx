import { useState } from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

const CallToActionSection = () => {
  const [, setIsHovered] = useState(false);

  const handleBookNow = () => {
    // You can replace this with your actual booking logic
    window.open(`https://wa.me/+918806484212`, '_blank');
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
            className="text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300 bg-green-600 hover:bg-green-700"
          >
            <div className='flex gap-2 items-center justify-center'>
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Whatsapp
            </div>
          </button>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-white group cursor-pointer">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-white/90 text-sm">+91 88064 84212</p>
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