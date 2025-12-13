import React, { useEffect, useRef, useState } from "react";
import satImg from "../assets/sat.png";
/* constant image (replace with your local import if needed) */
// const CONSTANT_SPOT_IMAGE = "./assets/sat.png";
// "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1600&q=60";

// function IconMentors() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="34"
//       height="34"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z"></path>
//       <path d="M8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11z"></path>
//       <path d="M2 20c0-3 3-6 8-6s8 3 8 6"></path>
//     </svg>
//   );
// }
// function IconMaterials() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="34"
//       height="34"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <path d="M3 7l9-4 9 4-9 4z"></path>
//       <path d="M21 14l-9 4-9-4"></path>
//       <path d="M21 7v7"></path>
//       <path d="M3 7v7"></path>
//     </svg>
//   );
// }
// function IconTech() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="34"
//       height="34"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <rect x="3" y="3" width="18" height="14" rx="2"></rect>
//       <path d="M7 21v-3h10v3"></path>
//     </svg>
//   );
// }
// function IconPractical() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="34"
//       height="34"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <path d="M3 7h18"></path>
//       <path d="M8 21V11"></path>
//       <path d="M16 21V11"></path>
//       <path d="M2 11h20"></path>
//     </svg>
//   );
// }
// function IconAttention() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="34"
//       height="34"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <path d="M12 2l3 7h7l-5.5 4 2 7L12 16 5.5 20l2-7L2 9h7z"></path>
//     </svg>
//   );
// }
// function IconRegional() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="34"
//       height="34"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <path d="M12 2l4 8-4 2-4-2 4-8z"></path>
//       <path d="M2 21l20 0"></path>
//     </svg>
//   );
// }
// function IconSaturday() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="36"
//       height="36"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <rect x="3" y="4" width="18" height="16" rx="2"></rect>
//       <path d="M16 2v4"></path>
//       <path d="M8 2v4"></path>
//       <path d="M3 10h18"></path>
//     </svg>
//   );
// }

const FEATURES = [
  {
    id: "mentors",
    title: "Best In Class Expert Mentors",
    short: "Mentors with real market experience & live coaching.",
    icon: IconMentors(),
  },
  {
    id: "materials",
    title: "Best In Class Study Materials",
    short: "Structured notes, templates & ready-to-use checklists.",
    icon: IconMaterials(),
  },
  {
    id: "tech",
    title: "Tech Based Learning",
    short: "Platform + live charts + practice sandboxes.",
    icon: IconTech(),
  },
  {
    id: "practical",
    title: "Practical Learning Experience",
    short: "Live market labs, simulated trades & debriefs.",
    icon: IconPractical(),
  },
  {
    id: "attention",
    title: "Personalised Attention",
    short: "Small batches, 1:1 mentoring and performance reviews.",
    icon: IconAttention(),
  },
  {
    id: "regional",
    title: "Regional Language",
    short: "Classes & materials available in local languages.",
    icon: IconRegional(),
  },
  {
    id: "saturday",
    title: "Saturday — Free Live Sessions",
    short: "Weekly free live sessions every Saturday — practice with mentors.",
    icon: IconSaturday(),
    special: true,
  },
];

/* ---------- SVG icon factories (full definitions) ---------- */
function IconMentors() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z"></path>
      <path d="M8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11z"></path>
      <path d="M2 20c0-3 3-6 8-6s8 3 8 6"></path>
    </svg>
  );
}
function IconMaterials() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 7l9-4 9 4-9 4z"></path>
      <path d="M21 14l-9 4-9-4"></path>
      <path d="M21 7v7"></path>
      <path d="M3 7v7"></path>
    </svg>
  );
}
function IconTech() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="14" rx="2"></rect>
      <path d="M7 21v-3h10v3"></path>
    </svg>
  );
}
function IconPractical() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 7h18"></path>
      <path d="M8 21V11"></path>
      <path d="M16 21V11"></path>
      <path d="M2 11h20"></path>
    </svg>
  );
}
function IconAttention() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16 5.5 20l2-7L2 9h7z"></path>
    </svg>
  );
}
function IconRegional() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2l4 8-4 2-4-2 4-8z"></path>
      <path d="M2 21l20 0"></path>
    </svg>
  );
}
function IconSaturday() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="36"
      height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="2"></rect>
      <path d="M16 2v4"></path>
      <path d="M8 2v4"></path>
      <path d="M3 10h18"></path>
    </svg>
  );
}

