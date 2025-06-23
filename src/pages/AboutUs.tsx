import { useState, useEffect } from "react";
import {
  Eye,
  Target,
  Lightbulb,
  Award,
  Users,
  Instagram,
  ExternalLink,
  Heart,
} from "lucide-react";

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState({});

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving our methods and technology",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in education",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making quality education available to everyone",
      color: "from-red-500 to-pink-500",
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "../mehndi-images/IMG_0009.JPG",
      caption: "Intricate bridal mehndi design ✨ #BridalMehndi #MehndiArt",
      likes: 234,
      comments: 18,
    },
    {
      id: 2,
      image: "../makeup-images/ABP_7130.jpg",
      caption: "Arabic style mehndi patterns 🌸 #ArabicMehndi #HennaDesign",
      likes: 189,
      comments: 12,
    },
    {
      id: 3,
      image: "../mehndi-images/IMG_1836.JPG",
      caption: "Traditional makeup look for engagement 💄 #BridalMakeup",
      likes: 156,
      comments: 9,
    },
    {
      id: 4,
      image: "../makeup-images/ABP_8211.jpg",
      caption: "Perfect mehndi for the perfect day 💕 #MehndiDesign",
      likes: 278,
      comments: 23,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Section 2: Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
              style={{
                fontFamily: "Times New Roman",
              }}
            >
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  id={`value-${index}`}
                  data-animate
                  className={`transform transition-all duration-1000 ${
                    isVisible[`value-${index}` as keyof typeof isVisible]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div
                      className={`bg-gradient-to-r ${value.color} p-4 rounded-full inline-block mb-6`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Instagram Feed */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              {/* <Instagram className="w-8 h-8 text-pink-600 mr-3" /> */}
              <h2
                className="text-4xl md:text-5xl font-bold text-amber-900"
                style={{
                  fontFamily: "Times New Roman",
                }}
              >
                Follow Our Journey
              </h2>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              Stay updated with our latest mehndi designs and makeup looks
            </p>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Instagram Handle */}
          <div className="text-center mb-12">
            <a
              href="https://instagram.com/nutan.ramesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <Instagram className="w-6 h-6 mr-2" />
              @nutan.ramesh
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Instagram-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <div
                key={post.id}
                id={`post-${index}`}
                data-animate
                className={`group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-1000 hover:scale-105 ${
                  isVisible[`post-${index}` as keyof typeof isVisible]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center z-30">
                  <div className="text-white text-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="flex items-center justify-center space-x-4 mb-2">
                      <div className="flex items-center">
                        <Heart className="w-5 h-5 mr-1" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <Instagram className="w-5 h-5 mr-1" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-xs px-2 line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to see more of our work?</p>
            <a
              href="https://instagram.com/nutan.ramesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-pink-500 text-pink-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white transform hover:scale-105"
            >
              View Full Profile
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Mission and Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              id="mission"
              data-animate
              className={`transform transistion-all duration-1000 ${
                isVisible[`mission` as keyof typeof isVisible]
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-full mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-amber-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To preserve and promote the ancient art of mehndi while
                  innovating with contemporary designs that reflect modern
                  aesthetics.
                </p>
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
              </div>
            </div>

            <div
              id="vision"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible[`vision` as keyof typeof isVisible]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-amber-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the most trusted name in mehndi artistry, known for
                  our creativity, precision, and customer satisfaction.
                </p>
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;