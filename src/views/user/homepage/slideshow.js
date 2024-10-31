import React, { useState, useEffect } from 'react';
import './slideshow.scss';
import Image1 from 'assets/Lets/Background1.jpg';
import Image2 from 'assets/Lets/Background2.jpg';
import Image3 from 'assets/Lets/Background3.jpg';

const images = [Image1, Image2, Image3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className="slideshow-content">
        <h1>Vị Cà Phê Quốc Dân</h1>
        <p>Đây là cách mà chúng tôi đang làm để tạo ra giá trị cho hạt cà phê!...</p>
        <p>Chúng tôi mong muốn phục vụ khách hàng, chất lượng cà phê tốt hơn mỗi ngày.</p>
      </div>
    </div>
  );
};

export default Slideshow;
