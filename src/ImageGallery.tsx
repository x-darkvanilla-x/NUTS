import React, { useState } from 'react';
import './App.css';

interface ImageGalleryProps {
  serviceType: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ serviceType }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = serviceType === 'bridal' 
    ? [
        '/images/ABP_7786.jpg',
        '/images/ABP_8211.jpg',
        '/images/ABP_8235.jpg'
      ]
    : serviceType === 'sider'
    ? [
        '/images/IMG_0420.JPG',
        '/images/IMG_0423.JPG',
        '/images/IMG_0425.JPG'
      ]
    : serviceType === 'engagement'
    ? [
        '/images/e1.jpg',
        '/images/e2.jpg',
        '/images/e3.jpg'
      ]
    : serviceType === 'baby'
    ? [
        '/images/IMG_1204.jpg',
        '/images/IMG_1238.jpg',
        '/images/b1.jpg'
      ]
    : serviceType === 'mehndi'
    ? [
        '/mehndi-images/IMG_0009.JPG',
        '/mehndi-images/IMG_0440.JPG',
        '/mehndi-images/IMG_1801.JPG',
        '/mehndi-images/IMG_1836.JPG',
        '/mehndi-images/IMG_1837.JPG',
        '/mehndi-images/IMG_1909.JPG',
        '/mehndi-images/WhatsApp Image 2025-04-25 at 13.14.39_8d6b02f9.jpg',
        '/mehndi-images/WhatsApp Image 2025-04-25 at 13.16.41_95d45acf.jpg',
        '/mehndi-images/WhatsApp Image 2025-04-25 at 13.17.57_fcfe7502.jpg',
        '/mehndi-images/WhatsApp Image 2025-04-25 at 13.19.18_3db14b1a.jpg',
        '/mehndi-images/WhatsApp Image 2025-04-25 at 13.23.30_16bb4fba.jpg'
      ]
    : serviceType === 'makeup'
    ? [
        '/makeup-images/ABP_7130.jpg',
        '/makeup-images/ABP_7169.jpg',
        '/makeup-images/ABP_7786.jpg',
        '/makeup-images/ABP_8211.jpg',
        '/makeup-images/ABP_8219.jpg',
        '/makeup-images/IMG_0426.JPG',
        '/makeup-images/IMG_0563.JPG',
        '/makeup-images/IMG_0564.JPG',
        '/makeup-images/WhatsApp Image 2025-04-25 at 21.42.36_5520ed80.jpg',
        '/makeup-images/WhatsApp Image 2025-04-25 at 21.47.51_d6142c56.jpg',
        '/makeup-images/WhatsApp Image 2025-04-25 at 21.48.14_15295bf7.jpg',
        '/makeup-images/WhatsApp Image 2025-04-25 at 21.49.05_a96331a3.jpg',
        '/makeup-images/WhatsApp Image 2025-04-25 at 21.50.39_36199a32.jpg',
        '/makeup-images/WhatsApp Image 2025-04-25 at 21.55.32_51863451.jpg'
      ]
    : [];

  return (
    <div className="service-details">
      <h3>{serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} {serviceType === 'mehndi' ? 'Designs' : 'Makeup'} Gallery</h3>
      <div className="service-gallery">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${serviceType} ${serviceType === 'mehndi' ? 'design' : 'makeup'} ${index + 1}`} 
            className="gallery-image"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <p>Click on any image to view larger version</p>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;