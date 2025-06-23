import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveNavbar from "./components/NavBar";
import MehndiHeroSection from "./components/HeroSection";
import MehndiServices from "./components/ServiceCards";
import MehndiPortfolio from "./components/ImageCards";
import ClientTestimonials from "./components/TestimonialCard";
import CallToActionSection from "./components/CallToActionSection";
import AboutUsPage from "./pages/AboutUs";
import ImpactSection from "./pages/Stats";
import MehndiGallery from "./pages/MehndiGallery";
import MakeupGallery from "./pages/MakeupGallery";
import MehndiServicesPage from "./pages/MehndiServices";
import MakeupServicePage from "./pages/MakeupServices";

const Home = () => {
  return (
    <div>
      <MehndiHeroSection />

      <MehndiServices />

      <MehndiPortfolio />

      <ClientTestimonials />

      <CallToActionSection />
    </div>
  );
};

// Separate component to use the useLocation hook
// const NavigationWithRouter = () => {
//   const location = useLocation();
//   return <Navigation pathname={location.pathname} />
// }

// interface NavigationProps {
//   pathname: string;
// }

// const Navigation = ({ pathname }: NavigationProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   return (
//     <nav className="main-nav">
//       <div className="nav-container">
//         <Link to="/" className="logo">Nutan's Makeup and Mehndi Studio</Link>

//         <div className="mobile-toggle" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <div className={`nav-links ${isOpen ? 'active' : ''}`}>
//           <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>

//           <div className="dropdown">
//             <button
//               className={`dropdown-toggle ${pathname.includes('/mehndi') ? 'active' : ''}`}
//               onClick={() => toggleDropdown('mehndi')}
//             >
//               Mehndi <span className="dropdown-icon">▼</span>
//             </button>
//             <div className={`dropdown-menu ${activeDropdown === 'mehndi' ? 'show' : ''}`}>
//               <Link to="/mehndi">Services</Link>
//               <Link to="/mehndi-designs">Design Gallery</Link>
//             </div>
//           </div>

//           <div className="dropdown">
//             <button
//               className={`dropdown-toggle ${pathname.includes('/makeup') ? 'active' : ''}`}
//               onClick={() => toggleDropdown('makeup')}
//             >
//               Makeup <span className="dropdown-icon">▼</span>
//             </button>
//             <div className={`dropdown-menu ${activeDropdown === 'makeup' ? 'show' : ''}`}>
//               <Link to="/makeup">Services</Link>
//               <Link to="/makeup-gallery">Gallery</Link>
//             </div>
//           </div>

//           <Link to="/stats" className={pathname === '/stats' ? 'active' : ''}>Stats</Link>
//           <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// This component was duplicated - removing the incorrect version

function App() {
  return (
    <Router>
      <div>
        <ResponsiveNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mehndi" element={<MehndiServicesPage />} />
            <Route
              path="/mehndi-gallery"
              element={<MehndiGallery />}
            />
            <Route path="/stats" element={<ImpactSection />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/makeup" element={<MakeupServicePage />} />
            <Route
              path="/makeup-gallery"
              element={<MakeupGallery />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;