// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import ClassroomSection from "./components/ClassroomSection";
// import FeaturesGrid from "./components/FeaturesGrid";
// import Footer from "./components/Footer";
// import "./styles/main.css";
// import LifeAtStockDaddy from "./components/LifeAtStockDaddy";
// import WhyChooseStockDaddy from "./components/WhyChooseStockDaddy";
// import CardSlider from "./components/CardSlider";
// import ContactPageFrontend from "./components/ContactPageFrontend";
// import ServicesPage from "./components/ServicesPage";

// export default function App() {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="app-root">
//       <Header />

//       <Routes>
//         {/* HOME PAGE */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <ClassroomSection />
//               <FeaturesGrid />
//               <LifeAtStockDaddy />
//               <WhyChooseStockDaddy />
//               <CardSlider />
//               <ContactPageFrontend />
//             </>
//           }
//         />

//         {/* SERVICES PAGE */}
//         <Route path="/services" element={<ServicesPage />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// ---------------- TOP LEVEL IMPORTS ONLY ----------------
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

import "./styles/main.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

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

              <ClassroomSection />
              <FeaturesGrid />
              <LifeAtStockDaddy />
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
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
