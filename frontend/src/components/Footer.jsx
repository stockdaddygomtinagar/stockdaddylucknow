// src/components/FooterStockDaddyDark.jsx
import React, { useEffect, useState } from "react";
import logoImg from "../assets/logo.png";

/**
 * FooterStockDaddyDark.jsx
 * - Improved responsive behavior:
 *   - Uses `isMobile` state (matchMedia) to adjust inline styles cleanly.
 *   - On mobile: columns stack vertically, gaps reduced, map becomes full-width, icons wrap.
 *   - On desktop: original layout preserved.
 */

export default function FooterStockDaddyDark() {
  // detect mobile (<= 920px) — tweak breakpoint if needed
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 920px)");
    const set = (m) => setIsMobile(m.matches ?? m);
    set(mq);

    const handler = (e) => setIsMobile(e.matches);
    if (typeof mq.addEventListener === "function")
      mq.addEventListener("change", handler);
    else if (typeof mq.addListener === "function") mq.addListener(handler);

    return () => {
      if (typeof mq.removeEventListener === "function")
        mq.removeEventListener("change", handler);
      else if (typeof mq.removeListener === "function")
        mq.removeListener(handler);
    };
  }, []);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.294936427126!2d80.99543617520714!3d26.89205556045249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2fa96df9913%3A0x683e4c2aaca5f05d!2sHausariya%20Chauraha%2C%20Viram%20Khand%205%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1707300000000";

  // styles that depend on isMobile — computed objects keep everything inline
  const wrapResponsive = {
    ...wrap,
    paddingTop: isMobile ? 20 : 32,
    paddingBottom: isMobile ? 12 : 18,
  };

  const innerResponsive = {
    ...inner,
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 16 : 40,
    padding: isMobile ? "12px" : "20px",
    alignItems: isMobile ? "flex-start" : "flex-start",
  };

  const colAddressResp = {
    ...colAddress,
    flex: isMobile ? "1 1 auto" : "1 1 480px",
    gap: isMobile ? 8 : 12,
    marginBottom: isMobile ? 6 : 0,
  };

  const addressAndMapResp = {
    ...addressAndMap,
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 12 : 18,
    alignItems: isMobile ? "stretch" : "flex-start",
  };

  const mapWrapResp = {
    ...mapWrap,
    width: isMobile ? "100%" : 200,
    minWidth: isMobile ? "100%" : 200,
    height: isMobile ? 160 : 120,
  };

  const colLinksResp = {
    ...colLinks,
    flex: isMobile ? "1 1 auto" : "0 0 200px",
    gap: isMobile ? 6 : 8,
    marginBottom: isMobile ? 6 : 0,
  };

  const colSocialResp = {
    ...colSocial,
    flex: isMobile ? "1 1 auto" : "0 0 300px",
    gap: isMobile ? 8 : 12,
    marginBottom: isMobile ? 6 : 0,
  };

  const socialRowResp = {
    ...socialRow,
    flexWrap: "wrap",
    gap: 10,
    marginTop: 8,
  };

  const bottomBarResp = {
    ...bottomBar,
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 8 : 0,
    alignItems: isMobile ? "flex-start" : "center",
    padding: isMobile ? "10px 12px" : "12px 20px",
  };

  return (
    <footer style={wrapResponsive}>
      <div style={innerResponsive}>
        {/* Address + Map */}
        <div style={colAddressResp}>
          <div style={logoRow}>
            <img
              src={logoImg}
              alt="StockDaddy"
              style={{ width: 140, height: "auto" }}
            />
          </div>

          <div style={addressAndMapResp}>
            <div style={addressBlock}>
              <h4 style={heading}>Address</h4>
              <p style={addressText}>
                5/21, Hausariya Chauraha, Above Family Bazar, 2nd Floor, Viram
                Khand 5, Gomti Nagar, Near Jeevan Plaza,
                <br />
                Lucknow, Uttar Pradesh – 226010
              </p>

              <p style={addressText}>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@stockdaddy.in" style={linkLight}>
                  support@stockdaddy.in
                </a>
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+917054633632" style={linkLight}>
                  +917054633632
                </a>
              </p>
            </div>

            <div style={mapWrapResp}>
              <iframe
                title="StockDaddy Map"
                src={mapSrc}
                style={mapStyle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div style={colLinksResp}>
          <h4 style={heading}>Quick Links</h4>
          <a
            style={linkItem}
            href="https://www.stockdaddy.in/terms-and-conditions"
            target="_blank"
            rel="noreferrer"
          >
            Terms &amp; Conditions
          </a>
          <a
            style={linkItem}
            href="https://www.stockdaddy.in/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div style={colSocialResp}>
          <h4 style={heading}>Follow Us</h4>
          <p style={socialNote}>
            Sign up to get the latest news and updates from StockDaddy.
          </p>

          <div style={socialRowResp}>
            <a
              href="https://www.instagram.com/stockdaddy.gomtinagar_lucknow?igsh=MTlzNDR5bzQ3d2Nndw=="
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="Instagram"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5.3A4.7 4.7 0 1112 16.7 4.7 4.7 0 0112 7.3zm6.2-.95a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/stockdaddyapp/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="Facebook"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12A10 10 0 1010.5 22v-7H8v-3h2.5v-2.3c0-2.1 1.3-3.2 3.3-3.2.9 0 1.7.1 2 .1v2.4h-1.2c-1 0-1.3.6-1.3 1.2V12H17l-.5 3h-2v7A10 10 0 0022 12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/stock-daddy/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="LinkedIn"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5zM3 21h4V9H3v12zm14-12c-2.1 0-3.4 1.2-4 2.1V9h-4v12h4v-6c0-1.1.9-2 2-2s2 .9 2 2v6h4v-7c0-3.3-2.2-5-4-5z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/c/StockDaddy"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="YouTube"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.01 3.01 0 00-2.12-2.137C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.55A3.01 3.01 0 00.502 6.186 31.45 31.45 0 000 12a31.45 31.45 0 00.502 5.814 3.01 3.01 0 002.12 2.137C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.55a3.01 3.01 0 002.12-2.137A31.45 31.45 0 0024 12a31.45 31.45 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div style={bottomBarResp}>
        <div style={{ color: "#b9c7cf" }}>
          © {new Date().getFullYear()} StockDaddy. All rights reserved.
        </div>
        {/* <div style={{ color: "#8fa6b3" }}>Designed by ArikaB2B</div> */}
        <a
          href="https://arikab2b.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#8fa6b3",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Designed by ArikaB2B
        </a>
      </div>
    </footer>
  );
}

