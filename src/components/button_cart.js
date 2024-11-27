// Button.js
import React from 'react';
import './button_cart.scss';

const Button_cart = ({ text, onClick,icon }) => {
    return (
        <button className="custom-button-cart" onClick={onClick}>
            {icon && <span className="button-icon">{icon}</span>}
            {text}
            
        </button>
    );
};

export default Button_cart;
