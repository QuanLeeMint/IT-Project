import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./coffee.scss";

const ProductPage = () => {
  const [products, setProducts] = useState([]); // State lưu thông tin sản phẩm

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Gọi API từ server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/coffee');
        setProducts(response.data); // Cập nhật thông tin sản phẩm
      } catch (error) {
        console.error("Không thể load thông tin sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <h2 className="page-title">_Menu cà phê gói lẻ_</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            data-aos="fade-up"
          >
            <img
              src={product.imgUrl} 
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}K</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
