import React from "react";
import "./style.scss";
const OrderPage = () => {
    const orders = [
      // Thêm dữ liệu mẫu
      { id: 21, customerName: "Lê Minh Quân", date: "2023-12-11T23:04:40", quantity: 6, total: 150000 },
      { id: 22, customerName: "Lê Minh Quân", date: "2023-12-11T23:35:29", quantity: 2, total: 4000 },
      { id: 23, customerName: "Lê Minh Quân", date: "2023-12-12T06:14:37", quantity: 2, total: 262323 },
      { id: 24, customerName: "Lê Minh Quân", date: "2023-12-12T06:28:09", quantity: 1, total: 232323 },
      { id: 24, customerName: "Lê Minh Quân", date: "2023-12-12T06:28:09", quantity: 1, total: 232323 },
      { id: 23, customerName: "Lê Minh Quân", date: "2023-12-12T06:28:09", quantity: 1, total: 232323 },
      { id: 21, customerName: "Lê Minh Quân", date: "2023-12-12T06:28:09", quantity: 1, total: 232323 },
      { id: 12, customerName: "Lê Minh Quân", date: "2023-12-12T06:28:09", quantity: 1, total: 232323 },
      { id: 10, customerName: "Lê Minh Quân", date: "2023-12-12T06:28:09", quantity: 1, total: 232323 },

      
    ];
  
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
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.date}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total.toLocaleString("vi-VN")} VND</td>
                  <td>
                    <button className="btn-view">Hoàn thành</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default OrderPage;
  