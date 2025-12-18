// import React from "react";

// export default function Mentors() {
//   return (
//     <>
//       <style>{`
//         .mentor-page {
//           padding: 40px 20px;
//           background: #f9fafb;
//         }

//         .mentor-section {
//           max-width: 1100px;
//           margin: 0 auto 90px;
//           display: flex;
//           align-items: center;
//           gap: 60px;
//         }

//         .mentor-section.reverse {
//           flex-direction: row-reverse;
//         }

//         .mentor-photo {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//         }

//         .mentor-photo img {
//           width: 260px;
//           height: 260px;
//           border-radius: 18px;
//           object-fit: cover;
//           box-shadow: 0 18px 45px rgba(0,0,0,0.15);
//         }

//         .mentor-content {
//           flex: 1;
//         }

//         .mentor-content h2 {
//           font-size: 2rem;
//           font-weight: 700;
//           margin-bottom: 6px;
//         }

//         .mentor-role {
//           font-size: 1rem;
//           color: #555;
//           font-weight: 600;
//           margin-bottom: 14px;
//         }

//         .mentor-bio {
//           font-size: 1rem;
//           line-height: 1.7;
//           color: #333;
//           margin-bottom: 16px;
//         }

//         .mentor-exp {
//           font-size: 0.9rem;
//           font-weight: 700;
//           color: #1d4ed8;
//           margin-bottom: 18px;
//         }

//         .mentor-socials {
//           display: flex;
//           gap: 14px;
//         }

//         .mentor-socials a {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: #eef2ff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #1d4ed8;
//           text-decoration: none;
//           transition: all 0.25s ease;
//         }

//         .mentor-socials a:hover {
//           background: #1d4ed8;
//           color: #fff;
//           transform: translateY(-4px);
//         }

//         .mentor-socials svg {
//           width: 18px;
//           height: 18px;
//         }

//         @media (max-width: 900px) {
//           .mentor-section,
//           .mentor-section.reverse {
//             flex-direction: column;
//             text-align: center;
//           }

//           .mentor-photo img {
//             width: 200px;
//             height: 200px;
//           }

//           .mentor-socials {
//             justify-content: center;
//           }
//         }
//       `}</style>

//       <section className="mentor-page">
//         {/* ================== MENTOR 1 ================== */}
//         <div className="mentor-section">
//           {/* LEFT: PHOTO */}
//           <div className="mentor-photo">
//             <img
//               src="https://images.unsplash.com/photo-1603415526960-f7e0328f7d35?w=600"
//               alt="Mr. Abhishek Goswami"
//             />
//           </div>

//           {/* RIGHT: BIOGRAPHY */}
//           <div className="mentor-content">
//             <h2>Mr. Abhishek Goswami</h2>
//             {/* <div className="mentor-role">Stock Market Mentor</div> */}

//             <p className="mentor-bio">
//               Mr. Abhishek Goswami is an NSE–NISM certified mentor with 7+ years
//               of experience in the financial markets. He specializes in cash
//               markets, derivatives, and forex markets , with strong expertise in
//               *Forex Fundamentals and Technical Analysis, along with advanced
//               price action trading strategies such as **ICT concepts, Smart
//               Money Concepts (SMC) and Harmonic patterns* He is recognized for
//               creating *structured roadmaps to clear funded (prop firm)
//               accounts* and has successfully guided numerous students in
//               achieving funded account approvals through disciplined,
//               risk-managed trading frameworks.
//             </p>

//             <div className="mentor-exp">7+ Years Experience</div>

//             {/* <div className="mentor-socials">
//               <a href="#" aria-label="LinkedIn">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.6 4.75 6V24h-4v-8.6c0-2-.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z" />
//                 </svg>
//               </a>

//               <a href="#" aria-label="Instagram">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10z" />
//                 </svg>
//               </a>
//             </div> */}
//           </div>
//         </div>

//         {/* ================== MENTOR 2 ================== */}
//         <div className="mentor-section reverse">
//           {/* LEFT: BIOGRAPHY */}
//           <div className="mentor-content">
//             <h2>Mr. Alok Mishra</h2>
//             {/* <div className="mentor-role">Forex & Technical Analyst</div> */}

