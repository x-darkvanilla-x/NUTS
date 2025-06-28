import { useNavigate } from "react-router-dom";

const ServiceCard = ({ 
  image, 
  title, 
  description, 
  buttonText, 
  buttonAction 
}: {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}) => {

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <button 
          onClick={buttonAction}
          className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-amber-800 hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          {buttonText}
        </button>
      </div>
      
      {/* Decorative border on hover */}
      <div className="absolute inset-0 border-2 border-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

const MehndiServices = () => {
  const navigate = useNavigate();


  const services = [
    {
      image: "../mehndi-images/IMG_1837.JPG",
      title: "Artistic Mehndi",
      description: "Traditional, Arabic, and fusion designs for all occasions",
      buttonText: "View Services",
      buttonAction: () => {navigate("/mehndi")}
    },
    {
      image: "../makeup-images/ABP_7169.jpg",
      title: "Professional Makeup",
      description: "Bridal, engagement, and special event makeup",
      buttonText: "View Services",
      buttonAction: () => {navigate("/makeup")}
    },
    {
      image: "../mehndi-images/WhatsApp Image 2025-04-25 at 13.17.57_fcfe7502.jpg",
      title: "Mehndi Classes",
      description: "Learn from experts with personalized guidance",
      buttonText: "Enroll Now",
      buttonAction: () => {navigate("/mehndi")}
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 px-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4" style={{
            fontFamily: "Times New Roman",
          }}>
            Our Signature Services
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MehndiServices;