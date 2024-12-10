import React from "react";
import "./style.scss";
import handdrew from 'assets/Lets/handdrew.jpg'
import latteaart from 'assets/Lets/img.png'
import coffeebassic from'assets/Lets/img_1.png'
const CoursepageAD = () => {
  const courses = [
    {
      id: 1,
      name: "Handdrew",
      image: handdrew,
      instructor: "Nguyễn Hoàng Giang Nam",
      price: "1,500,000 VND",
      completionDate: "2024-12-30",
    },
    {
      id: 2,
      name: "Latte Art",
      image: latteaart,
      instructor: "Nguyễn Hoàng Giang Nam",
      price: "2,000,000 VND",
      completionDate: "2025-01-15",
    },
    {
        id:3 ,
        name: "Coffee Bassic",
        image: coffeebassic,
        instructor: "Nguyễn Hoàng Giang Nam",
        price: "2,000,000 VND",
        completionDate: "2025-01-15",
      },
  ];

  return (
    <div className="course-list">
      <h2>Danh sách khóa học</h2>
      <div className="course-table">
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Hình ảnh</th>
              <th>Tên giảng viên</th>
              <th>Giá</th>
              <th>Ngày hoàn thành</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>
                  <img
                    src={course.image}
                    alt={course.name}
                    className="course-image"
                  />
                </td>
                <td>{course.instructor}</td>
                <td>{course.price}</td>
                <td>{course.completionDate}</td>
                <td>
                  <button className="btn-edit">Sửa</button>
                </td>
                <td>
                  <button className="btn-delete">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursepageAD;
