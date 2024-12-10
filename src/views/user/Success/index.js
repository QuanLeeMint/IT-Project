import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const code = queryParams.get('code');
  const txnRef = queryParams.get('txnRef');
  const error = queryParams.get('error');

  useEffect(() => {
    if (code === '00') {
      handleSuccess();
    }
  }, [code]);
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.id;
    } catch (error) {
      console.error("Không thể decode token hoặc token không hợp lệ.", error);
      return null;
    }
  };
  const handleSuccess = async () => {
    try {
      const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
      console.log('Stored Cart: ', storedCart);

      if (!storedCart.length) {
        alert('Không có sản phẩm trong giỏ hàng!');
        return;
      }

      const userId = getUserIdFromToken();
      console.log('User ID từ token: ', userId);

      if (!userId) {
        alert('Không xác định thông tin người dùng!');
        return;
      }

      const response = await fetch('http://localhost:3001/api/save_order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId, // Thêm userId vào payload
          cartItems: storedCart,
          subtotal: storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }),
      });

      const result = await response.json();
      console.log('Response từ server: ', result);

      if (result.success) {
        sessionStorage.removeItem('cart');
        alert('Đơn hàng đã được lưu thành công!');
      } else {
        alert('Lưu thông tin đơn hàng thất bại!');
      }
    } catch (error) {
      console.error('Có lỗi trong quá trình lưu thông tin đơn hàng:', error);
    }
  };

  const handleGoHome = () => {
    navigate('/'); // Quay lại trang chủ
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Kết quả thanh toán với VNPAY</h1>
      {code === '00' ? (
        <div>
          <p style={{ color: 'green' }}>Giao dịch thành công!</p>
          <p>Mã giao dịch: {txnRef}</p>
        </div>
      ) : (
        <div>
          <p style={{ color: 'red' }}>Giao dịch thất bại!</p>
          <p>Lý do: {error || 'Không xác định'}</p>
        </div>
      )}

      <button
        onClick={handleGoHome}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          border: 'none',
          color: '#fff',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Quay lại trang chủ
      </button>
    </div>
  );
};

export default Success;
