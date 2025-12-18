// ---------------- TOP LEVEL IMPORTS ONLY ----------------
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Mentors from "./components/Mentors";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ClassroomSection from "./components/ClassroomSection";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import LifeAtStockDaddy from "./components/LifeAtStockDaddy";
import WhyChooseStockDaddy from "./components/WhyChooseStockDaddy";
import CardSlider from "./components/CardSlider";
import ContactPageFrontend from "./components/ContactPageFrontend";
import ServicesPage from "./components/ServicesPage";
// import TestimonialsSection from "./components/TestimonialsSection";

import "./styles/main.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import TestimonialsSection from "./components/TestimonialsSection";
import CertificationsSection from "./components/CertificationsSection";

// ---------------- APP COMPONENT ----------------
export default function App() {
  const location = useLocation();

  // Scroll to section when URL contains #about or #contact
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  }, [location]);

  return (
    <div className="app-root">
      <Header />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              {/* ABOUT SECTION TARGET */}
              <div id="about">
                <About />
              </div>
              <CertificationsSection />
              <ClassroomSection />
              <FeaturesGrid />
              <LifeAtStockDaddy />
              <TestimonialsSection />
              <WhyChooseStockDaddy />
              <CardSlider />

              {/* CONTACT SECTION TARGET */}
              <div id="contact">
                <ContactPageFrontend />
              </div>
            </>
          }
        />

        {/* SERVICES PAGE */}
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/mentors" element={<Mentors />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
