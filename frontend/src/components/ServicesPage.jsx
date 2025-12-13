import React from "react";

export default function ServicesPage() {
  return (
    <>
      <style>{`
        :root {
          --accent: #1878ff;
          --text-dark: #0b2433;
          --text-muted: #5b646e;
          --bg-soft: #f7f9fc;
          --card-bg: #ffffff;
          --radius: 14px;
          --shadow: 0 10px 28px rgba(10,20,40,0.06);
          --shadow-hover: 0 16px 40px rgba(10,20,40,0.12);
        }

        .services-wrap {
          max-width: 1250px;
          margin: 80px auto;
          padding: 0 20px;
          font-family: "Poppins", sans-serif;
        }

        .services-header {
          text-align: center;
          margin-bottom: 40px;
          margin-top: -80px;
        }

        .services-header h1 {
          font-size: 42px;
          color: var(--text-dark);
          font-weight: 800;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .service-card {
          background: var(--card-bg);
          padding: 22px 20px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          transition: all 0.25s ease;
          cursor: pointer;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
        }

        .service-icon {
          font-size: 32px;
          color: var(--accent);
        }

        .service-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .service-desc {
          margin-top: 4px;
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
        }

        /* highlight card like your screenshot */
        .highlight {
          background: #e9f4ff;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="services-wrap">
        <div className="services-header">
          <h1>Our Services</h1>
        </div>

        <div className="services-grid">
          {/* 1 */}
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <div>
              <h3 className="service-title">Courses</h3>
              <p className="service-desc">
                Explore courses and become a certified trader.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="service-card">
            <div className="service-icon">🎙️</div>
            <div>
              <h3 className="service-title">Podcast</h3>
              <p className="service-desc">
                Exploring investment strategies with our stock market podcasts.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="service-card">
            <div className="service-icon">📈</div>
            <div>
              <h3 className="service-title">Workshop</h3>
              <p className="service-desc">
                Level up your expertise with interactive live workshops.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="service-card">
            <div className="service-icon">📘</div>
            <div>
              <h3 className="service-title">Free Stock Market Courses</h3>
              <p className="service-desc">
                Learn the basics for free and start your trading journey.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <div>
              <h3 className="service-title">Case Studies</h3>
              <p className="service-desc">
                Deep dive into real stock market case studies.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="service-card">
            <div className="service-icon">💬</div>
            <div>
              <h3 className="service-title">Live Doubt Counter</h3>
              <p className="service-desc">
                Get your stock market doubts solved by our mentors.
              </p>
            </div>
          </div>

          {/* 7 */}
          <div className="service-card">
            <div className="service-icon">✍️</div>
            <div>
              <h3 className="service-title">Blogs</h3>
              <p className="service-desc">
                Unlock stock market secrets through expert blogs.
              </p>
            </div>
          </div>

          {/* 8 */}
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <div>
              <h3 className="service-title">Bootcamps</h3>
              <p className="service-desc">
                Master trading with advanced-level programmes.
              </p>
            </div>
          </div>

          {/* 9 — Highlighted */}
          <div className="service-card highlight">
            <div className="service-icon">👨‍🏫</div>
            <div>
              <h3 className="service-title">Free Counselling Session</h3>
              <p className="service-desc">
                Unlock stock market secrets — sign up for a free counselling
                session!
              </p>
            </div>
          </div>

          {/* 10 */}
          <div className="service-card">
            <div className="service-icon">📄</div>
            <div>
              <h3 className="service-title">Open a Demat Account</h3>
              <p className="service-desc">
                Begin your investment journey — get your Demat account now.
              </p>
            </div>
          </div>

          {/* 11 */}
          <div className="service-card">
            <div className="service-icon">🧮</div>
            <div>
              <h3 className="service-title">Financial Calculators</h3>
              <p className="service-desc">
                Simplify your financial planning using our calculators.
              </p>
            </div>
          </div>

          {/* 12 */}
          <div className="service-card">
            <div className="service-icon">💰</div>
            <div>
              <h3 className="service-title">Unclaimed Investments Back?</h3>
              <p className="service-desc">
                Recover lost or forgotten shares, mutual funds, PF money etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
