import React from "react";

export default function FloatingWhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/917054633632"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background-color: #25D366;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          cursor: pointer;
          z-index: 99999;
          transition: 0.2s ease-in-out;
        }

        .whatsapp-float img {
          width: 30px;
          height: 30px;
        }

        .whatsapp-float:hover {
          transform: scale(1.12);
        }
      `}</style>
    </>
  );
}
