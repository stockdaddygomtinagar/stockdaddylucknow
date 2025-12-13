import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";
import img1m from "../assets/m1.png";
// import img2m from "../assets/m2.jpg";
// import img3m from "../assets/m3.jpg";

/**
 * Hero.jsx — fixed mobile carousel so it shows one slide at a time and loops.
 * Drop this file into src/components/Hero.jsx (replace existing).
 */

export default function Hero() {
  const i1Ref = useRef(null);
  const i2Ref = useRef(null);
  const i3Ref = useRef(null);
  const cycleTimer = useRef(null);
  const isMounted = useRef(true);

  // mobile carousel state/refs
  const mobileWrapperRef = useRef(null);
  const mobileTimer = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    isMounted.current = true;
    const els = [i1Ref.current, i2Ref.current, i3Ref.current];
    if (!els.every(Boolean)) return;

    // visual slots
    const slots = [
      { left: 160, top: 40, rotate: -5, z: 6 }, // front
      { left: 120, top: 0, rotate: -10, z: 3 }, // middle
      { left: 80, top: -40, rotate: -15, z: 0 }, // back
    ];

    function setInstant(el, slot) {
      el.style.transition = "none";
      el.style.left = slot.left + "px";
      el.style.top = slot.top + "px";
      el.style.zIndex = slot.z;
      el.style.transform = `rotate(${slot.rotate}deg) translateZ(0)`;
      // force reflow to ensure transitions apply next time
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.style.transition = ""; // restore
    }

    function applySlot(el, slot, instant = false, preserveZ = false) {
      if (!el) return;
      el.style.transition = instant ? "none" : "520ms cubic-bezier(.2,.9,.2,1)";
      el.style.left = slot.left + "px";
      el.style.top = slot.top + "px";
      if (!preserveZ) {
        el.style.zIndex = slot.z;
      }
      el.style.transform = `rotate(${slot.rotate}deg) translateZ(0)`;
    }

    // Initialize
    setInstant(els[0], slots[0]);
    setInstant(els[1], slots[1]);
    setInstant(els[2], slots[2]);

    let currentOrder = [0, 1, 2];

    function shiftOnce() {
      currentOrder = [currentOrder[2], currentOrder[0], currentOrder[1]];
      const newFrontIdx = currentOrder[0];
      const newFrontEl = els[newFrontIdx];

      newFrontEl.style.zIndex = 99999;
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      newFrontEl.offsetHeight;

      applySlot(els[currentOrder[0]], slots[0], false, true);
      applySlot(els[currentOrder[1]], slots[1], false, false);
      applySlot(els[currentOrder[2]], slots[2], false, false);

      setTimeout(() => {
        if (!isMounted.current) return;
        els[currentOrder[0]].style.zIndex = slots[0].z;
        els[currentOrder[1]].style.zIndex = slots[1].z;
        els[currentOrder[2]].style.zIndex = slots[2].z;
      }, 620);
    }

    // desktop auto-cycle
    cycleTimer.current = setInterval(() => {
      if (!isMounted.current) return;
      shiftOnce();
    }, 2200);

    // first kick
    setTimeout(() => {
      if (isMounted.current) shiftOnce();
    }, 600);

    return () => {
      isMounted.current = false;
      if (cycleTimer.current) clearInterval(cycleTimer.current);
    };
  }, []);

  // responsive detect
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 880);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IMPORTANT: compute slide width correctly
  const goToMobile = (idx) => {
    const wrap = mobileWrapperRef.current;
    if (!wrap) return;
    // wrapper width is set to 3x viewport in CSS, so slide width = wrapper.clientWidth / 3
    const slides = 3;
    const slideWidth = Math.round(wrap.clientWidth / slides);
    wrap.style.transition = "transform 520ms cubic-bezier(.2,.9,.2,1)";
    wrap.style.transform = `translateX(-${idx * slideWidth}px)`;
    setMobileIndex(idx);
  };

  // autoplay for mobile
  useEffect(() => {
    if (!isMobile) {
      const wrap = mobileWrapperRef.current;
      if (wrap) {
        wrap.style.transition = "";
        wrap.style.transform = "";
      }
      setMobileIndex(0);
      if (mobileTimer.current) {
        clearInterval(mobileTimer.current);
        mobileTimer.current = null;
      }
      return;
    }

    if (!isPaused) {
      if (mobileTimer.current) clearInterval(mobileTimer.current);
      mobileTimer.current = setInterval(() => {
        setMobileIndex((prev) => {
          const next = (prev + 1) % 3;
          goToMobile(next);
          return next;
        });
      }, 2200);
    } else {
      if (mobileTimer.current) {
        clearInterval(mobileTimer.current);
        mobileTimer.current = null;
      }
    }

    return () => {
      if (mobileTimer.current) {
        clearInterval(mobileTimer.current);
        mobileTimer.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, isPaused]);

  // reposition on index change / resize
  useEffect(() => {
    function handleResize() {
      goToMobile(mobileIndex);
    }
    window.addEventListener("resize", handleResize);
    setTimeout(() => goToMobile(mobileIndex), 60);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileIndex]);

  // touch / swipe
  const onTouchStart = (e) => {
    setIsPaused(true);
    touchDeltaX.current = 0;
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onTouchMove = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    touchDeltaX.current = x - touchStartX.current;
    const wrap = mobileWrapperRef.current;
    if (!wrap) return;
    wrap.style.transition = "none";
    const slides = 3;
    const slideWidth = wrap.clientWidth / slides;
    const offset = -mobileIndex * slideWidth + -touchDeltaX.current;
    wrap.style.transform = `translateX(${offset}px)`;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    const threshold = 60;
    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        const next = (mobileIndex + 1) % 3;
        goToMobile(next);
      } else {
        const prev = (mobileIndex - 1 + 3) % 3;
        goToMobile(prev);
      }
    } else {
      goToMobile(mobileIndex);
    }
    setTimeout(() => setIsPaused(false), 700);
  };

  const onMouseEnter = () => setIsPaused(true);
  const onMouseLeave = () => setIsPaused(false);

  const onDotClick = (i) => {
    setIsPaused(true);
    goToMobile(i);
    setTimeout(() => setIsPaused(false), 1200);
  };

  const onPrev = () => {
    setIsPaused(true);
    const prev = (mobileIndex - 1 + 3) % 3;
    goToMobile(prev);
    setTimeout(() => setIsPaused(false), 900);
  };
  const onNext = () => {
    setIsPaused(true);
    const next = (mobileIndex + 1) % 3;
    goToMobile(next);
    setTimeout(() => setIsPaused(false), 900);
  };

  return (
    <>
      <style>{`
        :root{
          --font-sans: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          --text-color: #0b2433;
          --muted: #5b646e;
          --accent-blue: #1878ff;
          --container-max: 1280px;
        }

        .hero-section {
          font-family: var(--font-sans);
          padding: 56px 0;
          background: #fff;
          color: var(--text-color);
        }

        .hero-container{
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 28px;
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 40px;
          align-items: center;
        }

        .hero-kicker{ font-weight:600; font-size:18px; margin-bottom:10px; color:var(--text-color) }

        .hero-title{ margin:0 0 10px 0; display:flex; flex-direction:column; gap:6px; line-height:0.95; }

        .hero-title .line { display:block; background:none !important; padding:0; margin:0; color:inherit; }
        .hero-title .line-top { font-weight:800; color: var(--text-color); font-size:48px; }
        .hero-title .line-large { font-weight:800; color: var(--accent-blue); font-size:88px; line-height:0.95; letter-spacing:-1px; }
        .hero-title .place { font-weight:800; color: var(--text-color); font-size:40px; }

        .hero-sub{ margin-top:18px; color:var(--muted); font-size:16px; max-width:520px; }

.btn-outline{
  background: #1878ff !important;   /* ✔ real blue color */
  display:inline-block;
  margin-top:10px;
  padding:12px 20px;
  border-radius:8px;
  border:2px solid #0b1220;
  color:#fff !important;
  text-decoration:none;
  font-weight:600;
}

        .btn-outline:hover{ background: var(--accent-blue); color: white; border-color: var(--accent-blue); }

        /* desktop stack */
        .hero-right { display:flex; justify-content:flex-end; }
        .stacked-images { position: relative; width: 620px; height: 480px; margin-top:70px; }

        .img-wrap {
          position: absolute;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
          background: #fff;
          transform-origin: center;
          transition: transform 520ms cubic-bezier(.2,.9,.2,1), left 520ms cubic-bezier(.2,.9,.2,1), top 520ms cubic-bezier(.2,.9,.2,1), box-shadow 300ms;
        }

        @keyframes floaty {
          0% { transform: translateY(0) rotate(var(--r, -5deg)); }
          50% { transform: translateY(-6px) rotate(calc(var(--r, -5deg) + 0.5deg)); }
          100% { transform: translateY(0) rotate(var(--r, -5deg)); }
        }
        .img-wrap.anim { animation: floaty 4.6s ease-in-out infinite; }

        .img-wrap.i1 { left:160px; top:40px; transform: rotate(-5deg); z-index:6; width:290px; height:350px; --r:-5deg; }
        .img-wrap.i2 { left:120px; top:0px; transform: rotate(-10deg); z-index:3; width:290px; height:350px; --r:-10deg; }
        .img-wrap.i3 { left:80px; top:-40px; transform: rotate(-15deg); z-index:0; width:290px; height:350px; --r:-15deg; }

        .img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }

        .img-wrap:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 35px 80px rgba(0,0,0,0.22); }

        .hero-section ::selection { background: transparent; color: inherit; }

        /* responsive adjustments */
        @media (max-width:1100px){
          .hero-container{ grid-template-columns: 1fr 380px; gap:22px; }
          .hero-title .line-large{ font-size:64px; }
          .hero-title .line-top{ font-size:36px; }
          .hero-title .place{ font-size:28px; }
        }

        /* MOBILE CAROUSEL OVERRIDES */
        @media (max-width:880px){
          .hero-container{ grid-template-columns: 1fr; padding:0 20px; }
          .hero-right{ order:-1; margin-bottom:20px; justify-content:center; }
          .stacked-images{ width:100%; height:auto; margin-top:8px; overflow:hidden; position:relative; padding:0; background:transparent; }

          /* wrapper is 3x viewport, each slide is 100% of viewport */
          .mobile-wrap { display:flex; width: calc(100% * 3); will-change:transform; transform:translateX(0); }
          .img-wrap {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            flex: 0 0 100%;
            width: auto !important;
            height: 120px !important;
            border-radius: 12px !important;
            box-shadow: 0 12px 26px rgba(4,20,30,0.08) !important;
            margin-right: 12px;
            z-index: 1 !important;
            animation: none !important;
            transition: transform 420ms ease, box-shadow 300ms ease;
          }
          .img-wrap img { object-fit:cover; width:100%; height:100%; }

          .hero-title .line-top { font-size:20px; }
          .hero-title .line-large { font-size:40px; }
          .hero-title .place { font-size:18px; }
          .hero-section { padding: 18px 0; }
          .btn-outline { margin-top:12px; padding:10px 14px; }

          /* dots */
          .carousel-dots { display:flex; gap:8px; justify-content:center; margin-top:12px; align-items:center; }
          .dot { width:10px; height:10px; border-radius:50%; background: rgba(11,36,51,0.14); box-shadow: inset 0 1px 0 rgba(255,255,255,0.15); transition: transform 220ms ease, background 220ms ease; }
          .dot.active { background: var(--accent-blue); transform: scale(1.15); box-shadow: 0 6px 10px rgba(24,120,255,0.18); }

          /* arrows */
          .mobile-arrows {
            position: absolute;
            top: 50%;
            left: 12px;
            right: 12px;
            transform: translateY(-50%);
            display:flex;
            justify-content: space-between;
            pointer-events: none;
          }
          .arrow-btn {
            pointer-events: auto;
            background: rgba(255,255,255,0.95);
            border: none;
            width:40px;
            height:40px;
            border-radius:8px;
            display:grid;
            place-items:center;
            box-shadow: 0 6px 18px rgba(3,10,18,0.08);
            cursor: pointer;
          }
          .arrow-icon { width:14px; height:14px; display:block; stroke: var(--text-color); stroke-width:2; fill:none; }
        }
//         /* === Mobile override: show 3 static mobile images side-by-side (no desktop animation) === */
// .mobile-wrap {
//   display: flex;
//   width: 100% !important;        /* keep wrapper same width as viewport */
//   transform: none !important;    /* disable any translate from desktop */
//   will-change: auto !important;
//   overflow-x: auto;              /* allow horizontal scroll if needed */
//   gap: 12px;
//   padding-bottom: 6px;           /* space for dots/scroll */
//   scroll-snap-type: x mandatory; /* optional: snap per item */
// }

// /* make each card a responsive 3-up row */
// .img-wrap {
//   flex: 0 0 calc((100% - 24px) / 3); /* three images visible in a row with 12px gap */
//   width: calc((100% - 24px) / 3) !important;
//   height: 120px !important;
//   border-radius: 12px !important;
//   box-shadow: 0 12px 26px rgba(4,20,30,0.08) !important;
//   margin-right: 0; /* gap handled by parent */
//   overflow: hidden;
//   position: relative !important;
//   transform: none !important;
//   animation: none !important;
//   transition: transform 300ms ease, box-shadow 300ms ease;
//   scroll-snap-align: start;      /* optional: smooth snap */
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// }

// /* hide existing <img> tags so background images show */
// .img-wrap img { display: none !important; }

// /* -- Mobile specific images: adjust paths if your assets folder is different -- */
// /* Put m1.jpg, m2.jpg, m3.jpg inside src/assets/ */
// .img-wrap:nth-child(1) { background-image: url('/src/assets/m1.jpg'); }
// .img-wrap:nth-child(2) { background-image: url('/src/assets/m2.jpg'); }
// .img-wrap:nth-child(3) { background-image: url('/src/assets/m3.jpg'); }

// /* hide carousel dots/arrows if you don't want them on mobile */
// .mobile-arrows, .carousel-dots { display: none !important; }

// /* small polish */
// .mobile-wrap::-webkit-scrollbar { height: 6px; }
// .mobile-wrap::-webkit-scrollbar-thumb { background: rgba(11,36,51,0.12); border-radius: 6px; }

      `}</style>

      <section className="hero-section" aria-label="Hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title" aria-label="Classroom Learning Lucknow">
              <span className="line line-top">Welcome to StockDaddy</span>
              <span className="line line-large">Classroom Learning</span>
              <span className="line place">Lucknow</span>
            </h1>

            <p className="hero-sub">
              Learn stock market trading and investment
            </p>

            <div className="hero-cta">
              {/* <a className="btn-outline" href="#book">
                Book A visit
              </a> */}
              <a
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
              </a>
            </div>
          </div>

          <div className="hero-right" aria-hidden>
            <div
              className="stacked-images"
              role="presentation"
              onMouseEnter={() => isMobile && onMouseEnter()}
              onMouseLeave={() => isMobile && onMouseLeave()}
            >
              <div
                className="mobile-wrap"
                ref={mobileWrapperRef}
                onTouchStart={(e) => {
                  if (isMobile) onTouchStart(e);
                }}
                onTouchMove={(e) => {
                  if (isMobile) onTouchMove(e);
                }}
                onTouchEnd={(e) => {
                  if (isMobile) onTouchEnd(e);
                }}
                onMouseDown={(e) => {
                  if (isMobile) onTouchStart(e);
                }}
                onMouseMove={(e) => {
                  if (isMobile && e.buttons === 1) onTouchMove(e);
                }}
                onMouseUp={(e) => {
                  if (isMobile) onTouchEnd(e);
                }}
              >
                <div className="img-wrap i1 anim" ref={i1Ref}>
                  {/* <img src={img1} alt="slice 1" /> */}
                  <img src={isMobile ? img1m : img1} alt="slice 1" />
                </div>
                {/* <div className="img-wrap i1 anim" ref={i1Ref}>
                  <img src={img1m} alt="slice 1.1" />
                </div> */}
                <div className="img-wrap i2 anim" ref={i2Ref}>
                  <img src={img2} alt="slice 2" />
                </div>
                <div className="img-wrap i3 anim" ref={i3Ref}>
                  <img src={img3} alt="slice 3" />
                </div>
              </div>

              {isMobile && (
                <div className="mobile-arrows" aria-hidden>
                  <button
                    className="arrow-btn"
                    onClick={onPrev}
                    aria-label="Previous slide"
                  >
                    <svg className="arrow-icon" viewBox="0 0 24 24">
                      <path
                        d="M15 6 L9 12 L15 18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="arrow-btn"
                    onClick={onNext}
                    aria-label="Next slide"
                  >
                    <svg className="arrow-icon" viewBox="0 0 24 24">
                      <path
                        d="M9 6 L15 12 L9 18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {isMobile && (
                <div
                  className="carousel-dots"
                  role="tablist"
                  aria-label="Carousel dots"
                >
                  {[0, 1, 2].map((d) => (
                    <button
                      key={d}
                      className={`dot ${mobileIndex === d ? "active" : ""}`}
                      onClick={() => onDotClick(d)}
                      aria-label={`Go to slide ${d + 1}`}
                      style={{
                        border: "none",
                        background: "transparent",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
