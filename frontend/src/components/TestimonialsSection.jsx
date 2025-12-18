import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aman Verma",
      role: "Beginner Trader",
      message:
        "StockDaddy helped me understand the market from scratch. Mentors explain everything in a very simple way.",
    },
    {
      name: "Priya Singh",
      role: "College Student",
      message:
        "Amazing learning experience. Practical sessions and proper guidance boosted my confidence a lot.",
    },
    {
      name: "Rahul Sharma",
      role: "Working Professional",
      message:
        "Well-structured content and great mentor support. Totally worth joining for serious learners.",
    },
  ];

  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 5px 20px;
          background: #f9fafb;
          text-align: center;
          margin-top: 20px;
        }

        .testimonials-section h2 {
          font-size:40px;
          font-weight:800;
          margin-bottom: 10px;
        }

        .testimonials-section .subtitle {
          color: #555;
          max-width: 600px;
          margin: 0 auto 40px;
          font-size: 1rem;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: auto;
        }

        .testimonial-card {
          background: #ffffff;
          padding: 26px 22px;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
        }

        .testimonial-card .message {
          font-size: 0.95rem;
          color: #333;
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .testimonial-card h4 {
          font-weight: 600;
          margin-bottom: 4px;
        }

        .testimonial-card span {
          font-size: 0.85rem;
          color: #777;
        }

        @media (max-width: 600px) {
          .testimonials-section {
            padding: 60px 16px;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <h2>What Our Students Say ❤️</h2>
        <p className="subtitle">
          Honest feedback from students who are growing with us
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="message">“{item.message}”</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
