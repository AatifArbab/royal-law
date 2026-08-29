import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "923001234567";

  const message =
    "Assalam o Alaikum, I would like to get a legal consultation from Royal Law.";

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className="whatsapp-button"
      onClick={openWhatsApp}
      aria-label="Chat with Royal Law on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="22"
          height="22"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.11 1.56 5.91L.16 24l6.4-1.68a11.8 11.8 0 0 0 5.52 1.37h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.4-8.38ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.36l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.84 9.84 0 1 1 8.4 4.65Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>

      <strong>WhatsApp</strong>

      <span className="whatsapp-label">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;