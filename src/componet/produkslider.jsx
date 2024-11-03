import React from "react";
import indofonwew from "../img/indofonwew.svg";
import produk01 from "../img/produk01.svg";
import produk02 from "../img/produk02.svg";
import produk03 from "../img/produk03.svg";

// Import the CSS file for styling
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const products = [
    { id: 1, name: "Ornaman PVC", image: produk01 },
    { id: 2, name: "Plafon PVC", image: produk02 },
    { id: 3, name: "List pvc", image: produk03 },
  ];

  return (
    <div className="carousel-container">
      <h2 style={{ textAlign: "center", color: "#4caf50" }}>Produk kami</h2>
      <div className="carousel-products">
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <img
          src={indofonwew}
          className="productsepek"
          alt="Additional product"
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
