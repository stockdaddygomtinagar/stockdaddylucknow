import React, { useState } from "react";

/**
 * LifeAtStockDaddy.jsx
 * - YouTube thumbnails
 * - Click → Thumbnail replaces with autoplay YouTube embed
 * - Fully responsive 3-column layout
 */

const videos = [
  {
    id: "ogfQkb_1MEQ",
    thumbnail: "https://img.youtube.com/vi/ogfQkb_1MEQ/maxresdefault.jpg",
    title: "Financial Freedom 2023",
  },
  {
    id: "jTPHpqd8Aes",
    thumbnail: "https://img.youtube.com/vi/jTPHpqd8Aes/maxresdefault.jpg",
    title: "StockDaddy Seminar – Student Interaction",
  },
  {
    id: "eYlb1QBmPco",
    thumbnail: "https://img.youtube.com/vi/eYlb1QBmPco/maxresdefault.jpg",
    title: "Financial Freedom 2022",
  },
];

export default function LifeAtStockDaddy() {
  const [playing, setPlaying] = useState(null);

  return (
    <>
      <style>{`
        .life-root {
          max-width: 1240px;
          margin: 20px auto;
          padding: 20px 20px;
          font-family: "Poppins";
          text-align: center;
        }

        .life-title {
          font-size: 40px;
          font-weight: 800;
          color: #0b3440;
           margin-top: 0px;
          margin-bottom: 38px;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 20px;
        }

        .video-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 14px;
          box-shadow: 0 18px 40px rgba(12, 50, 80, 0.12);
          transition: transform 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-6px);
        }

        .thumb-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(255,255,255,0.85);
          border-radius: 50%;
          display: grid;
          place-items: center;
          transition: 0.3s ease;
        }

        .play-btn:hover {
          background: white;
        }

        .play-btn svg {
          width: 32px;
          height: 32px;
          fill: #1878ff;
        }

        iframe {
          width: 100%;
          height: 280px;
          border-radius: 14px;
          border: none;
        }

        @media(max-width: 900px){
          .videos-grid {
            grid-template-columns: 1fr;
          }
          iframe, .thumb-img {
            height: 220px;
          }
        }
      `}</style>

      <div className="life-root">
        <h2 className="life-title">Life At StockDaddy</h2>

        <div className="videos-grid">
          {videos.map((v, i) => (
            <div className="video-card" key={i} onClick={() => setPlaying(i)}>
              {playing === i ? (
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img className="thumb-img" src={v.thumbnail} alt={v.title} />
                  <div className="play-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
