import { useState } from "react";

export default function MakeupServicePage() {
  const [, setActiveForm] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    designStyle: "",
    preferredDate: "",
    message: "",
  });

  const services = [
    {
      title: "Baby Shower Makeup",
      description: "Soft and elegant looks for the glowing mom-to-be",
      image: "👶",
      features: [
        "Natural, radiant finish",
        "Pastel tones and subtle shimmer",
        "Lightweight and comfortable",
        "Customized for day events",
      ],
    },
    {
      title: "Sider Makeup",
      description: "Specialized glam for sider occasions",
      image: "💃",
      features: [
        "Enhanced eye makeup",
        "Bold lip options",
        "Jewelry-matching tones",
        "Tailored to cultural preferences",
      ],
    },
    {
      title: "Engagement Makeup",
      description: "Perfect glam for your special day",
      image: "💍",
      features: [
        "Flawless base application",
        "Defined yet soft eyes",
        "Photo-ready glow",
        "Lasting coverage",
      ],
    },
    {
      title: "Bridal Makeup",
      description: "Stunning looks for your wedding day",
      image: "👰",
      features: [
        "Luxury bridal finish",
        "Custom skin prep and base",
        "Traditional or modern styles",
        "Long-lasting and sweat-proof",
      ],
    },
  ];
  

  const handleBookingSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(
      `Thank you ${bookingForm.fullName}! Your mehndi session booking request has been submitted. We'll contact you soon at ${bookingForm.email}.`
    );
    setBookingForm({
      fullName: "",
      email: "",
      designStyle: "",
      preferredDate: "",
      message: "",
    });
    setActiveForm(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            style={{
              fontFamily: "Times New Roman",
            }}
          >
            <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              Makeup
            </span>{" "}
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Experience the transformative power of makeup with our skilled artists. From elegant bridal looks to trendy party glam, we craft stunning styles for every special moment.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mt-8 rounded-full"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="text-6xl mb-6 text-center">
                      {service.image}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-6 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-red-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side by Side Forms */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-6 lg:gap-8">
            {/* Booking Form */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  📅 Book Makeup Session
                </h3>
                <p className="text-amber-100 mt-2 text-sm sm:text-base">
                  Schedule your personalized Makeup experience
                </p>
              </div>

              {/* Form Content */}
              <div className="p-4 sm:p-6 max-h-[600px] overflow-y-auto">
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingForm.fullName}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Design Style *
                    </label>
                    <select
                      required
                      value={bookingForm.designStyle}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          designStyle: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 bg-white py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    >
                      <option value="">Select Makeup style</option>
                      <option value="traditional">Model Shoot</option>
                      <option value="arabic">Baby Shower</option>
                      <option value="modern">Sider</option>
                      <option value="modern">Engagement Makeup</option>
                      <option value="modern">Bridal Makeup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Preferred Date
                    </label>
                    <input
                      type="text"
                      value={bookingForm.preferredDate}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          preferredDate: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                      placeholder="e.g., December 25, 2024"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={bookingForm.message}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                      placeholder="Any special requests or questions..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-4 sm:p-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleBookingSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl transition-all transform hover:scale-105 text-sm sm:text-base font-bold shadow-lg hover:shadow-xl"
                >
                  📅 Book My Session
                </button>
              </div>
            </div>


          </div>
        </div>

        {/* Optional: Add some spacing and a separator for mobile */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-10 blur-xl"></div>
    </div>
  );
}
