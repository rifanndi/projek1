import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./ProductGrid.css";

// Import images directly
import img1 from "../img/1p.jpg";
import img2 from "../img/2p.jpg";
import img3 from "../img/3p.jpg";
import img4 from "../img/4a.jpg";
import img5 from "../img/5a.jpg";
import img6 from "../img/6p.jpg";

const products = [
  {
    title: "Ekstrusi dan Pendinginan",
    description:
      "PVC dilelehkan dan diekstrusi melalui cetakan berbentuk panel. Setelah ekstrusi, papan didinginkan untuk mempertahankan bentuknya sebelum dipotong sesuai ukuran.",
    image: img1,
  },
  {
    title: "Ekstrusi Profil dan Pemotongan",
    description:
      "PVC dilelehkan dan diekstrusi melalui cetakan untuk menghasilkan list plafon. Setelah proses ekstrusi, list didinginkan, dipotong, dan diberikan detail tambahan sesuai kebutuhan estetika.",
    image: img2,
  },
  {
    title: "Ekstrusi, Pembentukan, dan Pemasangan Aksesori",
    description:
      "PVC dilelehkan dan dibentuk melalui cetakan pintu. Setelah pendinginan, pintu dipotong sesuai ukuran standar dan dipasangkan aksesori seperti engsel dan bingkai untuk meningkatkan daya tahan dan fungsionalitas.",
    image: img3,
  },
  {
    title: "Ekstrusi Profil dan Finishing",
    description:
      "Bahan PVC diekstrusi melalui cetakan untuk menghasilkan profil dekoratif atau struktural. Setelah pendinginan, profil PVC diberi finishing untuk meningkatkan estetika dan ketahanan.",
    image: img4,
  },
  {
    title: "Ekstrusi Kerangka dan Pemotongan",
    description:
      "Proses ekstrusi dilakukan dengan PVC yang dilelehkan dan dicetak sesuai kebutuhan bentuk kerangka. Kerangka kemudian dipotong sesuai panjang yang diperlukan dan diperiksa untuk memastikan kualitas.",
    image: img5,
  },
  {
    title: "Pemotongan Pola dan Finishing Dekoratif",
    description:
      "PVC dipotong dan dibentuk sesuai pola yang diinginkan untuk dekorasi lampu. Proses finishing seperti pewarnaan atau emboss dilakukan untuk menambah daya tarik visual pada produk akhir.",
    image: img6,
  },
];

const ProductGrid = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Proses Produksi Kami
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        className="product-grid"
      >
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="product-item">
            <div className="product-content">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <Typography variant="h6" component="h3" className="product-title">
                {product.title}
              </Typography>
              <Typography variant="body2" className="product-description">
                {product.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
