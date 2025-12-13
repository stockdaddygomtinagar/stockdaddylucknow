// import React from "react";
// /* replace these with your actual course thumbnails */
// import c1 from "../assets/course1.png";
// import c2 from "../assets/course2.png";
// import c3 from "../assets/course3.png";

// export default function ClassroomSection() {
//   return (
//     <>
//       <style>{`
//         .classroom-wrap {
//           font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
//           max-width: 1200px;
//           margin: 76px auto;
//           padding: 0 20px;
//         }

//         .section-head {
//           text-align:center;
//           margin-top: 28px;
//           margin-bottom: 38px;
//         }
//         .section-head h2 {
//           font-size: 40px;
//           margin: 0;
//           color: #0b2433;
//           font-weight: 700;
//         }
//         .cards-row {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 26px;
//           align-items: stretch;
//           margin-top: 24px;
//         }

//         .card {
//           background: white;
//           border-radius: 10px;
//           box-shadow: 0 12px 30px rgba(3,10,18,0.06);
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           transition: transform .28s ease, box-shadow .28s ease;
//         }
//         .card:hover { transform: translateY(-8px); box-shadow: 0 28px 60px rgba(3,10,18,0.12); }
//         .card-thumb {
//           width:100%;
//           height: 180px;
//           background: #f0f2f5;
//           display:block;
//         }
//         .card-thumb img { width:100%; height:100%; object-fit:cover; display:block; }

//         .card-body {
//           padding: 18px;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }

//         .card-title {
//           font-size: 18px;
//           font-weight: 700;
//           color: #0b2433;
//           margin-bottom: 8px;
//         }
//         .card-desc {
//           color: #5b646e;
//           font-size: 14px;
//           line-height: 1.5;
//           margin-bottom: 12px;
//         }

//         .card-meta {
//           display:flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 12px;
//           font-size: 14px;
//           color: #0b2433;
//           margin-bottom: 12px;
//         }
//         .meta-left { color:#4b5563; font-size:13px; }

//         .card-footer {
//           display:flex;
//           justify-content: space-between;
//           align-items:center;
//           gap:12px;
//         }

//         .btn-primary {
//           background: #0b3440;
//           color: white;
//           border: none;
//           padding: 10px 14px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-weight:600;
//         }
//         .btn-link {
//           background: transparent;
//           border: none;
//           color: #1878ff;
//           font-weight:600;
//           cursor: pointer;
//         }

//         /* Responsive */
//         @media (max-width: 980px) {
//           .cards-row { grid-template-columns: repeat(2, 1fr); }
//         }
//         @media (max-width: 640px) {
//           .cards-row { grid-template-columns: 1fr; }
//           .card-thumb { height: 220px; }
//           .section-head h2 { font-size: 28px; }
//         }
//       `}</style>

//       <section className="classroom-wrap" aria-label="Classroom programmes">
//         <div className="section-head">
//           <h2>Classroom Programme</h2>
//         </div>

//         <div className="cards-row">
//           {/* Level 1 */}
//           <article className="card" role="article" aria-label="Level 1 course">
//             <div className="card-thumb">
//               <img src={c1} alt="Complete Stock Market Level 1" />
//             </div>

//             <div className="card-body">
//               <div>
//                 <div className="card-title">
//                   Complete Stock Market Course — Level 1
//                 </div>
//                 <div className="card-desc">
//                   Beginner to confident trader — basics, live examples, and
//                   practical labs. Great for first-time learners.
//                 </div>

//                 <div className="card-meta">
//                   <div className="meta-left">
//                     Price <div style={{ fontWeight: 700 }}>₹29,999</div>
//                   </div>
//                   <div className="meta-right">
//                     Duration <div style={{ fontWeight: 700 }}>1 Month</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card-footer">
//                 <button
//                   className="btn-primary"
//                   onClick={() => alert("Enroll Level 1")}
//                 >
//                   Enroll Now
//                 </button>
//                 <button
//                   className="btn-link"
//                   onClick={() => alert("Open details Level 1")}
//                 >
//                   Course Details
//                 </button>
//               </div>
//             </div>
//           </article>

//           {/* Level 2 */}
//           <article className="card" role="article" aria-label="Level 2 course">
//             <div className="card-thumb">
//               <img src={c2} alt="Complete Stock Market Level 2" />
//             </div>

//             <div className="card-body">
//               <div>
//                 <div className="card-title">
//                   Complete Stock Market Course — Level 2
//                 </div>
//                 <div className="card-desc">
//                   Advanced technicals, strategies and risk-management. Designed
//                   to build consistent trading skills.
//                 </div>

//                 <div className="card-meta">
//                   <div className="meta-left">
//                     Price <div style={{ fontWeight: 700 }}>₹59,999</div>
//                   </div>
//                   <div className="meta-right">
//                     Duration <div style={{ fontWeight: 700 }}>1 Month</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card-footer">
//                 <button
//                   className="btn-primary"
//                   onClick={() => alert("Enroll Level 2")}
//                 >
//                   Enroll Now
//                 </button>
//                 <button
//                   className="btn-link"
//                   onClick={() => alert("Open details Level 2")}
//                 >
//                   Course Details
//                 </button>
//               </div>
//             </div>
//           </article>

//           {/* Bootcamp */}
//           <article className="card" role="article" aria-label="Bootcamp">
//             <div className="card-thumb">
//               <img src={c3} alt="CTP Bootcamp" />
//             </div>

//             <div className="card-body">
//               <div>
//                 <div className="card-title">CTP — Priority Learning</div>
//                 <div className="card-desc">
//                   Intensive bootcamp combining Level-1 + Level-2 content with
//                   mentorship and placement support.
//                 </div>

