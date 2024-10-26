import React, { useState, useEffect } from "react";
import Navbar from "./componet/navbar.jsx";
import Heder from "./componet/heder.jsx";
import CustomCarousel from "./componet/carosel.jsx";
import AboutUs from "./componet/abaut.jsx";
import StatsSection from "./componet/StatsSection.jsx";
import "./App.css";
import Footer from "./componet/footer.jsx";
import TestimonialsCarousel from "./componet/testimonialsCarousel.jsx";
import ProductCarousel from "./componet/produkslider.jsx";
import OurFactory from "./componet/ourfactory.jsx";
import SeertiCard from "./componet/sertifikasi.jsx";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.5)",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: isScrolled ? "none" : "blur(10px)",
        }}
      >
        <Navbar />
      </div>

      {/* Header */}
      <div style={{ marginTop: "60px", paddingBottom: 0 }}>
        <Heder />
      </div>

      <div className="carousel-container1">
        {/* Carousel */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CustomCarousel />
        </div>
        <div className="about-container">
          <AboutUs />
        </div>

        {/* Stats Section */}
        <div>
          <StatsSection />
        </div>

        {/* Product Carousel */}
        <div className="ProductCarousel-container">
          <ProductCarousel />
        </div>

        {/* Sertifikasi Card */}
        <SeertiCard />

        {/* Testimonials */}
        <div style={{ marginBottom: "5%", marginTop: "7%" }}>
          <h1 style={{ textAlign: "center", color: "green" }}> Testimoni</h1>
          <TestimonialsCarousel />
        </div>

        {/* Our Factory */}
        <OurFactory />

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
