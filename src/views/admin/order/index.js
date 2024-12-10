import React, { useState, useEffect } from "react";
import "./style.scss";

const OrderPage = () => {
  const [orders, setOrders] = useState([]); // State lưu danh sách đơn hàng

  // Gọi API lấy thông tin đơn hàng từ server
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/admin/order/load");
      const data = await response.json();
      console.log("Response Data: ", data);

      // Kiểm tra xem dữ liệu trả về có hợp lệ không
      if (response.ok ) {
        setOrders(data.orders); // Gán trực tiếp dữ liệu cho state
      } else {
        console.error("Không nhận được thông tin hợp lệ từ server");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Gọi API khi component được mount
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order-page">
      <h1 className="title">Danh sách đặt hàng</h1>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Khách hàng</th>
              <th>Ngày đặt</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId || "N/A"}</td>
                  <td>{order.customerName || "Không xác định"}</td>
                  <td>{order.orderDate ? new Date(order.orderDate).toLocaleString() : "Không xác định"}</td>
                  <td>{order.quantity || 0}</td>
                  <td>{order.total ? order.total.toLocaleString("vi-VN") + " VND" : "0 VND"}</td>
                  <td>
                    <button className="btn-view">Hoàn thành</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Không có đơn hàng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
