import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Navbar from "../componet/navbar";

// Import all images
import plafonpvcindofon1 from "../img/plafonimg/plafonpvcindofon1.svg";
import plafonpvcindofon2 from "../img/plafonimg/plafonpvcindofon2.svg";
import plafonpvcindofon3 from "../img/plafonimg/plafonpvcindofon3.svg";
import plafonpvcindofon4 from "../img/plafonimg/plafonpvcindofon4.svg";
import plafonpvcindofon5 from "../img/plafonimg/plafonpvcindofon5.svg";
import plafonpvcindofon6 from "../img/plafonimg/plafonpvcindofon6.svg";
import plafonpvcindofon7 from "../img/plafonimg/plafonpvcindofon7.svg";
import plafonpvcindofon8 from "../img/plafonimg/plafonpvcindofon8.svg";
import plafonpvcindofon9 from "../img/plafonimg/plafonpvcindofon9.svg";
import plafonpvcindofon10 from "../img/plafonimg/plafonpvcindofon10.svg";
import plafonpvcindofon11 from "../img/plafonimg/plafonpvcindofon11.svg";
import plafonpvcindofon12 from "../img/plafonimg/plafonpvcindofon12.svg";
import plafonpvcindofon13 from "../img/plafonimg/plafonpvcindofon13.svg";
import plafonpvcindofon14 from "../img/plafonimg/plafonpvcindofon14.svg";
import plafonpvcindofon15 from "../img/plafonimg/plafonpvcindofon15.svg";
import plafonpvcindofon16 from "../img/plafonimg/plafonpvcindofon16.svg";
import plafonpvcindofon17 from "../img/plafonimg/plafonpvcindofon17.svg";
import plafonpvcindofon18 from "../img/plafonimg/plafonpvcindofon18.svg";
import plafonpvcindofon19 from "../img/plafonimg/plafonpvcindofon19.svg";
import plafonpvcindofon20 from "../img/plafonimg/plafonpvcindofon20.svg";

// Array of images to assign each to a product
const productImages = [
  plafonpvcindofon1,
  plafonpvcindofon2,
  plafonpvcindofon3,
  plafonpvcindofon4,
  plafonpvcindofon5,
  plafonpvcindofon6,
  plafonpvcindofon7,
  plafonpvcindofon8,
  plafonpvcindofon9,
  plafonpvcindofon10,
  plafonpvcindofon11,
  plafonpvcindofon12,
  plafonpvcindofon13,
  plafonpvcindofon14,
  plafonpvcindofon15,
  plafonpvcindofon16,
  plafonpvcindofon17,
  plafonpvcindofon18,
  plafonpvcindofon19,
  plafonpvcindofon20,
];

const ProductPagePlavonpvc = () => {
  // Generate an array with 40 products using images in sequence
  const products = Array.from({ length: 40 }, (_, index) => ({
    image: productImages[index % productImages.length], // Cycle through the images
    name: `Produk ${index + 1}`,
    price: `Rp${10000 * (index + 1)}`,
  }));

  const articles = [
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 1",
      description: "Deskripsi singkat artikel 1.",
    },
    // ... add other articles
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 0, mb: 3, paddingTop: 0 }}>
      <div style={{ marginBottom: "2%" }}>
        <Navbar />
      </div>

      <Box
        sx={{
          backgroundColor: "rgba(0, 128, 0, 0.5)",
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
          Product
        </Typography>
        <Typography variant="h6" color="grey.300">
          INDOFON
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="grey.300"
          gutterBottom
        >
          Plafon PVC
        </Typography>
        <Button variant="contained" color="white" sx={{ mt: 2 }}></Button>
      </Box>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card sx={{ borderRadius: "12px", boxShadow: 3 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "auto" }}
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="primary"
                ></Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button variant="outlined" sx={{ mx: 1 }}>
          Tombol 1
        </Button>
        <Button variant="outlined" sx={{ mx: 1 }}>
          Tombol 2
        </Button>
        <Button variant="outlined" sx={{ mx: 1 }}>
          Tombol 3
        </Button>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Artikel Terkait
        </Typography>
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "auto" }}
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductPagePlavonpvc;
