// import React, { useState } from "react";
// import logo from "../assets/logo.png"; // update if needed
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <style>{`
//         :root{
//           --font-sans: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
//           --nav-text: #0b2433;
//           --muted: #4f5962;
//           --accent: #1878ff;
//           --header-height: 76px;
//           --container-max: 1280px;
//         }

//         /* Header shell */
//         .site-header {
//           position: sticky;
//           top: 0;
//           z-index: 999;
//           background: #fff;
//           border-bottom: 1px solid #eef1f4;
//           height: var(--header-height);
//           display: flex;
//           align-items: center;
//           font-family: var(--font-sans);
//         }

//         .header-inner {
//           max-width: var(--container-max);
//           width: 100%;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 12px;
//           box-sizing: border-box;
//         }

//         /* logo */
//         .brand {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//         }
//         .brand img { height: 44px; display:block; }

//         .sr-only { position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden; }

//         /* nav */
//         .main-nav {
//           display: flex;
//           gap: 22px;
//           align-items: center;
//           margin-left: 8px;
//         }
//         .main-nav a {
//           color: var(--nav-text);
//           text-decoration: none;
//           font-weight: 600;
//           font-size: 16px;
//           padding: 6px 8px;
//           transition: color .15s ease, transform .12s ease;
//         }
//         .main-nav a:hover { color: var(--accent); transform: translateY(-1px); }

// .mentor-btn {
//   padding: 10px 18px;
//   background: #1d4ed8;
//   color: #fff;
//   border-radius: 8px;
//   font-weight: 600;
//   text-decoration: none;
// }

// .mentor-btn:hover {
//   background: #153ea8;
// }

//         /* right group */
//         .right-group {
//           display:flex;
//           align-items:center;
//           gap:12px;
//         }

//         /* call button (premium) */
//         .call-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           background: linear-gradient(180deg, #083445 0%, #0b2433 100%);
//           color: #e6f3fb;
//           padding: 8px 12px;
//           border-radius: 10px;
//           text-decoration: none;
//           font-weight: 700;
//           font-size: 14px;
//           box-shadow: 0 6px 18px rgba(2, 35, 50, 0.18);
//           border: 1px solid rgba(255,255,255,0.04);
//           transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
//         }
//         .call-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(2,35,50,0.28); opacity: 0.98; }
//         .call-btn:active { transform: translateY(0); box-shadow: 0 6px 18px rgba(2,35,50,0.16); }
//         .call-icon svg { display:block; color: #aee6ff; }
//         .call-text { line-height:1; color: #e6f3fb; }

//         .icon-only {
//           padding: 10px;
//           border-radius: 50%;
//           width: 40px;
//           height: 40px;
//           justify-content: center;
//         }
//         .icon-only .call-text { display: none; }

//         /* mobile toggle */
//         .menu-toggle {
//           display: none;
//           background: transparent;
//           border: none;
//           font-size: 22px;
//           cursor: pointer;
//           color: var(--nav-text);
//           padding: 8px;
//           border-radius: 8px;
//         }
//         .menu-toggle:focus { outline: 2px solid rgba(24,120,255,0.18); }

//         /* mobile nav dropdown */
//         .mobile-nav {
//           display: none;
//         }
//         .mobile-nav.open {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           padding: 12px 16px;
//           position: absolute;
//           top: calc(var(--header-height) + 8px);
//           right: 16px;
//           background: #fff;
//           box-shadow: 0 12px 40px rgba(10,20,40,0.12);
//           border-radius: 10px;
//           z-index: 9999;
//           min-width: 220px;
//         }
//         .mobile-nav a { padding: 8px 0; color: var(--nav-text); font-weight:600; text-decoration:none; }

//         /* responsive: collapse nav into mobile button */
//         @media (max-width: 880px) {
//           .main-nav { display: none; }
//           .menu-toggle { display: inline-flex; }
//         }

//         /* small screen tweaks for call button (bigger tap target) */
//         @media (max-width: 480px) {
//           .call-btn { padding: 12px 14px; font-size: 15px; gap: 10px; border-radius: 12px; }
//           .call-icon svg { width: 20px; height: 20px; }
//         }
//       `}</style>

//       <header className="site-header" role="banner">
//         <div className="header-inner">
//           {/* left: logo */}
//           <div className="brand" aria-label="StockDaddy">
//             <img src={logo} alt="StockDaddy Logo" />
//             <span className="sr-only">
//               StockDaddy - The Complete Stock Learning App
//             </span>
//           </div>

//           {/* center/desktop nav */}
//           <nav
//             className="main-nav"
//             role="navigation"
//             aria-label="Primary navigation"
//           >
//             <a href="/" aria-current="page">
//               Home
//             </a>

//             {/* Course now opens stockdaddy courses in new tab */}
//             <a
//               href="https://www.stockdaddy.in/stock-market-courses"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Course
//             </a>

//             {/* Services opens separate page */}
//             <Link to="/services">Services</Link>

//             {/* About navigates to home and scrolls to #about */}
//             <a href="/#about">About</a>

//             <a href="/#contact">Contact</a>
//           </nav>

//           {/* right group: call + mobile toggle */}
//           <div className="right-group">
//             {/* call button — icon only */}
//             <a
//               className="call-btn icon-only"
//               href="tel:+917054633632"
//               aria-label="Call StockDaddy +91 70546 33632"
//               title="Call +91 70546 33632"
//             >
//               <span className="call-icon" aria-hidden="true">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.06.72.24 1.43.53 2.07a2 2 0 0 1-.45 2.11L9.7 10.7a16 16 0 0 0 4.6 4.6l1.8-1.5a2 2 0 0 1 2.11-.45c.64.29 1.35.47 2.07.53A2 2 0 0 1 22 16.92z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M16.2 3.8l1.6 1.6"
//                     stroke="currentColor"
//                     strokeWidth="1.2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//             </a>

