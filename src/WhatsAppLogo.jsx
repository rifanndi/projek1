// src/WhatsAppLogo.js
import React from "react";
import { Link } from "react-router-dom";
import whatsappIcon from "./img/whatsappIcon.svg"; // Replace with the path to your WhatsApp icon image
import "./WhatsAppLogo.css"; // Create a CSS file for styling

const WhatsAppLogo = () => {
  return (
    <Link
      to="https://wa.me/your-phone-number" // Replace with your actual phone number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-logo"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </Link>
  );
};

export default WhatsAppLogo;
