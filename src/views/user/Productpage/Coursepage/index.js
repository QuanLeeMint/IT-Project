import React, { useState } from 'react';
import './course.scss';
import backgroundImage from 'assets/Lets/quan.jpg';
import handdrew_course from "assets/Lets/handdrew.jpg";
import latte_course from "assets/Lets/img.png";
import basic_coffee from "assets/Lets/img_1.png";

const courses = [
  {
    title: 'Giới thiệu căn bản về cà phê',
    description: 'Khám phá lịch sử, hành trình from farm to cup, và các phương pháp pha cà phê cơ bản.',
    teacher: 'Nguyễn Hoàng Giang Nam',
    image: basic_coffee,
  },
  {
    title: 'Handdrew',
    description: 'Khóa học này cho ta tiếp cận đến những kiểu pha cà phê thủ công. Tiêu hiểu về các loại cà phê đặc sản ở các nước khác.',
    teacher: 'Nguyễn Hoàng Giang Nam',
    image: handdrew_course,
  },
  {
    title: 'Latte Art',
    description: 'Khóa Latte Art đào tạo kỹ thuật tạo hình cà phê chuyên nghiệp, dành cho barista muốn nâng cao tay nghề.',
    teacher: 'Nguyễn Hoàng Giang Nam',
    image: latte_course,
  },
  {
    title: 'Latte Art',
    description: 'Khóa Latte Art đào tạo kỹ thuật tạo hình cà phê chuyên nghiệp, dành cho barista muốn nâng cao tay nghề.',
    teacher: 'Nguyễn Hoàng Giang Nam',
    image: latte_course,
  },
];

const Course = () => {
  const [activeIndex, setActiveIndex] = useState(1); 
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
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

          {/* Hiển thị các khóa học */}
          <div className="course-wrapper">
            {courses.map((course, index) => {
              let position = 'nextSlide';
              if (index === activeIndex) position = 'activeSlide';
              else if (index === (activeIndex - 1 + courses.length) % courses.length)
                position = 'lastSlide';

              return (
                <div key={index} className={`course-item ${position}`}>
                  <img src={course.image} alt={course.title} className="course-image" />
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <span>Giảng viên: {course.teacher}</span>
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
