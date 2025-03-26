import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServicePage from './pages/services/ServicePage';
import NetworkService from './pages/services/NetworkService';
import ComputerSetupService from './pages/services/ComputerSetupService';
import PenetrationTestingService from './pages/services/PenetrationTestingService';
import VPNService from './pages/services/VPNService';
import ComplianceService from './pages/services/ComplianceService';
import StartupBoostplanService from './pages/services/StartupBoostplanService';
import Industries from './pages/Industries';
import IndustryPage from './pages/industries/IndustryPage';
import Blog from './pages/Blog';
import BlogPost from './pages/blog/BlogPost';
import BlogCategory from './pages/blog/BlogCategory';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-brand-dark font-opensans flex flex-col transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServicePage />} />
              <Route path="/services/network" element={<NetworkService />} />
              <Route path="/services/setup" element={<ComputerSetupService />} />
              <Route path="/services/testing" element={<PenetrationTestingService />} />
              <Route path="/services/vpn" element={<VPNService />} />
              <Route path="/services/compliance" element={<ComplianceService />} />
              <Route path="/services/startup" element={<StartupBoostplanService />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:industryId" element={<IndustryPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/post/:postId" element={<BlogPost />} />
              <Route path="/blog/category/:categoryId" element={<BlogCategory />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;