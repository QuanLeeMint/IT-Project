import React from "react";
import "./style.scss";
import Guthom from "assets/Lets/guthom.png"
import Gudam from "assets/Lets/gudam.png"
const CoffeepageAD = () => {
  const coffeePackages = [
    {
      id: 1,
      name: "Gu thơm",
      image: Guthom, // Thay bằng link ảnh thật
      price: 100000,
      origin: "Đà Lạt",
      manufactureDate: "2024-01-01",
      expiryDate: "2025-01-01",
    },
    {
      id: 2,
      name: "Gu đậm",
      image: Gudam, // Thay bằng link ảnh thật
      price: 800000,
      origin: "Buôn Ma Thuột",
      manufactureDate: "2024-03-15",
      expiryDate: "2025-03-15",
    },
    {
        id: 3,
        name: "Gu đậm",
        image: Gudam, // Thay bằng link ảnh thật
        price: 800000,
        origin: "Buôn Ma Thuột",
        manufactureDate: "2024-03-15",
        expiryDate: "2025-03-15",
      },
      {
        id: 4,
        name: "Gu đậm",
        image: Gudam, // Thay bằng link ảnh thật
        price: 800000,
        origin: "Buôn Ma Thuột",
        manufactureDate: "2024-03-15",
        expiryDate: "2025-03-15",
      },
      {
        id: 5,
        name: "Gu đậm",
        image: Gudam, // Thay bằng link ảnh thật
        price: 800000,
        origin: "Buôn Ma Thuột",
        manufactureDate: "2024-03-15",
        expiryDate: "2025-03-15",
      },
  ];

  const handleEdit = (id) => {
    console.log("Sửa sản phẩm có ID:", id);
    // Logic để sửa sản phẩm 
  };

  const handleDelete = (id) => {
    console.log("Xóa sản phẩm có ID:", id);
    // Logic để xóa sản phẩm
  };

  return (
    <div className="coffee-package-list">
      <h1 className="title">Cà Phê Gói Lẻ</h1>
      <div className="coffee-table">
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Nguồn gốc</th>
              <th>Ngày sản xuất</th>
              <th>Ngày hết hạn</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {coffeePackages.map((coffee) => (
              <tr key={coffee.id}>
                <td>{coffee.name}</td>
                <td>
                  <img src={coffee.image} alt={coffee.name} className="coffee-image" />
                </td>
                <td>{coffee.price.toLocaleString("vi-VN")} VND</td>
                <td>{coffee.origin}</td>
                <td>{coffee.manufactureDate}</td>
                <td>{coffee.expiryDate}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(coffee.id)}
                  >
                    Sửa
                  </button>
                </td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(coffee.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoffeepageAD;
