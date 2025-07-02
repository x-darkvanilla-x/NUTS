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
import ScrollToTop from "./components/ScrollToTop";

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <ResponsiveNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mehndi" element={<MehndiServicesPage />} />
            <Route path="/mehndi-gallery" element={<MehndiGallery />} />
            <Route path="/stats" element={<ImpactSection />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/makeup" element={<MakeupServicePage />} />
            <Route path="/makeup-gallery" element={<MakeupGallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;