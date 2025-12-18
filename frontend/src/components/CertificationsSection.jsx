// import React from "react";

// export default function CertificationsSection() {
//   const certificates = [
//     { title: "Stock Market Basics Certification" },
//     { title: "Advanced Trading Program" },
//     { title: "Forex Trading Bootcamp" },
//     { title: "Technical Analysis Mastery" },
//     { title: "Risk Management Excellence" },
//     { title: "Live Market Training Program" },
//   ];

//   return (
//     <>
//       <style>{`
//         .cert-section {
//           padding: 30px 20px;
//           background: #ffffff;
//           text-align: center;
//         }

//         .cert-section h2 {
//           font-size: 40px;
//           font-weight: 800;
//           margin-bottom: 10px;
//         }

//         .cert-section .subtitle {
//           color: #555;
//           max-width: 650px;
//           margin: 0 auto 40px;
//           font-size: 1rem;
//         }

//         .cert-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 24px;
//           max-width: 1100px;
//           margin: auto;
//         }

//         .cert-card {
//           border-radius: 14px;
//           overflow: hidden;
//           background: #f9fafb;
//           box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
//           transition: transform 0.3s ease;
//         }

//         .cert-card:hover {
//           transform: translateY(-6px);
//         }

//         .cert-card img {
//           width: 100%;
//           height: 160px;
//           object-fit: cover;
//         }

//         .cert-card p {
//           padding: 14px;
//           font-size: 0.9rem;
//           font-weight: 500;
//           color: #333;
//         }

//         @media (max-width: 600px) {
//           .cert-section {
//             padding: 60px 16px;
//           }

//           .cert-card img {
//             height: 140px;
//           }
//         }
//       `}</style>

//       <section className="cert-section">
//         <h2>Certifications & Achievements 🏆</h2>
//         <p className="subtitle">
//           Recognitions and certifications earned by our students through
//           dedication and consistent learning
//         </p>

//         <div className="cert-grid">
//           {certificates.map((item, index) => (
//             <div className="cert-card" key={index}>
//               <img
//                 src={`https://picsum.photos/400/300?random=${index + 1}`}
//                 alt="Certificate"
//               />
//               <p>{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// import React, { useState } from "react";

// import c1 from "../assets/certificates/c1.jpeg";
// import c2 from "../assets/certificates/c2.jpeg";
// import c3 from "../assets/certificates/c3.jpeg";
// import c4 from "../assets/certificates/c4.jpeg";
// import c5 from "../assets/certificates/c5.jpeg";
// import c6 from "../assets/certificates/c6.jpeg";
// import p1 from "../assets/certificates/p1.jpeg";
// import p2 from "../assets/certificates/p2.jpeg";
// import p3 from "../assets/certificates/p3.jpeg";
// import p4 from "../assets/certificates/p4.jpeg";
// import p5 from "../assets/certificates/p5.jpeg";
// import p6 from "../assets/certificates/p6.jpeg";

// export default function CertificationsSection() {
//   const certificates = [c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5, p6];

//   const [index, setIndex] = useState(0);
//   const [open, setOpen] = useState(false);

//   const next = () => setIndex((prev) => (prev + 1) % certificates.length);
//   const prev = () =>
//     setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

//   return (
//     <>
//       <style>{`
//         .cert-slider {
//           padding: 60px 20px;
//           background: #fff;
//           display: flex;
//           justify-content: center;
//         }

//         .slider-box {
//           position: relative;
//           width: 70%;
//           max-width: 800px;
//         }

//         .slider-box img {
//           width: 100%;
//           height: 420px;
//           object-fit: contain;
//           border-radius: 16px;
//           box-shadow: 0 18px 40px rgba(0,0,0,0.15);
//           cursor: pointer;
//           transition: transform 0.3s ease;
//         }

//         .slider-box img:hover {
//           transform: scale(1.02);
//         }

//         .nav-btn {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background: rgba(0,0,0,0.6);
//           color: #fff;
//           border: none;
//           font-size: 22px;
//           padding: 10px 14px;
//           cursor: pointer;
//           border-radius: 50%;
//         }

