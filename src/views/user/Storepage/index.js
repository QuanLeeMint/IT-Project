import React, { memo } from 'react';
import './store.scss';
import Map from 'assets/Lets/Map.jpg';

const stores = [
  {
    name: "Let's Cafe Work Shop",
    address: "N1, phường Thống Nhất, Tp Biên Hòa, tỉnh Đồng Nai",
    phone: "090 648 42 40",
    openTime: 6,
    closeTime: 12,
  },
  {
    name: "Let's Cafe Lê Duẩn",
    address: "01 Lê Duẩn, Tp.Hồ Chí Minh",
    phone: "088 686 81 88",
    openTime: 7,
    closeTime: 23,
  },
  {
    name: "Let's Cafe Vũng Tàu",
    address: "41 Phó Đức Chính, Tp Vũng Tàu",
    phone: "0908842985",
    openTime: 6,
    closeTime: 22,
  },
  {
    name: "Let's Cafe Hà Nội",
    address: "101b Ng. 46C P. Phạm Ngọc Thạch, Trung Tự, Đống Đa, Hà Nội",
    phone: "084 577 8383",
    openTime: 6,
    closeTime: 22,
  },
  {
    name: "Let's Cafe Đà Lạt",
    address: "01 Trần Thánh Tông, Phường 3, Đà Lạt",
    phone: "0933747826",
    openTime: 6,
    closeTime: 22,
  },
  {
    name: "Let's Cafe Hoa Kỳ -  Blets Roastery ",
    address: "9328 E Garvey S Elmonte CA USA",
    phone: "0932677543",
    openTime: 6,
    closeTime: 22,
  } ,
];

const Storepage = () => {
  // Hàm xác định trạng thái OPEN/CLOSE dựa trên thời gian thực
  const getStatus = (openTime, closeTime) => {
    const currentHour = new Date().getHours();
    return currentHour >= openTime && currentHour < closeTime ? "OPEN" : "CLOSE";
  };

  return (
    <div className="store-system">
      <h1>_Hệ thống cửa hàng_</h1>
      <div className="store-list-map">
        <div className="store-list">
          <p className="store-count">Hiện có {stores.length} cửa hàng trong và ngoài nước</p>
          {stores.map((store, index) => {
            const status = getStatus(store.openTime, store.closeTime);
            return (
              <div className="store-item" key={index}>
                <h2>{store.name}</h2>
                <p>{store.address}</p>
                <p>📞 {store.phone}</p>
                <p className={`store-status ${status.toLowerCase()}`}>{status}</p>
                <p>Giờ mở cửa: {store.openTime}:00 - {store.closeTime}:00</p>
              </div>
            );
          })}
        </div>

        <div className="store-map">
          <img src={Map} alt="Bản đồ hệ thống cửa hàng" />
        </div>
      </div>
    </div>
  );
};

export default memo(Storepage);
