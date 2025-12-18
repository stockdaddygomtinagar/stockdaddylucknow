// // ContactPageBlue.jsx

// import React, { useState, useEffect } from "react";
// import emailjs from "emailjs-com";

// export default function ContactPageFrontend() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     whatsapp: "",
//     address: "",
//     query: "",
//   });
//   const [status, setStatus] = useState(null);

//   // NEW: show/hide right card based on window width
//   const [showCard, setShowCard] = useState(true);
//   useEffect(() => {
//     // function to set based on breakpoint (mobile < 768)
//     const update = () => {
//       if (typeof window === "undefined") return;
//       setShowCard(window.innerWidth >= 768);
//     };

//     update(); // initial
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   const saved = JSON.parse(localStorage.getItem("contacts") || "[]");
//   //   saved.unshift({ ...form, createdAt: new Date().toISOString() });
//   //   localStorage.setItem("contacts", JSON.stringify(saved));

//   //   setStatus("Message saved! (backend add later)");
//   //   setForm({
//   //     name: "",
//   //     email: "",
//   //     contact: "",
//   //     whatsapp: "",
//   //     address: "",
//   //     query: "",
//   //   });
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("http://localhost:5000/api/contacts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) {
//         const err = await res.json().catch(() => ({}));
//         throw new Error(err.message || "Failed to save to DB");
//       }

//       // EmailJS Code here →
//       const SERVICE_ID = "your_service_id";
//       const TEMPLATE_ID = "your_template_id";
//       const USER_ID = "your_public_user_id";

//       const templateParams = {
//         from_name: form.name,
//         from_email: form.email,
//         contact_no: form.contact || "",
//         whatsapp_no: form.whatsapp || "",
//         address: form.address || "",
//         message: form.query,
//       };

//       await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

//       setStatus("Message saved & email sent ✔️");
//       setForm({
//         name: "",
//         email: "",
//         contact: "",
//         whatsapp: "",
//         address: "",
//         query: "",
//       });
//     } catch (err) {
//       console.error(err);
//       setStatus("Something went wrong — try again.");
//     }
//   };

//   // NEW: dynamic container style to switch between 2-col and 1-col
//   const dynamicContainer = {
//     ...container,
//     gridTemplateColumns: showCard ? "1fr 380px" : "1fr",
//   };

//   return (
//     <div id="contact" style={page}>
//       <div style={dynamicContainer}>
//         {/* LEFT SIDE FORM */}
//         <div style={left}>
//           {/* <p style={tag}>CONTACT US</p> */}
//           <h1 style={heading}>Contact Us</h1>

//           <form style={formBox} onSubmit={handleSubmit}>
//             {/* Name + Email */}
//             <div style={row}>
//               <div style={{ flex: 1 }}>
//                 <label style={label}>Your Name *</label>
//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Ex. John Doe"
//                   style={input}
//                 />
//               </div>

//               <div style={{ flex: 1 }}>
//                 <label style={label}>Email *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="example@gmail.com"
//                   style={input}
//                 />
//               </div>
//             </div>

//             {/* Contact + WhatsApp */}
//             <div style={row}>
//               <div style={{ flex: 1 }}>
//                 <label style={label}>Contact No *</label>
//                 <input
//                   name="contact"
//                   value={form.contact}
//                   onChange={handleChange}
//                   placeholder="+91 XXXXX XXXXX"
//                   style={input}
//                 />
//               </div>

//               <div style={{ flex: 1 }}>
//                 <label style={label}>WhatsApp No.</label>
//                 <input
//                   name="whatsapp"
//                   value={form.whatsapp}
//                   onChange={handleChange}
//                   placeholder="+91 XXXXX XXXXX"
//                   style={input}
//                 />
//               </div>
//             </div>

//             {/* Address */}
//             <label style={label}>Address</label>
//             <input
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//               placeholder="Enter Address"
//               style={input}
//             />

//             {/* Query */}
//             <label style={label}>Your Message *</label>
//             <textarea
//               name="query"
//               value={form.query}
//               onChange={handleChange}
//               placeholder="Write here..."
//               rows="6"
//               style={textarea}
//             />

//             <button style={btn}>Send Message →</button>

//             {status && <div style={success}>{status}</div>}
//           </form>
//         </div>

//         {/* RIGHT SIDE BLUE CARD (renders only when showCard === true) */}
//         {showCard && (
//           <div style={rightCard}>
//             <h3 style={infoHeading}>Address</h3>
//             <p style={infoText}>
//               5/21, Hausariya Chauraha, Above Family Bazar, 2nd Floor, Viram
//               Khand 5, Gomti Nagar, Near Jeevan Plaza
//               <br />
//               Lucknow, Uttar Pradesh – 226010
//             </p>

//             <h3 style={infoHeading}>Contact</h3>
//             <p style={infoText}>
//               Phone:{" "}
//               <a href="tel:+917054633632" style={contactLink}>
//                 +917054633632
//               </a>
//               <br />
//               Email:{" "}
//               <a href="mailto:support@stockdaddy.in" style={contactLink}>
//                 support@stockdaddy.in
//               </a>
//             </p>

//             <h3 style={infoHeading}>Open Time</h3>
//             <p style={infoText}>
//               Monday – Friday: 10:00 – 20:00
//               <br />
//               Saturday – Sunday: 11:00 – 18:00
//             </p>

//             <h3 style={infoHeading}>Stay Connected</h3>
//             <div style={iconsRow}>
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/stockdaddy.gomtinagar_lucknow?igsh=MTlzNDR5bzQ3d2Nndw=="
//                 target="_blank"
//                 rel="noreferrer"
//                 style={iconLink}
//                 aria-label="Instagram"
//               >
//                 <div style={iconCircle}>
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5.3A4.7 4.7 0 1112 16.7 4.7 4.7 0 0112 7.3zm6.2-.95a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
//                   </svg>
//                 </div>
//               </a>

//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/stockdaddyapp/"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={iconLink}
//                 aria-label="Facebook"
//               >
//                 <div style={iconCircle}>
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M22 12A10 10 0 1010.5 22v-7H8v-3h2.5v-2.3c0-2.1 1.3-3.2 3.3-3.2.9 0 1.7.1 2 .1v2.4h-1.2c-1 0-1.3.6-1.3 1.2V12H17l-.5 3h-2v7A10 10 0 0022 12z" />
//                   </svg>
//                 </div>
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/company/stock-daddy/"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={iconLink}
//                 aria-label="LinkedIn"
//               >
//                 <div style={iconCircle}>
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5zM3 21h4V9H3v12zm14-12c-2.1 0-3.4 1.2-4 2.1V9h-4v12h4v-6c0-1.1.9-2 2-2s2 .9 2 2v6h4v-7c0-3.3-2.2-5-4-5z" />
//                   </svg>
//                 </div>
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://www.youtube.com/c/StockDaddy"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={iconLink}
//                 aria-label="YouTube"
//               >
//                 <div style={iconCircle}>
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M23.498 6.186a3.01 3.01 0 00-2.12-2.137C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.55A3.01 3.01 0 00.502 6.186 31.45 31.45 0 000 12a31.45 31.45 0 00.502 5.814 3.01 3.01 0 002.12 2.137C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.55a3.01 3.01 0 002.12-2.137A31.45 31.45 0 0024 12a31.45 31.45 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
//                   </svg>
//                 </div>
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const accentBlue = "#2d7df4";
// const darkBlue = "#0d1b2a";

// const page = {
//   width: "100%",
//   minHeight: "100vh",
//   background: "#ffffff",
//   padding: "40px",
//   display: "flex",
//   justifyContent: "center",
// };

// const container = {
//   width: "100%",
//   maxWidth: "1200px",
//   display: "grid",
//   gridTemplateColumns: "1fr 380px",
//   gap: "40px",
// };

// const left = { paddingRight: "16px" };

// const tag = {
//   color: accentBlue,
//   fontWeight: "700",
//   letterSpacing: "2px",
//   fontSize: "14px",
// };

// const heading = {
//   fontSize: "40px",
//   fontWeight: "800",
//   marginBottom: "30px",
// };

// const accent = {
//   color: accentBlue,
//   fontStyle: "italic",
// };

// const formBox = { display: "flex", flexDirection: "column", gap: "14px" };

// const row = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: "20px",
//   width: "100%",
// };

// const label = {
//   fontSize: "14px",
//   fontWeight: "600",
//   marginBottom: "4px",
// };

// const input = {
//   width: "100%",
//   padding: "14px 16px",
//   borderRadius: "12px",
//   background: "#f6f8fc",
//   border: "1px solid #d8e0ea",
//   fontSize: "16px",
//   outline: "none",
//   height: "50px",
//   boxSizing: "border-box",
// };

// const textarea = {
//   width: "100%",
//   padding: "14px 16px",
//   borderRadius: "12px",
//   background: "#f6f8fc",
//   border: "1px solid #d8e0ea",
//   fontSize: "16px",
//   outline: "none",
//   boxSizing: "border-box",
//   resize: "vertical",
// };

// const btn = {
//   marginTop: "10px",
//   padding: "14px",
//   background: accentBlue,
//   color: "white",
//   fontSize: "17px",
//   fontWeight: "700",
//   borderRadius: "12px",
//   border: "none",
//   cursor: "pointer",
// };

// const success = {
//   background: "#e5ffe8",
//   padding: "10px",
//   color: "#0c7f2a",
//   borderRadius: "10px",
//   marginTop: "12px",
// };

// const rightCard = {
//   background: darkBlue,
//   color: "white",
//   padding: "30px",
//   borderRadius: "26px",
//   borderTopRightRadius: "50px",
// };

// const infoHeading = { fontSize: "18px", fontWeight: "700", marginTop: "20px" };

// const infoText = {
//   fontSize: "14px",
//   opacity: 0.9,
//   lineHeight: "1.6",
//   marginTop: "6px",
// };

// const iconsRow = { display: "flex", gap: "12px", marginTop: "12px" };

// const iconCircle = {
//   width: "44px",
//   height: "44px",
//   borderRadius: "50%",
//   background: accentBlue,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "white",
//   fontWeight: "700",
//   fontSize: "18px",
// };

// const iconLink = {
//   textDecoration: "none",
// };
// const contactLink = {
//   color: "#aee6ff",
//   textDecoration: "none",
//   fontWeight: 600,
// };

// ContactPageBlue.jsx

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ContactPageFrontend() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    whatsapp: "",
    address: "",
    query: "",
  });
  const [status, setStatus] = useState(null); // null | "Sending..." | "Message saved & email sent ✔️" | "Something went wrong — try again."

  // NEW: show/hide right card based on window width
  const [showCard, setShowCard] = useState(true);
  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      setShowCard(window.innerWidth >= 768);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // EmailJS init once on mount
  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (e) {
        console.warn("EmailJS init warning:", e);
      }
    } else {
      console.warn(
        "EmailJS public key missing: set REACT_APP_EMAILJS_PUBLIC_KEY in .env"
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic front validation (you can expand)
    if (!form.name || !form.email || !form.contact || !form.query) {
      setStatus("Please fill required fields (name, email, contact, message).");
      return;
    }

    setStatus("Sending...");

    try {
      // 1) Save to backend (if you want to keep this)
      const res = await fetch(
        "https://stockdaddylucknow-2.onrender.com/api/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            createdAt: new Date().toISOString(),
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to save to DB");
      }
      // TEMPORARILY DISABLED BACKEND
      // console.log("Skipping backend save... Testing EmailJS only.");

      // 2) EmailJS send
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // already init'ed above

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("Missing EmailJS env variables:", {
          SERVICE_ID,
          TEMPLATE_ID,
          PUBLIC_KEY,
        });
        setStatus("Email service not configured. Contact admin.");
        return;
      }

      const templateParams = {
        from_name: form.name || "Anonymous",
        from_email: form.email || "no-reply@example.com",
        contact_no: form.contact || "",
        whatsapp_no: form.whatsapp || "",
        address: form.address || "",
        message: form.query || "",
        time: new Date().toLocaleString(), // human-readable timestamp
      };

      // send(serviceID, templateID, templateParams, userID) — userID optional if init used
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setStatus("Message saved & email sent ✔️");
      setForm({
        name: "",
        email: "",
        contact: "",
        whatsapp: "",
        address: "",
        query: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("Something went wrong — try again.");
    }
  };

  // NEW: dynamic container style to switch between 2-col and 1-col
  const dynamicContainer = {
    ...container,
    gridTemplateColumns: showCard ? "1fr 380px" : "1fr",
  };

  return (
    <div id="contact" style={page}>
      <div style={dynamicContainer}>
        {/* LEFT SIDE FORM */}
        <div style={left}>
          <h1 style={heading}>Contact Us</h1>

          <form style={formBox} onSubmit={handleSubmit}>
            {/* Name + Email */}
            <div style={row}>
              <div style={{ flex: 1 }}>
                <label style={label}>Your Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ex. John Doe"
                  style={input}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label style={label}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  style={input}
                />
              </div>
            </div>

            {/* Contact + WhatsApp */}
            <div style={row}>
              <div style={{ flex: 1 }}>
                <label style={label}>Contact No *</label>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  style={input}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label style={label}>WhatsApp No.</label>
                <input
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  style={input}
                />
              </div>
            </div>

            {/* Address */}
            <label style={label}>Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter Address"
              style={input}
            />

            {/* Query */}
            <label style={label}>Your Message *</label>
            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              placeholder="Write here..."
              rows="6"
              style={textarea}
            />

            <button
              style={btn}
              type="submit"
              disabled={status === "Sending..."}
            >
              {status === "Sending..." ? "Sending..." : "Send Message →"}
            </button>

            {status && <div style={success}>{status}</div>}
          </form>
        </div>

        {/* RIGHT SIDE BLUE CARD (renders only when showCard === true) */}
        {showCard && (
          <div style={rightCard}>
            <h3 style={infoHeading}>Address</h3>
            <p style={infoText}>
              5/21, Hausariya Chauraha, Above Family Bazar, 2nd Floor, Viram
              Khand 5, Gomti Nagar, Near Jeevan Plaza
              <br />
              Lucknow, Uttar Pradesh – 226010
            </p>

            <h3 style={infoHeading}>Contact</h3>
            <p style={infoText}>
              Phone:{" "}
              <a href="tel:+917054633632" style={contactLink}>
                +917054633632
              </a>
              <br />
              Email:{" "}
              <a href="mailto:support@stockdaddy.in" style={contactLink}>
                support@stockdaddy.in
              </a>
            </p>

            <h3 style={infoHeading}>Open Time</h3>
            <p style={infoText}>
              Monday – Friday: 10:00 – 20:00
              <br />
              Saturday – Sunday: 11:00 – 18:00
            </p>

            <h3 style={infoHeading}>Stay Connected</h3>
            <div style={iconsRow}>
              {/* social icons... (unchanged) */}
              <a
                href="https://www.instagram.com/stockdaddy.gomtinagar_lucknow?igsh=MTlzNDR5bzQ3d2Nndw=="
                target="_blank"
                rel="noreferrer"
                style={iconLink}
                aria-label="Instagram"
              >
                <div style={iconCircle}>
                  {/* svg */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5.3A4.7 4.7 0 1112 16.7 4.7 4.7 0 0112 7.3zm6.2-.95a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                </div>
              </a>
              {/* other icons kept same */}
              <a
                href="https://www.facebook.com/stockdaddyapp/"
                target="_blank"
                rel="noreferrer"
                style={iconLink}
                aria-label="Facebook"
              >
                <div style={iconCircle}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12A10 10 0 1010.5 22v-7H8v-3h2.5v-2.3c0-2.1 1.3-3.2 3.3-3.2.9 0 1.7.1 2 .1v2.4h-1.2c-1 0-1.3.6-1.3 1.2V12H17l-.5 3h-2v7A10 10 0 0022 12z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/stock-daddy/"
                target="_blank"
                rel="noreferrer"
                style={iconLink}
                aria-label="LinkedIn"
              >
                <div style={iconCircle}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5zM3 21h4V9H3v12zm14-12c-2.1 0-3.4 1.2-4 2.1V9h-4v12h4v-6c0-1.1.9-2 2-2s2 .9 2 2v6h4v-7c0-3.3-2.2-5-4-5z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/StockDaddy"
                target="_blank"
                rel="noreferrer"
                style={iconLink}
                aria-label="YouTube"
              >
                <div style={iconCircle}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.498 6.186a3.01 3.01 0 00-2.12-2.137C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.55A3.01 3.01 0 00.502 6.186 31.45 31.45 0 000 12a31.45 31.45 0 00.502 5.814 3.01 3.01 0 002.12 2.137C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.55a3.01 3.01 0 002.12-2.137A31.45 31.45 0 0024 12
                    a31.45 31.45 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const accentBlue = "#2d7df4";
const darkBlue = "#0d1b2a";

const page = {
  width: "100%",
  // minHeight: "100vh",
  background: "#ffffff",
  padding: "20px",
  display: "block",
  // display: "flex",
  // justifyContent: "center",
};

// const container = {
//   width: "100%",
//   maxWidth: "1200px",
//   display: "grid",
//   gridTemplateColumns: "1fr 380px",
//   gap: "40px",
// };

const container = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto", // 🔥 center using margin
  display: "grid",
  gridTemplateColumns: "1fr 380px",
  gap: "40px",
};

const left = { paddingRight: "16px" };

const tag = {
  color: accentBlue,
  fontWeight: "700",
  letterSpacing: "2px",
  fontSize: "14px",
};

const heading = {
  fontSize: "40px",
  fontWeight: "800",
  marginBottom: "30px",
};

const accent = {
  color: accentBlue,
  fontStyle: "italic",
};

const formBox = { display: "flex", flexDirection: "column", gap: "14px" };

const row = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  width: "100%",
};

const label = {
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "4px",
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "#f6f8fc",
  border: "1px solid #d8e0ea",
  fontSize: "16px",
  outline: "none",
  height: "50px",
  boxSizing: "border-box",
};

const textarea = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "#f6f8fc",
  border: "1px solid #d8e0ea",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
  resize: "vertical",
};

const btn = {
  marginTop: "10px",
  padding: "14px",
  background: accentBlue,
  color: "white",
  fontSize: "17px",
  fontWeight: "700",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  opacity: 1,
};

const success = {
  background: "#e5ffe8",
  padding: "10px",
  color: "#0c7f2a",
  borderRadius: "10px",
  marginTop: "12px",
};

const rightCard = {
  background: darkBlue,
  color: "white",
  padding: "30px",
  borderRadius: "26px",
  borderTopRightRadius: "50px",
};

const infoHeading = { fontSize: "18px", fontWeight: "700", marginTop: "20px" };

const infoText = {
  fontSize: "14px",
  opacity: 0.9,
  lineHeight: "1.6",
  marginTop: "6px",
};

const iconsRow = { display: "flex", gap: "12px", marginTop: "12px" };

const iconCircle = {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: accentBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "700",
  fontSize: "18px",
};

const iconLink = {
  textDecoration: "none",
};
const contactLink = {
  color: "#aee6ff",
  textDecoration: "none",
  fontWeight: 600,
};
