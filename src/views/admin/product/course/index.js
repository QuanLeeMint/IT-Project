import React, { useState, useEffect } from "react";
import "./style.scss";
import handdrew from 'assets/Lets/handdrew.jpg';
import latteaart from 'assets/Lets/img.png';
import coffeebassic from 'assets/Lets/img_1.png';

const CoursepageAD = () => {
  const [courses, setCourses] = useState([]); // State để lưu dữ liệu khóa học
  const [showAddModal, setShowAddModal] = useState(false); // State modal thêm khóa học
  const [showEditModal, setShowEditModal] = useState(false); // State modal chỉnh sửa khóa học
  const [currentCourse, setCurrentCourse] = useState({}); // Lưu thông tin khóa học hiện tại khi sửa/xóa

  // Fetch dữ liệu từ backend API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/admin/courses/load');
        const data = await response.json();
        console.log("Data from server:", data);
        setCourses(data);
      } catch (error) {
        console.error('Error loading courses:', error);
      }
    };

    fetchCourses();
  }, []);

  // Thêm khóa học mới
  const handleAddCourse = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/admin/courses/add', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lecturesName: currentCourse.lecturesName, 
          productName: currentCourse.productName, 
          price: currentCourse.price, // Giá
          completionTime: currentCourse.completionTime, 
          description:currentCourse.description,
          imgUrl: currentCourse.imgUrl, 
        }),
      });

      const result = await response.json();
      console.log("Thêm khóa học:", result);

      setShowAddModal(false);
      setCourses(await fetchCourses());
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  // Edit khóa học
  const handleEditCourse = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/admin/courses/update', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentCourse.productId, // ID khóa học
          lecturesName: currentCourse.lecturesName, // Tên khóa học
          productName: currentCourse.productName, 
          price: currentCourse.price, // Giá
          completionTime: currentCourse.completionTime, 
          description:currentCourse.description,
          imgUrl: currentCourse.imgUrl, 
        }),
      });

      const result = await response.json();
      console.log("Cập nhật khóa học:", result);

      setShowEditModal(false);
      setCourses(await fetchCourses());
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const openEditModal = (course) => {
    setCurrentCourse(course);
    setShowEditModal(true);
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/admin/courses/delete/${courseId}`, {
        method: "DELETE",
      });

      const result = await response.json();
      console.log("Xóa khóa học thành công:", result);

      setCourses(await fetchCourses());
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/admin/courses/load');
      const data = await response.json();
      setCourses(data);
      return data;
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div className="course-list">
      <h2>Danh sách khóa học</h2>
      <button className="btn-add" onClick={() => setShowAddModal(true)}>Thêm khóa học</button>
      <div className="course-table">
        <table>
          <thead>
            <tr>
              <th>Tên khóa học</th>
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
              <tr key={course.productId}>
                <td>{course.productName || "Chưa cập nhật"}</td>
                <td>
                {course.imgUrl?.split("/")?.pop() ? (
                <img
                  src={require(`../../../../assets/Lets/${course.imgUrl?.split("/").pop()}`)}
                  alt={course.productName}
                  className="course-image"
                />
              ) : (
                <div className="no-image">Không có ảnh</div>
              )}
                </td>
                <td>{course.lecturesName || "Chưa cập nhật"}</td>
                <td>{course.price || "0 VNĐ"}</td>
                <td>{course.completionTime || "Chưa cập nhật"}</td>
                <td>
                  <button className="btn-edit" onClick={() => openEditModal(course)}>
                    Sửa
                  </button>
                </td>
                <td>
                  <button className="btn-delete" onClick={() => handleDeleteCourse(course.productId)}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Thêm khóa học */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Thêm khóa học</h3>
            <label>lecturesName: 
            <input
              value={currentCourse.lecturesName || ""}
              placeholder="Tên khóa học"
              onChange={(e) => setCurrentCourse({ ...currentCourse, lecturesName: e.target.value })}
            />    </label>
              <label>productName: 
            <input
              value={currentCourse.productName || ""}
              placeholder="Tên giảng viên"
              onChange={(e) => setCurrentCourse({ ...currentCourse, productName: e.target.value })}
            />    </label>
              <label>Price: 
            <input
              value={currentCourse.price || ""}
              placeholder="Giá"
              type="number"
              onChange={(e) => setCurrentCourse({ ...currentCourse, price: parseInt(e.target.value) })}
            />
                </label>
              <label>CompletionTime: 
            <input
              value={currentCourse.completionTime || ""}
              placeholder="Ngày hoàn thành"
              type="date"
              onChange={(e) => setCurrentCourse({ ...currentCourse, completionTime: e.target.value })}
            />
                </label>
             <label>Description: 
               <input
              value={currentCourse.description || ""}
              placeholder=""
              type="text"
              onChange={(e) => setCurrentCourse({ ...currentCourse, description: e.target.value })}
            />
             </label>
              <label>URL ảnh: 
              <input
                type="text"
                value={currentCourse.imgUrl || ""}
                onChange={(e) => setCurrentCourse({ ...currentCourse, imgUrl: e.target.value })}
              />
            </label>
            <button onClick={handleAddCourse}>Thêm</button>
            <button onClick={() => setShowAddModal(false)}>Đóng</button>
          </div>
        </div>
      )}

      {/* Modal Chỉnh sửa khóa học */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Chỉnh sửa khóa học</h3>
            <label>lecturesName: 
            <input
              value={currentCourse.lecturesName || ""}
              placeholder="Tên khóa học"
              onChange={(e) => setCurrentCourse({ ...currentCourse, lecturesName: e.target.value })}
            />    </label>
              <label>productName: 
            <input
              value={currentCourse.productName || ""}
              placeholder="Tên giảng viên"
              onChange={(e) => setCurrentCourse({ ...currentCourse, productName: e.target.value })}
            />    </label>
              <label>Price: 
            <input
              value={currentCourse.price || ""}
              placeholder="Giá"
              type="number"
              onChange={(e) => setCurrentCourse({ ...currentCourse, price: parseInt(e.target.value) })}
            />
                </label>
              <label>CompletionTime: 
            <input
              value={currentCourse.completionTime || ""}
              placeholder="Ngày hoàn thành"
              type="date"
              onChange={(e) => setCurrentCourse({ ...currentCourse, completionTime: e.target.value })}
            />
                </label>
             <label>Description: 
               <input
              value={currentCourse.description || ""}
              placeholder=""
              type="text"
              onChange={(e) => setCurrentCourse({ ...currentCourse, description: e.target.value })}
            />
             </label>
              <label>URL ảnh: 
              <input
                type="text"
                value={currentCourse.imgUrl || ""}
                onChange={(e) => setCurrentCourse({ ...currentCourse, imgUrl: e.target.value })}
              />
            </label>
            <button onClick={handleEditCourse}>Lưu</button>
            <button onClick={() => setShowEditModal(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursepageAD;
