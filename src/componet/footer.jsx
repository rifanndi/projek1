import React from "react";
import "./Footer.css";
import logo1 from "../img/Iogo1.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src={logo1}
            alt="Indofon Logo"
            className="logo-image"
            style={{}}
          />
          <p className="footer-description">
            Kami produsen plafon pvc dan juga melayani jasa <br /> pasang pvc
            untuk seluruh wilayah di Indonesia.
            <br /> Kami memiliki kantor cabang distribusi <br /> resmi di 34
            provinsi, di seluruh Indonesia.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">QUICK LINKS</h4>
          <ul>
            <li>
              <a href="#tentang-kami">Tentang Kami</a>
            </li>
            <li>
              <a href="#layanan-kami">Layanan Kami</a>
            </li>
            <li>
              <a href="#info-kontak">Info Kontak</a>
            </li>
            <li>
              <a href="#lokasi-kami">Lokasi Kami</a>
            </li>
            <li>
              <a href="#testimoni">Testimoni</a>
            </li>
            <li>
              <a href="#narasi">Narasi</a>
            </li>
          </ul>
        </div>

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
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