//             <p className="mentor-bio">
//               Mr. Alok Mishra NSE–NISM Certified Mentor with 7+ years of
//               experience in the financial markets. He specializes in the stock
//               market, day trading, and swing trading, with a strong focus on
//               practical, real-market strategies rather than theory alone. Mr.
//               Alok Mishra has successfully trained 2,000+ students across India,
//               helping beginners and aspiring traders build discipline, risk
//               management skills, and consistent trading habits. He is also a CFA
//               Level I Candidate, bringing a deep understanding of financial
//               analysis, market psychology, and professional trading frameworks
//               into his mentorship. Known for his simple teaching style and
//               hands-on approach, he aims to make stock market education clear,
//               ethical, and result-oriented for every learner.
//             </p>

//             <div className="mentor-exp">7+ Years Experience</div>

//             {/* <div className="mentor-socials">
//               <a href="#" aria-label="LinkedIn">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.6 4.75 6V24h-4v-8.6c0-2-.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z" />
//                 </svg>
//               </a>

//               <a href="#" aria-label="Instagram">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7z" />
//                 </svg>
//               </a>
//             </div> */}
//           </div>

//           {/* RIGHT: PHOTO */}
//           <div className="mentor-photo">
//             <img
//               src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600"
//               alt="Ankit Sharma"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";

/* 🔁 LOCAL IMAGES */
import mentor1 from "../assets/mentor2.png";
import mentor2 from "../assets/mentor1.png";

export default function Mentors() {
  return (
    <>
      <style>{`
        .mentor-page {
          padding: 40px 20px;
          background: #f9fafb;
        }

        .mentor-section {
          max-width: 1100px;
          margin: 0 auto 90px;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .mentor-section.reverse {
          flex-direction: row-reverse;
        }

        .mentor-photo {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .mentor-photo img {
          width: 260px;
          height: 260px;
          border-radius: 18px;
          object-fit: cover;
          box-shadow: 0 18px 45px rgba(0,0,0,0.15);
        }

        .mentor-content {
          flex: 1;
        }

        .mentor-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .mentor-bio {
          font-size: 1rem;
          line-height: 1.7;
          color: #333;
          margin-bottom: 16px;
        }

        .mentor-exp {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1d4ed8;
          margin-bottom: 18px;
        }

        @media (max-width: 900px) {
          .mentor-section,
          .mentor-section.reverse {
            flex-direction: column;
            text-align: center;
          }

          .mentor-photo img {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>

      <section className="mentor-page">
        {/* ================== MENTOR 1 ================== */}
        <div className="mentor-section">
          <div className="mentor-photo">
            <img src={mentor1} alt="Mr. Abhishek Goswami" />
          </div>

          <div className="mentor-content">
            <h2>Mr. Abhishek Goswami</h2>

            <p className="mentor-bio">
              Mr. Abhishek Goswami is an NSE–NISM certified mentor with 7+ years
              of experience in the financial markets. He specializes in cash
              markets, derivatives, and forex markets , with strong expertise in
              **Forex Fundamentals and Technical Analysis**, along with advanced
              price action trading strategies such as **ICT concepts, Smart
              Money Concepts (SMC) and Harmonic patterns** He is recognized for
              creating **structured roadmaps to clear funded (prop firm)
              accounts** and has successfully guided numerous students in
              achieving funded account approvals through disciplined,
              risk-managed trading frameworks.
            </p>

            <div className="mentor-exp">7+ Years Experience</div>
          </div>
        </div>

        {/* ================== MENTOR 2 ================== */}
        <div className="mentor-section reverse">
          <div className="mentor-content">
            <h2>Mr. Alok Mishra</h2>

            <p className="mentor-bio">
              Mr. Alok Mishra NSE–NISM Certified Mentor with 7+ years of
              experience in the financial markets. He specializes in the stock
              market, day trading, and swing trading, with a strong focus on
              practical, real-market strategies rather than theory alone. Mr.
              Alok Mishra has successfully trained 2,000+ students across India,
              helping beginners and aspiring traders build discipline, risk
              management skills, and consistent trading habits. He is also a CFA
              Level I Candidate, bringing a deep understanding of financial
              analysis, market psychology, and professional trading frameworks
              into his mentorship. Known for his simple teaching style and
              hands-on approach, he aims to make stock market education clear,
              ethical, and result-oriented for every learner.
            </p>

            <div className="mentor-exp">7+ Years Experience</div>
          </div>

          <div className="mentor-photo">
            <img src={mentor2} alt="Mr. Alok Mishra" />
          </div>
        </div>
      </section>
    </>
  );
}
