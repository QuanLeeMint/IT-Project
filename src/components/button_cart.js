// Button.js
import React from 'react';
import './button_cart.scss';

const Button_cart = ({ text, onClick,icon }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {text}
            {icon && <span className="button-icon">{icon}</span>}
        </button>
    );
};

export default Button_cart;
