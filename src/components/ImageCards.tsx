import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const MehndiPortfolio = () => {

  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const portfolioImages = [
    {
      id: 1,
      src: "../mehndi-images/IMG_0009.JPG",
      alt: "Intricate bridal mehndi design on hands",
      category: "Bridal Mehndi"
    },
    {
      id: 2,
      src: "../makeup-images/WhatsApp Image 2025-06-23 at 21.55.52_c138067e.jpg",
      alt: "Elegant bride with traditional jewelry and makeup",
      category: "Bridal Makeup"
    },
    {
      id: 3,
      src: "../mehndi-images/IMG_1836.JPG",
      alt: "Detailed Arabic mehndi pattern on palms",
      category: "Arabic Mehndi"
    },
    {
      id: 4,
      src: "../makeup-images/ABP_8211.jpg",
      alt: "Traditional Indian bride in wedding attire",
      category: "Bridal Portfolio"
    }
  ];

  const openModal = (image: { id: number; src: string; alt: string; category: string }, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % portfolioImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(portfolioImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(portfolioImages[prevIndex]);
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{
            fontFamily: "Times New Roman",
          }}>
            Our Work
          </h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal(image, index)}
            >
              <div className="h-full w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-semibold mb-1">{image.category}</p>
                  <p className="text-xs">Click to view</p>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center">
          <button onClick={()=>{navigate("/gallery")}} className="bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-amber-900 hover:shadow-xl transform hover:scale-105 active:scale-95">
            View More Designs
          </button>
        </div> */}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 text-white hover:text-amber-400 transition-colors duration-200"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-amber-400 transition-colors duration-200 p-2"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-amber-400 transition-colors duration-200 p-2"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-full backdrop-blur-sm">
              <p className="text-sm font-semibold">{selectedImage.category}</p>
              <p className="text-xs text-center mt-1">
                {currentIndex + 1} of {portfolioImages.length}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MehndiPortfolio;