//                 <div className="card-meta">
//                   <div className="meta-left">
//                     Price <div style={{ fontWeight: 700 }}>₹2,49,999</div>
//                   </div>
//                   <div className="meta-right">
//                     Duration <div style={{ fontWeight: 700 }}>2 Months</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="card-footer">
//                 <button
//                   className="btn-primary"
//                   onClick={() => alert("Enroll Bootcamp")}
//                 >
//                   Enroll Now
//                 </button>
//                 <button
//                   className="btn-link"
//                   onClick={() => alert("Open details Bootcamp")}
//                 >
//                   Course Details
//                 </button>
//               </div>
//             </div>
//           </article>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import c1 from "../assets/course1.png";
import c2 from "../assets/course2.png";
import c3 from "../assets/course3.png";

const COURSE_URL =
  "https://www.stockdaddy.in/stock-market-courses/standard-courses?utm_source=web-standard-courses";
const COURSE_URL2 =
  "https://www.stockdaddy.in/stock-market-courses/exclusive-courses?utm_source=web-exclusive-courses";
const COURSE_URL3 =
  "https://www.stockdaddy.in/stock-market-courses/bootcamps?utm_source=web-bootcamps";

export default function ClassroomSection() {
  return (
    <>
      <style>{`
        .classroom-wrap {
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          max-width: 1200px;
          margin: 76px auto;
          padding: 0 20px;
        }

        .section-head {
          text-align:center;
          margin-top: 28px;
          margin-bottom: 38px;
        }
        .section-head h2 {
          font-size: 40px;
          margin: 0;
          color: #0b2433;
          font-weight: 700;
        }

        .cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          align-items: stretch;
          margin-top: 24px;
        }

        /* Make FULL CARD clickable */
        .card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(3,10,18,0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .28s ease, box-shadow .28s ease;
          cursor: pointer;
          height: 100%;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 60px rgba(3,10,18,0.12);
        }

        .card-thumb {
          width:100%;
          height: 180px;
          background: #f0f2f5;
        }
        .card-thumb img { width:100%; height:100%; object-fit:cover; }

        .card-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #0b2433;
          margin-bottom: 8px;
        }

        .card-desc {
          color: #5b646e;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .card-meta {
          display:flex;
          justify-content: space-between;
          color: #0b2433;
          margin-bottom: 12px;
        }
        .meta-left { color:#4b5563; font-size:13px; }

        .card-footer {
          margin-top: auto;
          display:flex;
          justify-content: space-between;
        }

        .btn-primary {
          background: #0b3440;
          color: white;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          font-weight:600;
          pointer-events: none;
        }

        .btn-link {
          background: transparent;
          border: none;
          color: #1878ff;
          font-weight:600;
          pointer-events: none;
        }

        @media (max-width: 980px) {
          .cards-row { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cards-row { grid-template-columns: 1fr; }
          .card-thumb { height: 220px; }
          .section-head h2 { font-size: 28px; }
        }
      `}</style>

      <section className="classroom-wrap">
        <div className="section-head">
          <h2>Classroom Programme</h2>
        </div>

        <div className="cards-row">
          {/* LEVEL 1 */}
          <a
            className="card-link"
            href={COURSE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <article className="card">
              <div className="card-thumb">
                <img src={c1} alt="Level 1 Course" />
              </div>

              <div className="card-body">
                <div className="card-title">
                  Complete Stock Market Course — Level 1
                </div>
                <div className="card-desc">
                  Beginner to confident trader — basics, live examples, and
                  practical labs.
                </div>

                <div className="card-meta">
                  <div className="meta-left">
                    Price <div style={{ fontWeight: 700 }}>₹29,999</div>
                  </div>
                  <div>
                    Duration <div style={{ fontWeight: 700 }}>1 Month</div>
                  </div>
                </div>

                <div className="card-footer">
                  <button className="btn-primary">Enroll Now</button>
                  <button className="btn-link">Course Details</button>
                </div>
              </div>
            </article>
          </a>

          {/* LEVEL 2 */}
          <a
            className="card-link"
            href={COURSE_URL2}
            target="_blank"
            rel="noreferrer"
          >
            <article className="card">
              <div className="card-thumb">
                <img src={c2} alt="Level 2 Course" />
              </div>

              <div className="card-body">
                <div className="card-title">
                  Complete Stock Market Course — Level 2
                </div>
                <div className="card-desc">
                  Advanced strategies, risk management & technicals.
                </div>

                <div className="card-meta">
                  <div className="meta-left">
                    Price <div style={{ fontWeight: 700 }}>₹59,999</div>
                  </div>
                  <div>
                    Duration <div style={{ fontWeight: 700 }}>1 Month</div>
                  </div>
                </div>

                <div className="card-footer">
                  <button className="btn-primary">Enroll Now</button>
                  <button className="btn-link">Course Details</button>
                </div>
              </div>
            </article>
          </a>

          {/* BOOTCAMP */}
          <a
            className="card-link"
            href={COURSE_URL3}
            target="_blank"
            rel="noreferrer"
          >
            <article className="card">
              <div className="card-thumb">
                <img src={c3} alt="Bootcamp" />
              </div>

              <div className="card-body">
                <div className="card-title">CTP — Priority Learning</div>
                <div className="card-desc">
                  Intensive Bootcamp with mentorship & placement support.
                </div>

                <div className="card-meta">
                  <div className="meta-left">
                    Price <div style={{ fontWeight: 700 }}>₹2,49,999</div>
                  </div>
                  <div>
                    Duration <div style={{ fontWeight: 700 }}>2 Months</div>
                  </div>
                </div>

                <div className="card-footer">
                  <button className="btn-primary">Enroll Now</button>
                  <button className="btn-link">Course Details</button>
                </div>
              </div>
            </article>
          </a>
        </div>
      </section>
    </>
  );
}
