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

const ProductPageListpvc = () => {
  const products = [
    {
      image: "https://via.placeholder.com/150?text=Produk+1",
      name: "Produk 1",
      price: "Rp10000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+2",
      name: "Produk 2",
      price: "Rp20000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+3",
      name: "Produk 3",
      price: "Rp30000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+4",
      name: "Produk 4",
      price: "Rp40000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+5",
      name: "Produk 5",
      price: "Rp50000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+6",
      name: "Produk 6",
      price: "Rp60000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+7",
      name: "Produk 7",
      price: "Rp70000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+8",
      name: "Produk 8",
      price: "Rp80000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+9",
      name: "Produk 9",
      price: "Rp90000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+10",
      name: "Produk 10",
      price: "Rp100000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+11",
      name: "Produk 11",
      price: "Rp110000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+12",
      name: "Produk 12",
      price: "Rp120000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+13",
      name: "Produk 13",
      price: "Rp130000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+14",
      name: "Produk 14",
      price: "Rp140000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+15",
      name: "Produk 15",
      price: "Rp150000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+16",
      name: "Produk 16",
      price: "Rp160000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+17",
      name: "Produk 17",
      price: "Rp170000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+18",
      name: "Produk 18",
      price: "Rp180000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+19",
      name: "Produk 19",
      price: "Rp190000",
    },
    {
      image: "https://via.placeholder.com/150?text=Produk+20",
      name: "Produk 20",
      price: "Rp200000",
    },
  ];

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
          product
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
        <Button variant="contained" color="white" sx={{ mt: 2 }}></Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: "12px", boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {product.name}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      {/* {product.price} */}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
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
                  height="150"
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
