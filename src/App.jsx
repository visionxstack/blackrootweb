import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AgenticAISecurity from './pages/AgenticAISecurity';

import SocialSidebar from './components/SocialSidebar';

function ScrollObserver() {
  const location = useLocation();
  useEffect(() => {
    
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('.reveal-up, .animate-on-scroll, .reveal-3d, .reveal-fade');
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 100);
  }, [location.pathname]);
  return null;
}

function MainLayout() {
  return (
    <div className="site-wrapper">
      <Header />
      <SocialSidebar />
      <Outlet />
      <Footer />
    </div>
  );
}

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollObserver />
        <ScrollToHash />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/agentic-ai" element={<AgenticAISecurity />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
