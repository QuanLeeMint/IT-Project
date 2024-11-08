import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./coffee.scss" // Tạo file CSS này cho các styles
import colombia from 'assets/Lets/columbia.png';
import kenya from 'assets/Lets/kenya.png';
import ethi from 'assets/Lets/ethi.png';
const ProductPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const products = [
        {
            name: "DRIP BAG",   
            subtitle: "Colombia",
            price: "25K",
            imgSrc: colombia,
        },
        {
            name: "DRIP BAG",
            subtitle: "Kenya",
            price: "25K",
            imgSrc: kenya,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        {
            name: "DRIP BAG",
            subtitle: "Ethiopia",
            price: "25K",
            imgSrc: ethi ,
        },
        // Add more products as needed
    ];

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
                        <img src={product.imgSrc} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.subtitle}</p>
                            <span className="price">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
