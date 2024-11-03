import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";
import serti2 from "../img/serti2.svg";
import serti3 from "../img/serti3.svg";
import serti4 from "../img/serti4.svg";
import serti5 from "../img/serti5.svg"; // Imported correctly
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SertifikatCard() {
  const cards = [
    { img: serti2 },
    { img: serti3 },
    { img: serti4 },
    { img: serti5 },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4, // Display 4 images at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div style={styles.container}>
      <Typography variant="h5" style={styles.title} gutterBottom>
        News Update
      </Typography>
      <Typography variant="h6" style={styles.subtitle}>
        NOW ENJOY A WONDERFUL NEWS UPDATE
      </Typography>

      <Slider {...settings} style={styles.slider}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              style={{}}
              sx={{
                maxWidth: "100%",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                image={card.img}
                style={styles.cardMedia}
              />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    color: "green",
  },
  subtitle: {
    fontWeight: "bold",
    color: "white",
  },
  slider: {
    marginTop: "20px",
  },
  cardMedia: {
    height: "auto",
    width: "85%",
    objectFit: "cover",
    marginLeft: "9%",
    marginBottom: "10%",
  },
};

export default SertifikatCard;
