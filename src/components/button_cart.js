// Button.js
import React from 'react';
import './button_cart.scss';

const Button_cart = ({ text, onClick }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button_cart;