//             {/* mobile toggle visible on small screens */}
//             <button
//               className="menu-toggle"
//               onClick={() => setOpen(!open)}
//               aria-expanded={open}
//               aria-label={open ? "Close menu" : "Open menu"}
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 aria-hidden
//               >
//                 <path
//                   d="M3 7h18M3 12h18M3 17h18"
//                   stroke="#0b2433"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* mobile nav dropdown */}
//           <div
//             className={`mobile-nav ${open ? "open" : ""}`}
//             role="menu"
//             aria-hidden={!open}
//           >
//             {/* <a href="#" role="menuitem" onClick={() => setOpen(false)}>
//               Home
//             </a> */}

//             <Link to="/" role="menuitem" onClick={() => setOpen(false)}>
//               Home
//             </Link>

//             <a
//               href="https://www.stockdaddy.in/stock-market-courses"
//               target="_blank"
//               rel="noreferrer"
//               role="menuitem"
//               onClick={() => setOpen(false)}
//             >
//               Course
//             </a>

//             <Link to="/services" onClick={() => setOpen(false)}>
//               Services
//             </Link>

//             <a href="/#about" role="menuitem" onClick={() => setOpen(false)}>
//               About
//             </a>

//             <Link to="/mentors" className="mentor-btn">
//               Our Mentors
//             </Link>

//             <a href="/#contact" role="menuitem" onClick={() => setOpen(false)}>
//               Contact
//             </a>

//             {/* include call action in mobile menu too */}
//             <a
//               href="tel:+917054633632"
//               role="menuitem"
//               onClick={() => setOpen(false)}
//               style={{
//                 marginTop: 8,
//                 borderTop: "1px solid #eef1f4",
//                 paddingTop: 12,
//                 fontWeight: 800,
//               }}
//             >
//               Call +91 70546 33632
//             </a>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        :root{
          --font-sans: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          --nav-text: #0b2433;
          --accent: #1878ff;
          --header-height: 76px;
          --container-max: 1280px;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 999;
          background: #fff;
          border-bottom: 1px solid #eef1f4;
          height: var(--header-height);
          display: flex;
          align-items: center;
          font-family: var(--font-sans);
        }

        .header-inner {
          max-width: var(--container-max);
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .brand img { height: 44px; }

        .sr-only {
          position: absolute;
          left: -9999px;
        }

        /* DESKTOP NAV */
        .main-nav {
          display: flex;
          gap: 22px;
          align-items: center;
        }

        .main-nav a {
          color: var(--nav-text);
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          padding: 6px 8px;
        }

        .main-nav a:hover {
          color: var(--accent);
        }

        /* MENTORS BUTTON */
        .mentor-btn {
          padding: 10px 18px;
          // background: #1d4ed8;
          color:"black" !important;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
        }

        .mentor-btn:hover {
          color: #153ea8;
        }

        /* RIGHT GROUP */
        .right-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .call-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #0b2433;
          color: #fff;
          border-radius: 50%;
          text-decoration: none;
        }

        /* MOBILE TOGGLE */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* MOBILE MENU */
        .mobile-nav {
          display: none;
        }

        .mobile-nav.open {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: absolute;
          top: calc(var(--header-height) + 8px);
          right: 16px;
          background: #fff;
          padding: 16px;
          border-radius: 10px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          min-width: 220px;
        }

        .mobile-nav a {
          text-decoration: none;
          font-weight: 600;
          color: var(--nav-text);
        }

        /* MOBILE NAV FIX */
.mobile-nav a {
  padding: 10px 12px;
  border-radius: 8px;
}

/* Mobile Mentors Button – clean & aligned */
.mobile-nav .mentor-btn {
  background: #f1f5ff;
  color: var(--accent) !important;
  font-weight: 700;
  text-align: left;
  display: block;
}


        @media (max-width: 880px) {
          .main-nav { display: none; }
          .menu-toggle { display: block; }
        }
      `}</style>

      <header className="site-header">
        <div className="header-inner">
          {/* LOGO */}
          <div className="brand">
            <img src={logo} alt="StockDaddy Logo" />
            <span className="sr-only">StockDaddy</span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="main-nav">
            <Link to="/">Home</Link>

            <a
              href="https://www.stockdaddy.in/stock-market-courses"
              target="_blank"
              rel="noreferrer"
            >
              Course
            </a>

            <Link to="/services">Services</Link>

            <a href="/#about">About</a>

            {/* ✅ FIXED: MENTORS BUTTON */}
            <Link to="/mentors" className="mentor-btn">
              Our Mentors
            </Link>

            <a href="/#contact">Contact</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="right-group">
            <a className="call-btn" href="tel:+917054633632">
              📞
            </a>

            <button className="menu-toggle" onClick={() => setOpen(!open)}>
              ☰
            </button>
          </div>

          {/* MOBILE NAV */}
          <div className={`mobile-nav ${open ? "open" : ""}`}>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <a
              href="https://www.stockdaddy.in/stock-market-courses"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Course
            </a>

            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <a href="/#about" onClick={() => setOpen(false)}>
              About
            </a>

            {/* ✅ MOBILE MENTORS */}
            <Link
              to="/mentors"
              className="mentor-btn"
              onClick={() => setOpen(false)}
            >
              Our Mentors
            </Link>

            <a href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

            <a href="tel:+917054633632">Call +91 70546 33632</a>
          </div>
        </div>
      </header>
    </>
  );
}
