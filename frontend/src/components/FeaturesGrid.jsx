import React from "react";

/* simple SVG icons (same as before) */
const IconCommunity = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="28"
    height="28"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M2 21c0-3.5 2.5-6 7-6" />
    <path d="M22 21c0-3.5-2.5-6-7-6" />
  </svg>
);
const IconClass = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="28"
    height="28"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="3" width="18" height="12" rx="2" />
    <path d="M12 15v6" />
    <path d="M8 21h8" />
  </svg>
);
const IconEvents = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="28"
    height="28"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M3 10h18" />
    <path d="M8 2v4" />
    <path d="M16 2v4" />
  </svg>
);
const IconDoubt = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="28"
    height="28"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 1-.9 1.7" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);
const IconCounselling = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="28"
    height="28"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.5 8.5 0 1 1 21 11.5z" />
    <path d="M8 15l-2.5 2.5" />
    <path d="M16 15l2.5 2.5" />
  </svg>
);
const IconCowork = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="28"
    height="28"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="2" y="10" width="20" height="10" rx="2" />
    <path d="M7 10V6h10v4" />
    <path d="M12 6v4" />
  </svg>
);

const features = [
  {
    id: 1,
    title: "Trading Community / Group",
    desc: "Join a close-knit group of traders for daily idea exchange, mentorship threads and community challenges.",
    icon: <IconCommunity />,
  },
  {
    id: 2,
    title: "Live Offline Classes",
    desc: "Instructor-led classroom sessions with live market labs — learn by watching, doing and practicing.",
    icon: <IconClass />,
  },
  {
    id: 3,
    title: "Live Events",
    desc: "Weekly meetups, guest sessions and open-mic events to share strategies and live trade breakdowns.",
    icon: <IconEvents />,
  },
  {
    id: 4,
    title: "Doubt Counter",
    desc: "A staffed doubt desk during market hours — ask specific queries and clear roadblocks instantly.",
    icon: <IconDoubt />,
  },
  {
    id: 5,
    title: "Student Counselling",
    desc: "One-on-one counselling to plan your learning path, skills roadmap and placement guidance.",
    icon: <IconCounselling />,
  },
  {
    id: 6,
    title: "Free Co-working Space",
    desc: "Access to a trading-ready co-working area with high-speed net — practice with peers and mentors.",
    icon: <IconCowork />,
  },
];

export default function FeaturesGrid() {
  return (
    <>
      <style>{`
        :root {
          --max-w: 1220px;
          --pad: 20px;
          --accent: #0b3440;
          --muted: #6b7280;
          --card-bg: #fff;
          --radius: 12px;
          --gap: 26px;
        }

        .features-root{
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          max-width: var(--max-w);
          margin: 20px auto;
          padding: 28px var(--pad);
        }

        .features-head { text-align:center; margin-bottom:20px; margin-top:-20px; }
        .features-head h2 { margin:0; font-size:40px; color: var(--accent); font-weight:800; }
        .features-head .stripe { display:inline-block; width:64px; height:6px; border-radius:6px; margin-top:10px; background: linear-gradient(90deg,#1878ff 0%, #0b9be6 100%); }

        /* STRICT 3 columns on desktop, 2 on tablet, 1 on mobile */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--gap);
        }

        .feature-card {
          background: var(--card-bg);
          border-radius: var(--radius);
          padding: 22px;
          display:flex;
          flex-direction: column;
          gap: 12px;
          min-height: 210px;
          box-shadow:
            0 8px 20px rgba(11,52,64,0.04),
            0 18px 40px rgba(24,120,255,0.06);
          transition: box-shadow .22s ease, transform .18s ease;
        }

        /* hover: subtle shadow only (no translate/shift) */
        .feature-card:hover {
          box-shadow:
            0 20px 50px rgba(24,120,255,0.12),
            0 32px 80px rgba(11,52,64,0.08);
        }

        .feature-top { display:flex; gap:14px; align-items:center; }
        .feature-icon { width:54px; height:54px; border-radius:10px; display:grid; place-items:center; color:#0b3440; background: linear-gradient(180deg, rgba(11,52,64,0.03), rgba(11,52,64,0.01)); }
        .feature-title { font-size:16px; font-weight:700; color:#0b3440; margin:0; }
        .feature-desc { font-size:14px; color:var(--muted); line-height:1.6; margin-top:6px; flex:1; }

        .feature-footer { display:flex; gap:12px; align-items:center; margin-top:12px; }
        .btn-details { background: transparent; border: 1px solid rgba(11,52,64,0.06); padding:8px 12px; border-radius:9px; color:var(--accent); font-weight:600; cursor:pointer; }
        .link-contact { background:transparent; border:none; color:#1878ff; font-weight:700; cursor:pointer; padding:0; }

        /* responsive */
        @media (max-width:980px){
          .features-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width:640px){
          .features-grid { grid-template-columns: 1fr; }
          .feature-card { padding:18px; }
        }
      `}</style>

      <section className="features-root" aria-labelledby="featuresHeading">
        <div className="features-head">
          <h2 id="featuresHeading">Beyond the courses</h2>
          <div className="stripe" aria-hidden />
        </div>

        <div className="features-grid" role="list">
          {features.map((f) => (
            <article
              key={f.id}
              className="feature-card"
              role="listitem"
              aria-labelledby={`feat-${f.id}`}
            >
              <div className="feature-top">
                <div className="feature-icon" aria-hidden>
                  {f.icon}
                </div>
                <h3 id={`feat-${f.id}`} className="feature-title">
                  {f.title}
                </h3>
              </div>

              <p className="feature-desc">{f.desc}</p>

              <div className="feature-footer">
                <button
                  className="link-contact"
                  onClick={() => alert(`${f.title} — Contact`)}
                >
                  Contact
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