/* ---------- Component ---------- */
export default function WhyChooseStockDaddy() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(
      () => setActive((s) => (s + 1) % FEATURES.length),
      2000 // <-- changed to 2000ms for every 2 seconds
    );
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <>
      <style>{`
        :root{--max-w:100%;--bg:#f8fbff;--accent:#0b3440;--muted:#55606a;--glass:rgba(255,255,255,0.55);--glass-border:rgba(11,52,64,0.06);--accent-cta:#1878ff}
        .why-root {
  width: 100% !important;
  max-width: 100% !important;

  margin: 10px auto; /* center */
  padding: 40px 40px; /* side padding controlled */

  background: linear-gradient(180deg, var(--bg), #fff 40%);
  font-family: "Poppins", system-ui, sans-serif;
  border-radius: 0;  /* remove rounding that creates gap */
  box-sizing: border-box;
}
        // .why-root{font-family:"Poppins",system-ui,-apple-system,"Segoe UI",Roboto,Arial;max-width:var(--max-w);margin:20px ;padding:36px 20px;background:linear-gradient(180deg,var(--bg),#fff 40%);border-radius:16px;position:relative}
        .why-top{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-bottom:18px}
.why-top {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;   /* center horizontally */
  justify-content: center;
  gap: 6px;
  margin-bottom: 18px;
}
        .why-title{margin:0;font-size:40px;font-weight:800;color:var(--accent)}
        .why-sub{color:var(--muted);font-size:14px}
        .why-grid{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:start;position:relative}
/* ⭐ FIXED SPOTLIGHT CARD (FINAL) */
.spotlight {
  background:#0b2433;
  padding:20px;
  border-radius:14px;
  box-shadow:1 18px 40px rgba(11,52,64,0.06);
  
  /* ⭐ FIXED SIZE */
  width: 100% !important;     /* full width of left container */
  // max-width: 720px !important; /* optional: exact width you want */
  height: 160px !important;    /* fixed height */

  /* ⭐ PREVENT RESIZING */
  overflow: hidden !important;

  display:flex;
  align-items:center;
  justify-content:flex-start;
}

/* ⭐ Spot wrapper fixed inside */
.spot-wrapper{
  width:100%;
  height:100%;
  overflow:hidden;
  display:flex;
  gap:18px;
}

/* ⭐ Responsive FIX: keep same size on mobile */
@media (max-width:1000px){
  .spotlight{
    width:100% !important;
    max-width:100% !important;
    height:260px !important;
  }
}

        .spot-icon{width:92px;height:92px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(180deg,rgba(11,52,64,0.06),rgba(255,255,255,0.03));color:var(--accent);flex-shrink:0}
        .spot-info h3{margin:0;font-size:20px;font-weight:800;color:var(--accent)}
        .spot-info p{margin:8px 0 0 0;color:var(--muted);font-size:15px;line-height:1.6}

        /* === override: make spotlight inner text white === */
        .spotlight .spot-info h3{ color: #ffffff !important; }
        .spotlight .spot-info p{ color: rgba(255,255,255,0.88) !important; }

        .spot-cta{margin-top:5px;display:flex;gap:12px;align-items:center}
        .btn-outline{background:var(--accent-cta);color:white;border:none;padding:10px 14px;border-radius:10px ;cursor:pointer; height:40px; font-size:14px; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; justify-content:center}
        .btn-ghost{background:transparent;border:1px solid var(--glass-border);padding:10px 12px;border-radius:10px;color:var(--accent);font-weight:700;cursor:pointer}

        /* constant card that will be below the spotlight (left column) */
        .constant-card{margin-top:18px;border-radius:12px; overflow:hidden;box-shadow:0 18px 40px rgba(11,52,64,0.04);border:1px solid var(--glass-border);background:white}
        .constant-card img{width:100%; height:500px; object-fit:cover; display:block; }

        .mini-grid{display:grid;grid-template-columns:1fr;gap:12px}
        .mini-card{background:var(--glass);border-radius:12px;padding:12px;display:flex;gap:12px;align-items:center;border:1px solid var(--glass-border);cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;backdrop-filter:blur(6px) saturate(120%)}
        .mini-card:hover,.mini-card.active{transform:translateY(-6px);box-shadow:0 18px 40px rgba(11,52,64,0.08);z-index:4}
        .mini-icon{width:56px;height:56px;border-radius:10px;display:grid;place-items:center;color:var(--accent);background:linear-gradient(180deg,rgba(11,52,64,0.04),rgba(255,255,255,0.02));flex-shrink:0}
        .mini-title{font-weight:700;color:var(--accent);margin:0;font-size:14px}
        .mini-sub{margin:4px 0 0 0;color:var(--muted);font-size:13px}

        @media (max-width:1000px){.why-grid{grid-template-columns:1fr}.constant-card img{height:180px}.spotlight{min-height:180px}.mini-grid{grid-template-columns:repeat(2,1fr);gap:10px}}
        @media (max-width:640px){.mini-grid{grid-template-columns:1fr}.constant-card img{height:180px}}
      `}</style>

      <section className="why-root" aria-labelledby="whyHeading">
        <div className="why-top">
          <div>
            <h2 id="whyHeading" className="why-title">
              Why Choose StockDaddy
            </h2>
            <div className="why-sub">
              Practical, tech-powered learning with mentors who trade — local
              language support & weekly free sessions.
            </div>
          </div>

          <div
            style={{
              textAlign: "right",
              color: "var(--muted)",
              fontWeight: 800,
            }}
          >
            {active + 1} / {FEATURES.length}
          </div>
        </div>

        <div className="why-grid">
          {/* LEFT column: spotlight + constant card BELOW it */}
          <div>
            <div
              className="spotlight"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              role="region"
              aria-label="Spotlight feature"
            >
              <div className="spot-wrapper">
                <div className="spot-icon" aria-hidden>
                  {FEATURES[active].icon}
                </div>

                <div className="spot-info">
                  <h3>
                    {FEATURES[active].title}
                    {FEATURES[active].special && (
                      <span style={{ marginLeft: 10 }}>FREE Sat</span>
                    )}
                  </h3>
                  <p>{FEATURES[active].short}</p>

                  <div className="spot-cta">
                    {FEATURES[active].special ? (
                      <>
                        <button
                          className="btn-primary"
                          onClick={() =>
                            window.alert(
                              "See schedule — Saturday free sessions"
                            )
                          }
                        >
                          Join Saturday
                        </button>
                        {/* <button
                          className="btn-ghost"
                          onClick={() => window.alert("See full schedule")}
                        >
                          Full Schedule
                        </button> */}
                      </>
                    ) : (
                      <>
                        <a
                          className="btn-outline"
                          href="/#contact"
                          onClick={(e) => {
                            e.preventDefault();

                            // Already on home page → smooth scroll
                            if (window.location.pathname === "/") {
                              const el = document.getElementById("contact");
                              if (el) {
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            } else {
                              // Not on home → go to home + auto scroll (Home.jsx will handle it)
                              window.location.href = "/#contact";
                            }
                          }}
                        >
                          Contact
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* constant image card under spotlight */}
            <div className="constant-card" aria-hidden>
              <img src={satImg} alt="StockDaddy constant" loading="eager" />
            </div>
          </div>

          {/* RIGHT column: mini-grid only */}
          <div>
            <div
              className="mini-grid"
              role="list"
              aria-label="Why choose features"
            >
              {FEATURES.map((f, i) => (
                <div
                  key={f.id}
                  role="listitem"
                  className={`mini-card ${i === active ? "active" : ""}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <div className="mini-icon" aria-hidden>
                    {f.icon}
                  </div>

                  <div>
                    <div className="mini-title">
                      {f.title}
                      {f.special ? (
                        <span
                          style={{
                            marginLeft: 8,
                            color: "var(--accent-cta)",
                            fontWeight: 800,
                          }}
                        >
                          Sat
                        </span>
                      ) : null}
                    </div>
                    <div className="mini-sub">{f.short}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
