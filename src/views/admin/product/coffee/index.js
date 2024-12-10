import React, { useEffect, useState } from "react";
import "./style.scss";

const CoffeepageAD = () => {
  const [coffeePackages, setCoffeePackages] = useState([]); // Lưu thông tin danh sách cà phê
  const [showModal, setShowModal] = useState(false); // Hiện modal Edit
  const [currentCoffee, setCurrentCoffee] = useState({}); // Thông tin sản phẩm hiện tại
  const [showAddModal, setShowAddModal] = useState(false); // Hiện modal Thêm sản phẩm mới

  // Lấy dữ liệu từ server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/admin/coffeBag/load");
        const data = await response.json();
        setCoffeePackages(data);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin cà phê:", error);
      }
    };

    fetchData();
  }, []);

  // Handle Edit
  const handleEdit = (coffee) => {
    setCurrentCoffee(coffee);
    setShowModal(true);
  };

  // Handle Save chỉnh sửa
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/admin/coffeBag/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentCoffee.productId,
          origin: currentCoffee.origin,
          expirationDate: currentCoffee.expirationDate,
          productionDate: currentCoffee.productionDate,
          productName: currentCoffee.productName,
          price: currentCoffee.price,
          description: currentCoffee.description,
          imgUrl: currentCoffee.imgUrl,
        }),
      });

      const result = await response.json();
      console.log("Cập nhật thành công:", result);

      setShowModal(false);

      const updatedResponse = await fetch("http://localhost:3001/api/admin/coffeBag/load");
      const updatedData = await updatedResponse.json();
      setCoffeePackages(updatedData);
      window.alert("Cập nhật thông tin thành công");
    } catch (error) {
      console.error("Lỗi khi lưu thông tin:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/admin/coffeBag/delete/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      console.log("Xóa thành công:", result);

      const updatedResponse = await fetch("http://localhost:3001/api/admin/coffeBag/load");
      const updatedData = await updatedResponse.json();
      setCoffeePackages(updatedData);
      window.alert("Xóa thông tin thành công");
    } catch (error) {
      console.error("Lỗi khi xoá thông tin:", error);
    }
  };

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleAddSave = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/admin/coffeBag/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: currentCoffee.productName,
          price: currentCoffee.price,
          origin: currentCoffee.origin,
          productionDate: currentCoffee.productionDate,
          expirationDate: currentCoffee.expirationDate,
          description: currentCoffee.description,
          imgUrl: currentCoffee.imgUrl,
        }),
      });

      const result = await response.json();
      console.log("Thêm sản phẩm thành công:", result);

      setShowAddModal(false);

      const updatedResponse = await fetch("http://localhost:3001/api/admin/coffeBag/load");
      const updatedData = await updatedResponse.json();
      setCoffeePackages(updatedData);
      window.alert("Thêm sản phẩm thành công");
    } catch (error) {
      console.error("Lỗi khi thêm thông tin sản phẩm:", error);
    }
  };

  return (
    <div className="coffee-package-list">
      <h1 className="title">Cà Phê Gói Lẻ</h1>
      <div class="btn-add-container">

      <button className="btn-add" onClick={handleOpenAddModal}>
        Thêm Sản Phẩm
      </button>
      </div>
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
            {coffeePackages.length > 0 ? (
              coffeePackages.map((coffee) => (
                <tr key={coffee.productId}>
                  <td>{coffee.productName}</td>
                  <td>
                  {coffee.imgUrl?.split("/")?.pop() ? (
    <img
      src={require(`../../../../assets/Lets/${coffee.imgUrl?.split("/").pop()}`)}
      alt={coffee.productName}
      className="coffee-image"
    />
  ) : (
    <div className="no-image">Không có ảnh</div>
  )}
                  </td>
                  <td>{coffee.price?.toLocaleString("vi-VN")} VND</td>
                  <td>{coffee.origin}</td>
                  <td>{coffee.productionDate}</td>
                  <td>{coffee.expirationDate}</td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(coffee)}>
                      Sửa
                    </button>
                  </td>
                  <td>
                    <button className="btn-delete" onClick={() => handleDelete(coffee.productId)}>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Thêm mới sản phẩm */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Thêm Sản Phẩm</h2>
            <label>Tên: <input type="text" value={currentCoffee.productName || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, productName: e.target.value })} /></label>
            <label>Giá: <input type="number" value={currentCoffee.price || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, price: parseFloat(e.target.value) })} /></label>
            <label>Nguồn gốc: <input type="text" value={currentCoffee.origin || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, origin: e.target.value })} /></label>
            <label>Ngày sản xuất: <input type="date" value={currentCoffee.productionDate || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, productionDate: e.target.value })} /></label>
            <label>Ngày hết hạn: <input type="date" value={currentCoffee.expirationDate || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, expirationDate: e.target.value })} /></label>
            <label>Mô tả: <input type="text" value={currentCoffee.description || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, description: e.target.value })} /></label>
            <label>URL ảnh: 
              <input
                type="text"
                value={currentCoffee.imgUrl || ""}
                onChange={(e) => setCurrentCoffee({ ...currentCoffee, imgUrl: e.target.value })}
              />
            </label>
            <div className="modal-buttons">
              <button className="btn-save" onClick={handleAddSave}>Thêm</button>
              <button className="btn-close" onClick={handleCloseAddModal}>Đóng</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit thông tin */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Chỉnh sửa thông tin sản phẩm</h2>
            <label>Tên: <input type="text" value={currentCoffee.productName || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, productName: e.target.value })} /></label>
            <label>Giá: <input type="number" value={currentCoffee.price || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, price: parseFloat(e.target.value) })} /></label>
            <label>Nguồn gốc: <input type="text" value={currentCoffee.origin || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, origin: e.target.value })} /></label>
            <label>Ngày sản xuất: <input type="date" value={currentCoffee.productionDate || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, productionDate: e.target.value })} /></label>
            <label>Ngày hết hạn: <input type="date" value={currentCoffee.expirationDate || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, expirationDate: e.target.value })} /></label>
            <label>Mô tả: <input type="text" value={currentCoffee.description || ""} onChange={(e) => setCurrentCoffee({ ...currentCoffee, description: e.target.value })} /></label>
            <label>URL ảnh: 
              <input
                type="text"
                value={currentCoffee.imgUrl || ""}
                onChange={(e) => setCurrentCoffee({ ...currentCoffee, imgUrl: e.target.value })}
              />
            </label>
            <div className="modal-buttons">
              <button className="btn-save" onClick={handleSave}>Lưu</button>
              <button className="btn-close" onClick={handleCloseModal}>Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeepageAD;
