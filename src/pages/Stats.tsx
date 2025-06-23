import { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    const startCount = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

export default function ImpactSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
              className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
              style={{
                fontFamily: "Times New Roman",
              }}
            >
              Our <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Impact</span>
            </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Unique Designs */}
          <div className="text-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                  <CountUp end={1000} suffix="+" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                  Unique Designs
                </h3>
                <h4 className="text-xl md:text-2xl font-medium text-gray-600">
                  Created
                </h4>
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Happy Clients */}
          <div className="text-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                  <CountUp end={500} suffix="+" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                  Happy Clients
                </h3>
                <div className="flex justify-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-amber-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-orange-400 rounded-full opacity-20"></div>
      </div>
    </div>
  );
}