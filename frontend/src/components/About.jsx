import React, { useState } from "react";

import a1 from "../assets/about1.png";
import a2 from "../assets/about2.jpg";
import a3 from "../assets/about3.jpg";
import a4 from "../assets/about4.jpg";

/**
 * About.jsx — updated: adds id="about" + smooth scrolling + scroll offset for sticky header
 * Replace your existing file with this.
 */

export default function About() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <style>{`
        /* enable smooth scrolling site-wide */
        html { scroll-behavior: smooth; }

        :root{
          --bg-blue: #0b3440; /* deep blue */
          --accent: #1878ff;
          --text: #0b2433;
          --muted: #5b646e;
          --card-radius: 12px;
          --gap: 22px;
          --container: 1200px;
          /* header height fallback if header defines it too */
          --header-height-fallback: 76px;
        }

        .about-wrap {
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          max-width: var(--container);
          margin: 0 auto;
          /* ensure sticky header doesn't cover this section when anchored to */
          scroll-margin-top: calc(var(--header-height, var(--header-height-fallback)) + 12px);
        }

        .about-hero {
          background: var(--bg-blue);
          color: white;
          padding: 36px 28px;
          margin-left: -40px;
          margin-right: -40px;
          border-radius: 8px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap: 18px;
        }

        .about-hero h2 {
          font-size: 40px;
          margin: 0 0 6px 0;
          line-height:1.02;
          letter-spacing: -0.4px;
        }
        .about-hero p.lead {
          margin:0;
          color: rgba(255,255,255,0.88);
          font-size:16px;
          max-width:760px;
        }
        .about-hero .cta { margin-left: 12px; }
        .btn-outline {
          background: white;
          color: var(--bg-blue);
          border-radius: 8px;
          padding:10px 16px;
          font-weight:600;
          border: none;
          cursor:pointer;
        }

        /* Main content area: left text, right mosaic */
        .about-main {
          display: grid;
          grid-template-columns: 1fr 540px;
          gap: var(--gap);
          align-items: start;
          margin-top: 28px;
        }

        .about-text {
          background: white;
          padding: 28px;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(3,10,18,0.06);
        }
        .about-text h3 {
          margin: 0 0 12px 0;
          font-size: 28px;
          color: var(--text);
        }
        .about-text p {
          color: var(--muted);
          line-height:1.7;
          margin: 0 0 14px 0;
        }
        .about-text ul {
          margin: 12px 0 0 16px;
          color: var(--muted);
        }

        /* Mosaic grid (one large + three smaller) */
        .mosaic {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          grid-template-areas:
            "large small1"
            "large small2";
          gap: 16px;
        }

        /* hide mobile marquee by default (desktop) */
        .mobile-marquee-wrap {
          display: none;
        }

        .tile {
          overflow: hidden;
          border-radius: var(--card-radius);
          position: relative;
          background: #eee;
          box-shadow: 0 10px 24px rgba(3,10,18,0.06);
        }
        .tile img {
          display:block;
          width:100%;
          height:100%;
          object-fit:cover;
          transition: transform .6s cubic-bezier(.2,.9,.2,1);
        }
        .tile:hover img { transform: scale(1.04); }

        /* MIXED SIZES */
        .tile.large {
          grid-area: large;
          height: 520px;      /* large tile height (desktop) */
        }
        .tile.small1 {
          grid-area: small1;
          height: 255px;         /* medium tall */
        }
        .tile.small2 {
          grid-area: small2;
          height: 250px;         /* smaller tile */
        }

        /* optional fourth tile (will show on mobile stack) */
        .tile.small3 {
          display:none;
        }

        .about-badge {
          margin-top: 18px;
          display:inline-block;
          background: #fff;
          color: var(--bg-blue);
          padding:8px 12px;
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(3,10,18,0.06);
          font-weight:600;
        }

        /* RESPONSIVE: tune sizes down */
        @media (max-width:1000px) {
          .about-main { grid-template-columns: 1fr 420px; }
          .tile.large { min-height: 300px; }
          .tile.small1 { height: 180px; }
          .tile.small2 { height: 130px; }
        }

        /* MOBILE: single-column stack but preserved "rhythm" */
        @media (max-width:760px) {
          .about-hero {
            flex-direction: column;
            align-items:flex-start;
            margin-left:20px;
            margin-right:20px;
          }

          .about-main {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 18px;
          }

          /* hide desktop mosaic on mobile */
          .mosaic {
            display: none !important;
          }

          /* marquee */
          .mobile-marquee-wrap {
            width:100%;
            overflow:hidden;
            position:relative;
            margin-top:6px;
            padding-bottom:8px;
            display: block !important;
          }
          .marquee-track {
            display:flex;
            gap:12px;
            animation: marquee-left 12s linear infinite;
            will-change:transform;
          }
          .marquee-track.paused { animation-play-state: paused; }

          .marquee-item {
            flex: 0 0 calc(100% - 36px);
            height:180px;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 12px 30px rgba(3,10,18,0.06);
          }
          .marquee-item img {
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
          }

          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .tile.large { min-height: 220px; }
          .tile.small1, .tile.small2, .tile.small3 {
            height: 120px;
            display:block;
          }

          .tile.small3 { display:block; margin-top: 8px; }

          /* hide Book A Visit on mobile */
          .about-hero .cta {
            display: none !important;
          }
        }
      `}</style>

      {/* add id="about" so header anchor hits this element */}
      <div id="about" className="about-wrap">
        <div className="about-hero">
          <div>
            <h2>About StockDaddy</h2>
            <p className="lead">
              Hybrid classroom training + live market practice — practical
              trading education.
            </p>
          </div>

          <div className="cta">
            {/* <a
              className="btn-outline"
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();

                // Already on home page → smooth scroll
                if (window.location.pathname === "/") {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else {
                  // Not on home → go to home + auto scroll (Home.jsx will handle it)
                  window.location.href = "/#contact";
                }
              }}
            >
              Book A Visit
            </a> */}
          </div>
        </div>

        <div className="about-main">
          <div className="about-text">
            <h3>We are a full-service trading education center</h3>
            <p>
              StockDaddy HLCC provides classroom coaching combined with
              practical trading labs, real-time market sessions and mentorship.
              Our goal is to teach investing & trading with hands-on
              skill-building so students graduate with market-ready abilities
              and confidence.
            </p>
            <ul>
              <li>Hands-on live market labs</li>
              <li>Expert mentors and trainers</li>
              <li>Placement assistance & lifetime support</li>
            </ul>

            <div className="about-badge">5 Lakh+ Active Users</div>
            <br />
            <div className="about-badge">
              50000+ students have been mentored
            </div>
            <br />
            <div className="about-badge">4.7 Reviews on google, trustpilot</div>
          </div>

          <div>
            <div className="mosaic" aria-hidden>
              <div className="tile large">
                <img src={a1} alt="training room" />
              </div>

              <div className="tile small1">
                <img src={a2} alt="strategy" />
              </div>

              <div className="tile small2">
                <img src={a3} alt="students" />
              </div>

              <div className="tile small3">
                <img src={a4} alt="exchange" />
              </div>
            </div>
            {/* MOBILE MARQUEE */}
            <div
              className="mobile-marquee-wrap"
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className={`marquee-track ${paused ? "paused" : ""}`}>
                <div className="marquee-item">
                  <img src={a1} alt="" />
                </div>
                <div className="marquee-item">
                  <img src={a2} alt="" />
                </div>
                <div className="marquee-item">
                  <img src={a3} alt="" />
                </div>
                <div className="marquee-item">
                  <img src={a4} alt="" />
                </div>
                {/* duplicate set for loop */}
                <div className="marquee-item">
                  <img src={a1} alt="" />
                </div>
                <div className="marquee-item">
                  <img src={a2} alt="" />
                </div>
                <div className="marquee-item">
                  <img src={a3} alt="" />
                </div>
                <div className="marquee-item">
                  <img src={a4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
