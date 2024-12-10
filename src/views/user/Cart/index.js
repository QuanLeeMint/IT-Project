import { memo, useEffect, useState } from "react";
import React from "react";
import "./style.scss";
import colompia from "assets/Lets/columbia.png";
import ethiopia from "assets/Lets/ethi.png";
import { formatter } from "utils/format";
import Buttoncart from "components/button_cart";
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {jwtDecode} from 'jwt-decode';
const Cartpage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load thông tin giỏ hàng từ sessionStorage
  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);
  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/create_payment_url', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              amount: subtotal,
              orderDescription: 'Order',
              orderType: 'billpayment',
              language: 'vn',
          }),
      });
      const { paymentUrl } = await response.json();
      window.location.href = paymentUrl; 
  } catch (error) {
      console.error('Thanh toán thất bại:', error);
  }
  };

  const handleQuantityChange = (id, action) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((item) => item.productId === id);

    if (index !== -1) {
      if (action === 'increase') {
        updatedCart[index].quantity += 1;
      } else if (action === 'decrease' && updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      }
      sessionStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.productId !== id);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleNavigate = (path) => {
    navigate('/coffee');
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Giỏ hàng</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.productId} className="cart-item">
                <img   src={require('../../../assets/Lets/' + item.imgUrl.split('/').pop())} alt={item.productName} className="item-image" />
                <div className="item-details">
                  <h2 className="item-name">{item.productName}</h2>
                  <p className="item-price">Giá tiền: {formatter(item.price)}</p>
                  <div className="item-quantity">
                    <button
                      className="btn-in-de"
                      onClick={() => handleQuantityChange(item.productId, "decrease")}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn-in-de"
                      onClick={() => handleQuantityChange(item.productId, "increase")}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.productId)}
                  >
                    Xóa
                  </button>
                </div>
                <p className="item-total">Thành tiền: {formatter(item.price * item.quantity)}</p>
              </div>
            ))
          ) : (
            <p className="empty-cart">Giỏ hàng trống! Thêm sản phẩm nào đó vào giỏ hàng.</p>
          )}
        </div>
        <div className="cart-summary">
          <h1>Tổng tiền</h1>
          <h2>{formatter(subtotal)}</h2>
          <p>Thuế và phí vận chuyển được tính khi thanh toán</p>
          <div className="cart-buttons">
            <Buttoncart
              type="secondary"
              text="Mua tiếp ➡"
              className="color-text"
              onClick={() => handleNavigate()}
            />
            <Buttoncart type="primary" icon={<AiOutlineShoppingCart />} text="Thanh toán"  onClick={handlePayment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Cartpage);
