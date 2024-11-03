import React from "react";
import "./Footer.css";
import logo1 from "../img/logo1.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo1} alt="Indofon Logo" className="logo-image" />
          <p className="footer-description">
            Kami produsen plafon PVC dan juga melayani <br /> jasa pasang PVC
            untuk seluruh wilayah di <br />
            Indonesia. Kami memiliki kantor cabang <br /> distribusi resmi di 34
            provinsi di <br />
            seluruh Indonesia.
          </p>
        </div>

        <div className="footer-details">
          <div className="footer-contact">
            <h4 className="footer-title">KONTAK</h4>
            <ul>
              <li>PHONE: +6282138579056</li>
              <li>WHATSAPP: +6282138579056</li>
              <li>EMAIL: admin@indofon.com</li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4 className="footer-title">JAM KERJA</h4>
            <ul>
              <li>Senin-Jumat: 8:00 – 16:00</li>
              <li>Sabtu: 8:00 – 13:00</li>
              <li>Minggu: By Appointment</li>
              <li>Tanggal Merah: Tutup</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright 2025 – Plafon PVC Indofon. By{" "}
          <a
            href="https://gmtinnovation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GMTINOVATION
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
