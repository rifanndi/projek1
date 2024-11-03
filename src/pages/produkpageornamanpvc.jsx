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
import Listpvc1 from "../img/Listpvc/Listpvc1.svg";
import Listpvc2 from "../img/Listpvc/Listpvc2.svg";
import Listpvc3 from "../img/Listpvc/Listpvc3.svg";
import Listpvc4 from "../img/Listpvc/Listpvc4.svg";
import Listpvc5 from "../img/Listpvc/Listpvc5.svg";
import Listpvc6 from "../img/Listpvc/Listpvc6.svg";
import Navbar from "../componet/navbar";

const ProductPageOrnamenpvc = () => {
  const productImages = [
    Listpvc1,
    Listpvc2,
    Listpvc3,
    Listpvc4,
    Listpvc5,
    Listpvc6,
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
          Ornamen PVC
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

export default ProductPageOrnamenpvc;
