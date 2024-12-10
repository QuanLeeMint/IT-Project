import React, { useEffect, useState } from 'react';
import './style.scss';
import { FaShoppingCart } from "react-icons/fa";
import Button_cart from 'components/button_cart';
import axios from 'axios';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  // Lấy thông tin sản phẩm từ sessionStorage
  useEffect(() => {
    const storedProduct = sessionStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct)); 
    }
  }, []);

  const handleAddToCart = async () => {
    const storedProduct = JSON.parse(sessionStorage.getItem('selectedProduct'));

    if (!storedProduct) {
      alert('Không tìm thấy thông tin sản phẩm!');
      return;
    }

    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const existingProduct = cart.find(
      (item) => item.productId === storedProduct.productId
    );

    if (existingProduct) {
      existingProduct.quantity += quantity; 
    } else {
      cart.push({ ...storedProduct, quantity });
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));

    alert('Thêm sản phẩm vào giỏ hàng thành công!');
  };
  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Left Section - Product Image */}
        <div className="product-image">
          <img   src={product.imgUrl ? require(`../../../assets/Lets/${product.imgUrl.split('/').pop()}`) : 'default-image-path'} alt={product.productName || "Sản phẩm"} />
        </div>

        {/* Right Section - Product Info */}
        <div className="product-info">
          <h1>{product.productName || 'Loading...'}</h1>
          <h2>{product.price ? `${product.price} VND` : 'Loading...'}</h2>
          <p>
            {product.description || 'Loading thông tin sản phẩm...'}
          </p>
          <div className="quantity-control">
            <label>Số lượng: </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
          <Button_cart
            type="primary"
            icon={<FaShoppingCart />}
            text="Thêm vào giỏ hàng"
            onClick={handleAddToCart} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
