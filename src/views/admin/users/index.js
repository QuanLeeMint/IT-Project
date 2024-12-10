import React from "react";
import "./style.scss";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "Toàn Khoa",
      email: "htung0403@gmail.com",
      password: "gianchun12",
      phone: "12345678",
      address: "123 abc",
    },
    {
      id: 2,
      name: "Minh Quân",
      email: "minhkhanh10082003@gmail.com",
      password: "gianchun12",
      phone: "123123",
      address: "abc",
    },
    {
      id: 3,
      name: "Tung Tree",
      email: "1@gmail.com",
      password: "123",
      phone: "0901340403",
      address: "abc",
    },
    {
      id: 4,
      name: "Minh Quân",
      email: "2@gmail.com",
      password: "123",
      phone: "0901340403",
      address: "abc",
    },
  ];

  const handleDelete = (id) => {
    console.log("Xóa người dùng có ID:", id);
    // Logic để xóa người dùng tại đây nhaa :))
  };

  return (
    <div className="user-list-page">
      <h1 className="title">Danh sách người dùng</h1>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Địa chỉ Email</th>
              <th>Mật khẩu</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(user.id)}
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

export default UsersPage;