//         .nav-btn.left { left: -20px; }
//         .nav-btn.right { right: -20px; }

//         /* MODAL */
//         .modal {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.85);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 999;
//         }

//         .modal img {
//           width: 90%;
//           max-width: 900px;
//           max-height: 90vh;
//           object-fit: contain;
//           border-radius: 12px;
//         }

//         .close {
//           position: absolute;
//           top: 20px;
//           right: 25px;
//           font-size: 32px;
//           color: #fff;
//           cursor: pointer;
//         }

//         /* MOBILE */
//         @media (max-width: 768px) {
//           .slider-box {
//             width: 100%;
//           }

//           .slider-box img {
//             height: 260px;
//           }

//           .nav-btn.left { left: 8px; }
//           .nav-btn.right { right: 8px; }
//         }
//       `}</style>

//       <section className="cert-slider">
//         <div className="slider-box">
//           <button className="nav-btn left" onClick={prev}>
//             ‹
//           </button>

//           <img
//             src={certificates[index]}
//             alt="certificate"
//             onClick={() => setOpen(true)}
//           />

//           <button className="nav-btn right" onClick={next}>
//             ›
//           </button>
//         </div>
//       </section>

//       {/* FULL VIEW MODAL */}
//       {open && (
//         <div className="modal" onClick={() => setOpen(false)}>
//           <span className="close">✕</span>
//           <img src={certificates[index]} alt="certificate-full" />
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";

/* certificates images */
import c1 from "../assets/certificates/c1.jpeg";
import c2 from "../assets/certificates/c2.jpeg";
import c3 from "../assets/certificates/c3.jpeg";
import c4 from "../assets/certificates/c4.jpeg";
import c5 from "../assets/certificates/c5.jpeg";
import c6 from "../assets/certificates/c6.jpeg";
import p1 from "../assets/certificates/p1.jpeg";
import p2 from "../assets/certificates/p2.jpeg";
import p3 from "../assets/certificates/p3.jpeg";
import p4 from "../assets/certificates/p4.jpeg";
import p5 from "../assets/certificates/p5.jpeg";
import p6 from "../assets/certificates/p6.jpeg";

export default function CertificationsSection() {
  const images = [c1, c2, c3, c4, c5, c6, p1, p2, p3, p4, p5, p6];
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);

  const next = () => setActive((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <style>{`
        .cert-section {
          padding: 50px 20px;
          text-align: center;
          background: #fff;
          color:#0b3440;
        }

        .cert-section h2 {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 40px;
        }

        /* slider */
        .slider-wrapper {
          position: relative;
          max-width: 900px;
          margin: auto;
        }

        .cert-slide {
          width: 100%;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cert-slide img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* ORIGINAL SIZE – no blur */
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          border-radius: 12px;
          background: #fff;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          color: #fff;
          border: none;
          font-size: 22px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          cursor: pointer;
        }

        .nav-btn.left { left: -20px; }
        .nav-btn.right { right: -20px; }

        /* modal */
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .modal img {
          max-width: 95%;
          max-height: 95%;
          object-fit: contain;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 32px;
          color: #fff;
          cursor: pointer;
        }

        /* mobile */
        @media (max-width: 768px) {
          .cert-slide {
            height: 260px;
          }

          .nav-btn.left { left: 0; }
          .nav-btn.right { right: 0; }
        }
      `}</style>

      <section className="cert-section">
        <h2>Certificates & Achievements</h2>

        <div className="slider-wrapper">
          <button className="nav-btn left" onClick={prev}>
            ‹
          </button>

          <div className="cert-slide" onClick={() => setOpen(images[active])}>
            <img src={images[active]} alt="certificate" />
          </div>

          <button className="nav-btn right" onClick={next}>
            ›
          </button>
        </div>
      </section>

      {/* fullscreen modal */}
      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <span className="modal-close">✕</span>
          <img src={open} alt="certificate preview" />
        </div>
      )}
    </>
  );
}
