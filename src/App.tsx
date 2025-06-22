import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import ImageGallery from './ImageGallery'

const Home = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "Priya S.",
      text: "The mehndi designs for my wedding were absolutely stunning! Everyone was impressed with the intricate details.",
      service: "Bridal Mehndi"
    },
    {
      name: "Anita R.",
      text: "I learned so much in just a few classes. The techniques taught here have really improved my mehndi application skills.",
      service: "Mehndi Classes"
    },
    {
      name: "Meera K.",
      text: "My makeup for the engagement ceremony was flawless. It lasted the entire event and photographs beautifully.",
      service: "Engagement Makeup"
    }
  ];

  return (
    <div className="page home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Special Moments</h1>
          <p className="hero-subtitle">Expert Mehndi & Makeup Services for All Occasions</p>
          <div className="cta-buttons">
            <Link to="/mehndi" className="cta-button">Explore Mehndi</Link>
            <Link to="/makeup" className="cta-button secondary">Discover Makeup</Link>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      {/* <section className="home-section">
        <h2 className="section-title">Our Signature Services</h2>
        <div className="services-preview">
          <div className="service-preview-card">
            <div className="service-preview-image mehndi-preview"></div>
            <h3>Artistic Mehndi</h3>
            <p>Traditional, Arabic, and fusion designs for all occasions</p>
            <Link to="/mehndi" className="preview-link">View Services</Link>
          </div>
          <div className="service-preview-card">
            <div className="service-preview-image makeup-preview"></div>
            <h3>Professional Makeup</h3>
            <p>Bridal, engagement, and special event makeup</p>
            <Link to="/makeup" className="preview-link">View Services</Link>
          </div>
          <div className="service-preview-card">
            <div className="service-preview-image classes-preview"></div>
            <h3>Mehndi Classes</h3>
            <p>Learn from experts with personalized guidance</p>
            <Link to="/mehndi" className="preview-link">Enroll Now</Link>
          </div>
        </div>
      </section> */}

      {/* Gallery Preview */}
      {/* <section className="home-section gallery-preview-section">
        <h2 className="section-title">Our Work</h2>
        <div className="gallery-preview">
          <div className="gallery-preview-item">
            <img src="/mehndi-images/IMG_0009.JPG" alt="Mehndi design preview" />
          </div>
          <div className="gallery-preview-item">
            <img src="/makeup-images/ABP_7130.jpg" alt="Makeup preview" />
          </div>
          <div className="gallery-preview-item">
            <img src="/mehndi-images/IMG_1836.JPG" alt="Mehndi design preview" />
          </div>
          <div className="gallery-preview-item">
            <img src="/makeup-images/ABP_8211.jpg" alt="Makeup preview" />
          </div>
        </div>
        <div className="view-more-container">
          <Link to="/mehndi-designs" className="view-more-link">View More Designs</Link>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="home-section testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-service">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="home-section cta-section">
        <div className="cta-content">
          <h2>Ready to Book Your Session?</h2>
          <p>Contact us today to schedule your appointment or class</p>
          <div className="cta-buttons">
            <Link to="/mehndi" className="cta-button">Book Now</Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}

const Mehndi = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    designStyle: 'traditional',
    date: '',
    message: ''
  })

  const [learningData, setLearningData] = useState({
    name: '',
    email: '',
    skillLevel: 'beginner',
    preferredTime: '',
    message: ''
  })

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', bookingData)
  }

  const handleLearningSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Learning submitted:', learningData)
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
  }

  

  const handleLearningChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setLearningData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="page mehndi">
      <h2>Mehndi Services</h2>
      
      <div className="designs-grid">
        <div className="design-card">
          <h3>Traditional Indian</h3>
          <p>Intricate peacock and floral patterns</p>
        </div>
        <div className="design-card">
          <h3>Arabic</h3>
          <p>Flowing patterns with bold outlines</p>
        </div>
        <div className="design-card">
          <h3>Modern Fusion</h3>
          <p>Contemporary designs with traditional elements</p>
        </div>
        
      </div>

      <div className="forms-container">
        <div className="form-section">
          <h3>Book Mehndi Session</h3>
          <form onSubmit={handleBookingSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="booking-name">Full Name</label>
              <input
                type="text"
                id="booking-name"
                name="name"
                value={bookingData.name}
                onChange={handleBookingChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="booking-email">Email</label>
              <input
                type="email"
                id="booking-email"
                name="email"
                value={bookingData.email}
                onChange={handleBookingChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="designStyle">Design Style</label>
              <select
                id="designStyle"
                name="designStyle"
                value={bookingData.designStyle}
                onChange={handleBookingChange}
              >
                <option value="traditional">Traditional</option>
                <option value="arabic">Arabic</option>
                <option value="modern">Modern Fusion</option>
                
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookingData.date}
                onChange={handleBookingChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="booking-message">Message (Optional)</label>
              <textarea
                id="booking-message"
                name="message"
                value={bookingData.message}
                onChange={handleBookingChange}
              />
            </div>
            <button type="submit" className="submit-button">Book Now</button>
          </form>
        </div>

        <div className="form-section">
          <h3>Learn Mehndi Art</h3>
          <form onSubmit={handleLearningSubmit} className="learning-form">
            <div className="form-group">
              <label htmlFor="learning-name">Full Name</label>
              <input
                type="text"
                id="learning-name"
                name="name"
                value={learningData.name}
                onChange={handleLearningChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="learning-email">Email</label>
              <input
                type="email"
                id="learning-email"
                name="email"
                value={learningData.email}
                onChange={handleLearningChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="skillLevel">Skill Level</label>
              <select
                id="skillLevel"
                name="skillLevel"
                value={learningData.skillLevel}
                onChange={handleLearningChange}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time</label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={learningData.preferredTime}
                onChange={handleLearningChange}
                placeholder="e.g. Weekends, Evenings"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="learning-message">Message (Optional)</label>
              <textarea
                id="learning-message"
                name="message"
                value={learningData.message}
                onChange={handleLearningChange}
              />
            </div>
            <button type="submit" className="submit-button secondary">Enroll for Classes</button>
          </form>
        </div>
      </div>
    </div>
  )
}



const Stats = () => {
  const stats = {
    designs: 1000,
    clients: 500
  }

  return (
    <div className="page stats">
      <h2>Our Impact</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.designs}+</h3>
          <p>Unique Designs Created</p>
        </div>
        <div className="stat-card">
          <h3>{stats.clients}+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

const AboutUs = () => (
  <div className="page about-us">
    <h2>About Our Mehndi Studio</h2>
    <div className="about-section">
      <div className="mission-vision">
        <h3>Our Mission</h3>
        <p>To preserve and promote the ancient art of mehndi while innovating with contemporary designs that reflect modern aesthetics.</p>
        
        <h3>Our Vision</h3>
        <p>To become the most trusted name in mehndi artistry, known for our creativity, precision, and customer satisfaction.</p>
      </div>

      <div className="values-section">
        <h3>Our Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <h4>Innovation</h4>
            <p>Constantly evolving our methods and technology</p>
          </div>
          <div className="value-item">
            <h4>Excellence</h4>
            <p>Maintaining the highest standards in education</p>
          </div>
          <div className="value-item">
            <h4>Accessibility</h4>
            <p>Making quality education available to everyone</p>
          </div>
        </div>
      </div>

      <div className="social-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.instagram.com/Nutan_Ramesh" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <span className="social-icon">📷</span> @Nutan_Ramesh
          </a>
        </div>
      </div>
    </div>
  </div>
)

// Separate component to use the useLocation hook
const NavigationWithRouter = () => {
  const location = useLocation();
  return <Navigation pathname={location.pathname} />
}

interface NavigationProps {
  pathname: string;
}

const Navigation = ({ pathname }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="logo">Nutan's Makeup and Mehndi Studio</Link>
        
        <div className="mobile-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          
          <div className="dropdown">
            <button 
              className={`dropdown-toggle ${pathname.includes('/mehndi') ? 'active' : ''}`}
              onClick={() => toggleDropdown('mehndi')}
            >
              Mehndi <span className="dropdown-icon">▼</span>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'mehndi' ? 'show' : ''}`}>
              <Link to="/mehndi">Services</Link>
              <Link to="/mehndi-designs">Design Gallery</Link>
            </div>
          </div>

          <div className="dropdown">
            <button 
              className={`dropdown-toggle ${pathname.includes('/makeup') ? 'active' : ''}`}
              onClick={() => toggleDropdown('makeup')}
            >
              Makeup <span className="dropdown-icon">▼</span>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'makeup' ? 'show' : ''}`}>
              <Link to="/makeup">Services</Link>
              <Link to="/makeup-gallery">Gallery</Link>
            </div>
          </div>
          
          <Link to="/stats" className={pathname === '/stats' ? 'active' : ''}>Stats</Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
        </div>
      </div>
    </nav>
  );
}

// This component was duplicated - removing the incorrect version

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationWithRouter />    
        {/* <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mehndi" element={<Mehndi />} />
            <Route path="/mehndi-designs" element={<ImageGallery serviceType="mehndi" />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/makeup" element={<Makeup />} />
            <Route path="/makeup-gallery" element={<ImageGallery serviceType="makeup" />} />
          </Routes>
        </main> */}
      </div>
    </Router>
  )
}

