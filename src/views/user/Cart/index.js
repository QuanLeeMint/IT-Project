import { memo } from "react";
import React from "react";
import "./style.scss";
import colompia from "assets/Lets/columbia.png"
import ethiopia from "assets/Lets/ethi.png"
import { formatter } from "utils/format";
import ButtonCart from "components/button_cart";
import { useNavigate } from 'react-router-dom';
const Cartpage = () => {
  const navigate = useNavigate();
  const cartItems = [
    { id: 1, name: "Colompia drip bags", price: 60000, quantity: 2, image: colompia },
    { id: 2, name: "Ethiopia drip bags", price: 60000, quantity: 1, image: ethiopia},
    { id: 3, name: "Ethiopia drip bags", price: 60000, quantity: 1, image: ethiopia},
  ];

  const handleQuantityChange = (id, action) => {
    console.log(`Change quantity for item ${id}: ${action}`);
    // Xử lý thay đổi số lượng (tăng/giảm)
  };

  const handleRemoveItem = (id) => {
    console.log(`Remove item with id: ${id}`);
    // Xử lý xóa sản phẩm khỏi giỏ hàng
  };
  const handleNavigate = (path) => {
    navigate('/coffee');
  };

  // const handleCheckout = () => {
  //   console.log("Checkout");
  // };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Giỏ hàng</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h2 className="item-name">{item.name}</h2>
                <p className="item-price">Giá tiền: {formatter(item.price)}</p>
                <div className="item-quantity">
                  <button className="btn-in-de" onClick={() => handleQuantityChange(item.id, "decrease")}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn-in-de"onClick={() => handleQuantityChange(item.id, "increase")}>+</button>
                </div>
                <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                  Xóa 
                </button>
              </div>
              <p className="item-total">Thành tiền: {formatter(item.price * item.quantity)}</p>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h1>Tổng tiền</h1>
          <h2>{formatter(subtotal)}</h2>
          <p>Thuế và phí vận chuyển được tính khi thanh toán</p>
          {/* Sử dụng Button component */}
          <div className="cart-buttons">
            <ButtonCart type="secondary" text="Mua tiếp tục ➡" className="color-text" onClick={() => handleNavigate()}>
            </ButtonCart>
            <ButtonCart type="primary"  text="Thanh toán"className="color-text">
            </ButtonCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Cartpage);
