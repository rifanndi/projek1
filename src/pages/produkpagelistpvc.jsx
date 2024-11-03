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
import List1 from "../img/LisPlafonPVCVix/List1.svg";
import List2 from "../img/LisPlafonPVCVix/List2.svg";
import List3 from "../img/LisPlafonPVCVix/List3.svg";
import List4 from "../img/LisPlafonPVCVix/List4.svg";
import List5 from "../img/LisPlafonPVCVix/List5.svg";
import List6 from "../img/LisPlafonPVCVix/List6.svg";
import List7 from "../img/LisPlafonPVCVix/List7.svg";
import List8 from "../img/LisPlafonPVCVix/List8.svg";

const ProductPageListpvc = () => {
  const productImages = [
    List1,
    List2,
    List3,
    List4,
    List5,
    List6,
    List7,
    List8,
  ];

  // Create a products array using the images
  const products = productImages.map((image, index) => ({
    image: image,
    name: `Produk ${index + 1}`,
    price: `Rp${(index + 1) * 10000}`, // Example price
  }));

  const articles = [
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 1",
      description: "Deskripsi singkat artikel 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 2",
      description: "Deskripsi singkat artikel 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 3",
      description: "Deskripsi singkat artikel 3.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 4",
      description: "Deskripsi singkat artikel 4.",
    },
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
          List PVC
        </Typography>
        <Button variant="contained" color="white" sx={{ mt: 2 }}>
          Browse Products
        </Button>
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
export default ProductPageListpvc;
