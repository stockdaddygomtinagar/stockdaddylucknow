import React from "react";
import c1 from "../assets/stock-01.png";
import c2 from "../assets/stock-02.png";
import c3 from "../assets/stock-03.png";
import c4 from "../assets/stock-04.png";

const COURSE_URL =
  "https://www.stockdaddy.in/stock-market-courses/standard-courses?utm_source=web-standard-courses";
const COURSE_URL2 =
  "https://www.stockdaddy.in/stock-market-courses/exclusive-courses?utm_source=web-exclusive-courses";
const COURSE_URL3 =
  "https://www.stockdaddy.in/stock-market-courses/bootcamps?utm_source=web-bootcamps";
const COURSE_URL_FOREX =
  "https://www.stockdaddy.in/forex-trading-course?utm_source=web-forex-course";

export default function ClassroomSection() {
  return (
    <>
      <style>{`
        .classroom-wrap {
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          max-width: 1200px;
          margin: 20px auto;
          padding: 0 20px;
        }

        .section-head {
          text-align:center;
          margin-top: 28px;
          margin-bottom: 38px;
          color: #0b3440;
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

        /* FULL WIDTH FOREX SECTION */
.forex-full {
  grid-column: 1 / -1; /* 👈 poori 3-card width lega */
  display: grid;
  grid-template-columns: 1.1fr 1.9fr;
  gap: 28px;
  background: linear-gradient(180deg, #f8fbff, #ffffff);
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(3,10,18,0.06);
  padding: 24px;
  align-items: center;
}

/* Left image */
.forex-left img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

/* Right content */
.forex-right h3 {
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 700;
  color: #0b2433;
}

.forex-right p {
  font-size: 14px;
  color: #5b646e;
  line-height: 1.6;
  margin-bottom: 14px;
}

.forex-right ul {
  padding-left: 18px;
  margin-bottom: 16px;
}

.forex-right li {
  font-size: 14px;
  margin-bottom: 6px;
  color: #0b2433;
}

.forex-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}

.forex-meta div {
  font-size: 13px;
  color: #4b5563;
}

.forex-meta strong {
  display: block;
  font-size: 16px;
  color: #0b2433;
}

.forex-actions {
  margin-top: 8px;
}

/* Responsive */
@media (max-width: 900px) {
  .forex-full {
    grid-template-columns: 1fr;
  }
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
                    Price <div style={{ fontWeight: 700 }}>₹24,999</div>
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
                    Price <div style={{ fontWeight: 700 }}>₹49,999</div>
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
          {/* <a
            className="card-link"
            href={COURSE_URL_FOREX}
            target="_blank"
            rel="noreferrer"
          >
            <article className="card">
              <div className="card-thumb">
                <img src={c4} alt="Forex Trading Course" />
              </div>

              <div className="card-body">
                <div className="card-title">Forex Market Trading Course</div>

                <div className="card-desc">
                  Learn global currency trading with live charts, strategies,
                  risk management & mentor-led sessions.
                </div>

                <div className="card-meta">
                  <div className="meta-left">
                    Price
                    <div style={{ fontWeight: 700 }}>₹35,000</div>
                  </div>

                  <div>
                    Duration
                    <div style={{ fontWeight: 700 }}>1.5 Months</div>
                  </div>
                </div>

                <div className="card-footer">
                  <button className="btn-primary">Enroll Now</button>
                  <button className="btn-link">Course Details</button>
                </div>
              </div>
            </article>
          </a> */}
          {/* <div className="forex-row">
            <div className="forex-info">
              <h3>Why Learn Forex Trading?</h3>
              <p>
                Forex (Foreign Exchange Market) is the world’s largest financial
                market, operating 24×5 with high liquidity and global
                opportunities. This Forex Trading Course is designed to help
                learners understand the global currency market from basics to
                advanced levels. You will learn how the international forex
                market works, including major, minor, and exotic currency pairs.
                The course covers technical analysis, price action, chart
                patterns, and indicator-based strategies used by professional
                traders. Students will get hands-on practice with live charts
                and real-time market analysis to build practical trading
                confidence. Special focus is given to risk management, capital
                protection, and psychology to help avoid common trading
                mistakes. The program includes mentor-led sessions, strategy
                backtesting, and trade execution guidance. Beginners as well as
                intermediate traders can benefit from structured learning and
                step-by-step growth. By the end of the course, learners will be
                able to independently analyze forex markets and execute
                disciplined trades.
              </p>

              <div className="forex-points">
                <div className="forex-box">🌍 Trade Global Currency Pairs</div>
                <div className="forex-box">
                  📊 Live Charts & Technical Analysis
                </div>
                <div className="forex-box">⚠️ Professional Risk Management</div>
                <div className="forex-box">
                  🧠 Mentor-Led Practical Sessions
                </div>
                <div className="forex-box">💰 Small Capital, High Exposure</div>
                <div className="forex-box">⏱️ 24×5 Market Access</div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}

          {/* FOREX FULL WIDTH SECTION */}
          <div className="forex-full">
            <div className="forex-left">
              <img src={c4} alt="Forex Trading Course" />
            </div>

            <div className="forex-right">
              <h3>Forex Market Trading Course</h3>
              <p>
                Learn global currency trading in the world’s largest financial
                market. This course focuses on live charts, professional
                strategies, strict risk management, and mentor-led practical
                sessions.
              </p>

              <ul>
                <li>🌍 Trade global currency pairs (USD, EUR, GBP, JPY)</li>
                <li>📊 Live technical & fundamental analysis</li>
                <li>⚠️ Risk & capital management like professionals</li>
                <li>🧠 Strategy building & psychology control</li>
                <li>⏱️ 24×5 market opportunities</li>
              </ul>

              <div className="forex-meta">
                <div>
                  Price
                  <strong>₹35,000</strong>
                </div>
                <div>
                  Duration
                  <strong>1.5 Months</strong>
                </div>
              </div>

              <div className="forex-actions">
                <a href={COURSE_URL_FOREX} target="_blank" rel="noreferrer">
                  <button className="btn-primary">Enroll Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
