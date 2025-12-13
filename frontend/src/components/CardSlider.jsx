// src/components/CardSlider.jsx
import React, { useState, useRef, useEffect } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

export default function CardSlider() {
  const baseCards = [
    {
      src: img1,
      title: "ENTRACKR",
      desc: "Funding and acquisitions in Indian startups this week",
      url: "https://entrackr.com/2022/02/funding-and-acquisitions-in-indian-startups-this-week-21-feb-26-feb/",
    },
    {
      src: img2,
      title: "ZEE NEWS",
      desc: "Latest headlines and breaking news",
      url: "https://zeenews.india.com/companies/stockdaddy-raises-undisclosed-funding-to-open-new-centres-2445226.html",
    },
    {
      src: img3,
      title: "Entrepreneur India",
      desc: "Startup & entrepreneur stories",
      url: "https://www.entrepreneur.com/en-in/news-and-trends/stockdaddy-raises-1-mn-to-expand-e-learning-platform-for/428074",
    },
    {
      src: img4,
      title: "YourStory",
      desc: "Indian startup ecosystem and founders",
      url: "https://yourstory.com/2022/02/funding-roundup-feb-23-finarkein-analytics-stockdaddy-presolv360",
    },
    {
      src: img5,
      title: "TOI",
      desc: "Top national and international news",
      url: "https://www.bwdisrupt.com/article/stock-market-emerging-field-to-build-a-career-418319",
    },
    {
      src: img6,
      title: "News18",
      desc: "Breaking news & live updates",
      url: "https://hindi.news18.com/news/tech/stockdaddy-app-easemytrade-investment-in-stock-market-update-news-today-ssnd-3945062.html",
    },
    {
      src: img7,
      title: "Economic Times",
      desc: "Business, markets, economy",
      url: "https://economictimes.indiatimes.com",
    },
  ];

  // duplicate for seamless loop
  const cards = baseCards.concat(baseCards);

  const trackRef = useRef(null);
  const styleRef = useRef(null); // to hold dynamic <style> content
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // animation speed in pixels per second (adjust to taste)
  const SPEED = 90; // px/sec — increase to go faster

  // placeholder for broken images
  const placeholder =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='140'>
       <rect width='100%' height='100%' fill='#f3f6ff'/>
       <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9aa7c9' font-size='14' font-family='Arial'>Image not found</text>
     </svg>`
    );

  const handleImgError = (e) => {
    e.currentTarget.src = placeholder;
  };

  // debug helper (safe) — always pass url explicitly
  const openUrlInNewTab = (url) => {
    // defensive: ensure url is a string
    console.log("DEBUG openUrlInNewTab called with:", url);
    if (!url || typeof url !== "string") {
      console.warn("openUrlInNewTab: invalid url:", url);
      return;
    }
    // open in new tab safely
    window.open(url, "_blank", "noopener");
  };

  // create dynamic keyframes based on track width
  const setupAnimation = () => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth;
    const translateDistance = Math.floor(totalWidth / 2);
    const durationSec = Math.max(8, translateDistance / SPEED);

    const css = `
      @keyframes scrollDynamic {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${translateDistance}px); }
      }

      .card-slider-track img { -webkit-user-drag: none; user-select: none; -webkit-user-select: none; }
    `;

    if (styleRef.current) {
      try {
        document.head.removeChild(styleRef.current);
      } catch (e) {}
      styleRef.current = null;
    }

    const tag = document.createElement("style");
    tag.type = "text/css";
    tag.appendChild(document.createTextNode(css));
    document.head.appendChild(tag);
    styleRef.current = tag;

    track.style.animation = `scrollDynamic ${durationSec}s linear infinite`;
    track.style.animationPlayState = overlayOpen ? "paused" : "running";
  };

  useEffect(() => {
    const id = setTimeout(setupAnimation, 100);
    const onResize = () => {
      clearTimeout(window.__card_slider_resize);
      window.__card_slider_resize = setTimeout(setupAnimation, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", onResize);
      if (styleRef.current) {
        try {
          document.head.removeChild(styleRef.current);
        } catch (e) {}
        styleRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // pause/resume animation when overlayOpen changes
  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.animationPlayState = overlayOpen
      ? "paused"
      : "running";
  }, [overlayOpen]);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "48px 0",
        background: "linear-gradient(to bottom,#4e62e3,#6cc7ff)",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Track container */}
      <div
        ref={trackRef}
        className="card-slider-track"
        style={{
          display: "flex",
          gap: "22px",
          alignItems: "center",
        }}
      >
        {cards.map((card, idx) => {
          const origIndex = idx % baseCards.length;
          const isActive = overlayOpen && activeIndex === origIndex;
          const isDuplicate = idx >= baseCards.length;

          // make sure url exists for this card
          const cardUrl =
            baseCards[origIndex] && baseCards[origIndex].url
              ? baseCards[origIndex].url
              : "";

          return (
            <a
              key={`${origIndex}-${isDuplicate ? "dup" : "orig"}`}
              href={cardUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // prevent default so overlay shows immediately and we control timing
                e.preventDefault();
                setActiveIndex(origIndex);
                setOverlayOpen(true);

                // small delay then open — pass explicit url (no undefined)
                setTimeout(() => openUrlInNewTab(cardUrl), 150);

                // close overlay after a bit
                setTimeout(() => setOverlayOpen(false), 700);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setActiveIndex(origIndex);
                  setOverlayOpen(true);
                  setTimeout(() => openUrlInNewTab(cardUrl), 150);
                  setTimeout(() => setOverlayOpen(false), 700);
                }
              }}
              style={{
                textDecoration: "none",
                color: "inherit",
                outline: "none",
              }}
            >
              <div
                role="button"
                tabIndex={0}
                style={{
                  width: "280px",
                  height: "150px",
                  background: "#ffffff",
                  borderRadius: "18px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: isActive
                    ? "0 18px 48px rgba(0,0,0,0.25)"
                    : "0 6px 20px rgba(0,0,0,0.09)",
                  cursor: "pointer",
                  transform: isActive ? "scale(1.06)" : "scale(1)",
                  transition: "transform 260ms, box-shadow 260ms",
                  zIndex: isActive ? 30 : 1,
                  userSelect: "none",
                }}
              >
                <img
                  src={card.src}
                  alt={card.title}
                  onError={handleImgError}
                  style={{
                    width: "160px",
                    height: "auto",
                    objectFit: "contain",
                    pointerEvents: "none",
                  }}
                  draggable={false}
                />
              </div>
            </a>
          );
        })}
      </div>

      {/* overlay visual */}
      {overlayOpen && activeIndex !== null && (
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              background: "rgba(8,10,20,0.12)",
              backdropFilter: "blur(1.5px)",
            }}
          />
          <div
            style={{
              width: "460px",
              height: "380px",
              borderRadius: "36px",
              background: "#183b9b",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
              paddingTop: "36px",
              paddingBottom: "28px",
              boxShadow: "0 40px 80px rgba(10,20,60,0.45)",
              color: "white",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "88px",
                background: "#fff",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-18px",
                boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
              }}
            >
              <img
                src={baseCards[activeIndex].src}
                alt={baseCards[activeIndex].title}
                onError={handleImgError}
                style={{
                  width: "160px",
                  objectFit: "contain",
                  pointerEvents: "none",
                }}
                draggable={false}
              />
            </div>

            <div
              style={{
                padding: "0 26px",
                textAlign: "center",
                fontSize: "18px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              {baseCards[activeIndex].desc}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