/* ---------- Base Inline Styles (kept mostly same) ---------- */

const wrap = {
  width: "100%",
  background: "#0b2433",
  paddingTop: 32,
  paddingBottom: 18,
  boxSizing: "border-box",
};

const inner = {
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  gap: 40,
  padding: "20px",
  boxSizing: "border-box",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

const colAddress = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  flex: "1 1 480px",
};

const logoRow = { display: "flex", alignItems: "center", gap: 12 };

const addressAndMap = {
  display: "flex",
  gap: 18,
  alignItems: "flex-start",
};

const addressBlock = {
  color: "#e6f3fb",
  lineHeight: 1.7,
  fontSize: 14,
  maxWidth: 420,
};

const mapWrap = {
  width: 200,
  minWidth: 200,
  height: 120,
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
};

const mapStyle = {
  width: "100%",
  height: "100%",
  border: 0,
};

const colLinks = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  flex: "0 0 200px",
};

const colSocial = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  flex: "0 0 300px",
};

const heading = {
  color: "#ffffff",
  margin: 0,
  marginBottom: 6,
  fontSize: 18,
  fontWeight: 700,
};

const addressText = {
  color: "#d6eef9",
  margin: 0,
  fontSize: 14,
};

const linkLight = {
  color: "#aee6ff",
  textDecoration: "none",
  fontWeight: 600,
};

const linkItem = {
  color: "#cfefff",
  textDecoration: "none",
  padding: "6px 0",
  fontSize: 15,
};

const socialNote = { color: "#cfe7ef", margin: 0, maxWidth: 340 };

const socialRow = { display: "flex", gap: 12, marginTop: 6 };

const iconLink = {
  display: "inline-flex",
  width: 48,
  height: 48,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.04)",
  textDecoration: "none",
};

const bottomBar = {
  maxWidth: 1200,
  margin: "18px auto 0",
  padding: "12px 20px",
  display: "flex",
  justifyContent: "space-between",
  boxSizing: "border-box",
};

const socialCircle = {
  width: 44,
  height: 44,
  borderRadius: 44,
  background: "#2d7df4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 18,
  color: "white",
};
