import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MehndiHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image */}
      <img
        src="../makeup-images/ABP_7786.jpg"
        alt="Mehndi and Makeup Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-white rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1
          className="text-6xl font-bold text-white mb-6 leading-tight font"
          style={{
            fontFamily: "Times New Roman",
          }}
        >
          Transform Your Special Moments
        </h1>

        <p className="text-2xl sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Expert Mehndi & Makeup Services for All Occasions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={() => {
              navigate("/mehndi-gallery");
            }}
            className="group w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="relative">
              Explore Mehndi
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </span>
          </button>
          <button
            onClick={() => {
              navigate("/makeup-gallery");
            }}
            className="group w-full sm:w-auto border-2 bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="relative">Discover Makeup</span>
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-orange-300/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1500"></div>
      </div>
    </div>
  );
}