const Makeup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'party',
    date: '',
    message: ''
  });
  
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="page makeup">
      <h2>Makeup Services</h2>
      <div className="services-grid">
        

        <div className="service-card" onClick={() => setSelectedService('baby')}>
          <div className="service-image">
            <img src="/baby-shower.svg" alt="Baby Shower" />
          </div>
          <h3>Baby Shower</h3>
          <p>Soft and elegant looks</p>
        </div>
        <div className="service-card" onClick={() => setSelectedService('sider')}>
          <div className="service-image">
            <img src="/sider.svg" alt="Sider" />
          </div>
          <h3>Sider</h3>
          <p>Specialized makeup for sider occasions</p>
        </div>
        <div className="service-card" onClick={() => setSelectedService('engagement')}>
          <div className="service-image">
            <img src="/engagement.svg" alt="Engagement" />
          </div>
          <h3>Engagement Makeup</h3>
          <p>Perfect looks for your special day</p>
        </div>
        <div className="service-card" onClick={() => setSelectedService('bridal')}>
          <div className="service-image">
            <img src="/bridal-makeup.svg" alt="Bridal Makeup" />
          </div>
          <h3>Bridal Makeup</h3>
          <p>Stunning looks for your wedding day</p>
        </div>
      </div>
      
      {selectedService && <ImageGallery serviceType={selectedService} />}
      
      <form onSubmit={handleSubmit} className="makeup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
          >
            
            <option value="party">Model shoot</option>
            <option value="baby">Baby Shower</option>
            <option value="sider">Sider</option>
            <option value="engagement">Engagement Makeup</option>
            <option value="bridal">Bridal Makeup</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
};

export default App
