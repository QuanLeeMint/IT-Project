import React, { useEffect, useState } from "react";
import "./style.scss";

const UsersPage = () => {
  const [users, setUsers] = useState([]); // State lưu danh sách người dùng
  const [loading, setLoading] = useState(true); // Trạng thái đang load dữ liệu
  const [error, setError] = useState(null);

  // Gọi API để fetch thông tin khách hàng
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/admin/customers/user", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Không thể tải dữ liệu");
      }

      const result = await response.json();
      setUsers(result.customers); // Lấy danh sách người dùng từ backend
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://localhost:3001/api/admin/customers/user/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Gửi ID qua request body
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        fetchUsers(); // Gọi lại fetchUsers sau khi xóa thành công
      } else {
        alert('Không thể xóa khách hàng');
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div className="user-list-page">
      <h1 className="title">Danh sách người dùng</h1>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.customerId}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.telNumber || "N/A"}</td>
                  <td>{user.address || "N/A"}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(user.customerId)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Không tìm thấy dữ liệu người dùng.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
