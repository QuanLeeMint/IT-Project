import React, { useState, useEffect  } from 'react';
import './course.scss';
import axios from 'axios';
import backgroundImage from 'assets/Lets/quan.jpg';
import handdrew_course from "assets/Lets/handdrew.jpg";
import latte_course from "assets/Lets/img.png";
import basic_coffee from "assets/Lets/img_1.png";
import { formatter } from 'utils/format';

const Course = () => {
  const [courses, setCourses] = useState([]); // Lưu dữ liệu khóa học từ API
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState([]);

  // Hàm gọi API để load dữ liệu khóa học
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/course');
        console.log('Dữ liệu từ server:', response.data);
        setCourses(response.data.data);
      } catch (error) {
        console.error('Không thể load dữ liệu khóa học:', error);
      }
    };

    fetchCourses();
  }, []);

  // Logic điều hướng qua carousel
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
  };
  const handleAddToCart = (course) => {
    // Lấy giỏ hàng từ sessionStorage (nếu có)
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
  const existingProductIndex = cart.findIndex((item) => item._id === course._id);

  if (existingProductIndex !== -1) {
    // Nếu sản phẩm đã tồn tại, tăng số lượng
    cart[existingProductIndex].quantity += 1;
  } else {
    // Nếu sản phẩm chưa có, thêm mới với số lượng ban đầu là 1
    cart.push({ ...course, quantity: 1 });
  }

  // Lưu giỏ hàng cập nhật vào sessionStorage
  sessionStorage.setItem('cart', JSON.stringify(cart));

  // Hiển thị thông báo thêm thành công
  alert(`Thêm "${course.productName}" vào giỏ hàng thành công!`);

  console.log('Cập nhật giỏ hàng:', cart);
  };

  return (
    <div className="course">
      <section className="course-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Các khóa học</h1>
      </section>
      <section className="course-content">
        <h2 className="section-title">_Các Khóa Học Về Cà Phê_</h2>
        <div className="course-carousel">
          {/* Mũi tên trái */}
          <button className="arrow left-arrow" onClick={handlePrev}>
            &#8249;
          </button>

          {/* Hiển thị dữ liệu khóa học */}
          <div className="course-wrapper">
            {courses.map((course, index) => {
              let position = 'nextSlide';
              if (index === activeIndex) position = 'activeSlide';
              else if (index === (activeIndex - 1 + courses.length) % courses.length)
                position = 'lastSlide';

              return (
                <div key={course._id} className={`course-item ${position}`} onClick={() => handleAddToCart(course)} >
                  <img src={require('../../../../assets/Lets/' + course.imgUrl.split('/').pop())} alt={course.title} className="course-image" />
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <span>Giảng viên: {course.lecturesName}</span>
                    <p className="course-price">Giá:  {formatter(course.price)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mũi tên phải */}
          <button className="arrow right-arrow" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Course;