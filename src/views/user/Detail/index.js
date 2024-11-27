// ProductDetail.js
import { memo } from 'react';
import React, { useState } from 'react';
import './style.scss';
import product_img from "assets/Lets/guthom3.png"
import { FaShoppingCart } from "react-icons/fa";

import Button_cart from 'components/button_cart';
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Left Section - Product Image */}
        <div className="product-image">
          <img src={product_img} alt="Gu Thơm Aroma" />
        </div>

        {/* Right Section - Product Info */}
        <div className="product-info">
          <h1>Gu Thơm</h1>
          <h2>75.000 VND</h2>
          <p>
            Túi cà phê này là sự kết hợp hoàn hảo giữa hương vị đắng và đậm của
            hạt robusta, cùng sự mềm mại và hương thơm tinh tế của hạt arabica.
            Với tỷ lệ 80% robusta và 20% arabica, sản phẩm mang đến trải nghiệm
            cà phê độc đáo, hấp dẫn và tinh tế.
          </p>
          <div className="quantity-control">
            <label>Số lượng: </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <Button_cart type="primary" icon={<FaShoppingCart />} text="Thêm vào giỏ hàng"  >
              
            </Button_cart>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetail);
