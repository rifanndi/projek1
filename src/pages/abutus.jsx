import React from "react";
import Navbar from "../componet/navbar";
import AboutUs from "../componet/abaut"; // Pastikan path-nya benar
import SeertiCard from "../componet/sertifikasi.jsx";
import ProductGrid from "../componet/ProducsitGrid"; // Pastikan path-nya benar
import Footer from "../componet/footer"; // Pastikan path-nya benar
import { Container, Typography, Box } from "@mui/material";

const AboutUsPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Tentang Kami
          </Typography>
          <AboutUs />
        </Box>
      </Container>

      {/* Section Visi, Misi, dan Roadmap Perusahaan */}
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Visi, Misi,
          </Typography>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Visi Perusahaan
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Menjadi perusahaan terkemuka dalam penyediaan produk PVC
              berkualitas tinggi yang ramah lingkungan dan berkelanjutan, serta
              menjadi pilihan utama konsumen di seluruh wilayah.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Misi Perusahaan
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Menyediakan produk inovatif dan berkualitas yang memenuhi
              kebutuhan konsumen.
              <br />
              - Berkontribusi terhadap lingkungan dengan menggunakan bahan yang
              ramah lingkungan.
              <br />- Membangun hubungan jangka panjang dengan konsumen melalui
              layanan yang unggul.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom></Typography>
          </Box>
        </Box>
      </Container>
      <SeertiCard />
      {/* Product Section */}
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
          ></Typography>
          <ProductGrid />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
