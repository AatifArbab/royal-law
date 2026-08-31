import React, { useState } from "react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "923001234567"; // apna WhatsApp number (country code k sath) yahan daalein
  const message = "Assalam-o-Alaikum, mujhe Royal Law Associates se legal consultation chahiye.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="WhatsApp par contact karein"
    >
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #0a0f1a;
          border: 1px solid #d4a017;
          border-radius: 50px;
          padding: 14px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          text-decoration: none;
          transition: padding 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
          overflow: hidden;
        }

        .whatsapp-float:hover {
          padding: 14px 22px 14px 14px;
          box-shadow: 0 6px 24px rgba(212, 160, 23, 0.35);
          transform: translateY(-2px);
        }

        .whatsapp-icon-wrap {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .whatsapp-icon-wrap::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px solid #d4a017;
          opacity: 0;
          transform: scale(0.8);
          animation: whatsapp-pulse 2.5s ease-out infinite;
        }

        @keyframes whatsapp-pulse {
          0% {
            opacity: 0.6;
            transform: scale(0.8);
          }
          70% {
            opacity: 0;
            transform: scale(1.6);
          }
          100% {
            opacity: 0;
            transform: scale(1.6);
          }
        }

        .whatsapp-label {
          max-width: 0;
          opacity: 0;
          white-space: nowrap;
          color: #f4f4f4;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.2px;
          transition: max-width 0.3s ease, opacity 0.25s ease 0.05s;
        }

        .whatsapp-float:hover .whatsapp-label {
          max-width: 220px;
          opacity: 1;
        }

        @media (max-width: 600px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            padding: 13px;
          }
          .whatsapp-float:hover {
            padding: 13px;
          }
          .whatsapp-label {
            display: none;
          }
        }
      `}</style>

      <div className="whatsapp-icon-wrap">
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
          <path
            d="M16 3C9.373 3 4 8.373 4 15c0 2.393.7 4.623 1.908 6.494L4 29l7.68-1.868A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
            fill="#d4a017"
          />
          <path
            d="M22.104 18.3c-.33-.165-1.955-.964-2.258-1.074-.303-.11-.523-.165-.744.165-.22.33-.853 1.074-1.046 1.294-.193.22-.386.248-.716.083-.33-.165-1.393-.513-2.653-1.636-.981-.874-1.643-1.954-1.836-2.284-.193-.33-.02-.508.145-.673.149-.148.33-.386.495-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.02-2.456-.269-.645-.542-.558-.744-.568-.193-.01-.413-.012-.633-.012-.22 0-.578.083-.881.413-.303.33-1.156 1.13-1.156 2.756 0 1.626 1.184 3.197 1.349 3.418.165.22 2.33 3.556 5.646 4.988.789.34 1.404.543 1.884.695.792.252 1.513.216 2.083.131.635-.095 1.955-.799 2.231-1.57.276-.771.276-1.432.193-1.57-.083-.138-.303-.22-.633-.386z"
            fill="#0a0f1a"
          />
        </svg>
      </div>

      <span className="whatsapp-label">WhatsApp par baat karein</span>
    </a>
  );
};

export default WhatsAppButton;