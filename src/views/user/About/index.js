import React, { memo } from 'react';
import './about.scss';
import backgroundImage from 'assets/Lets/quan.jpg';
import image1 from 'assets/Lets/workshop.jpg';
import image2 from 'assets/Lets/roast.jpg';
import image3 from 'assets/Lets/farm.jpg';
import pdfFile from 'assets/Lets/profile.pdf'; // Thay đổi đường dẫn đến file PDF của bạn

const Aboutpage = () => {
    return (
        <div className="about">
            {/* Phần tiêu đề với hình nền */}
            <section className="about-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Về chúng tôi</h1>
            </section>

            {/* Phần nội dung chi tiết */}
            <section className="about-content">
                {/* Thông tin doanh nghiệp */}
                <div className="about-section">
                    <div className="text-content">
                        <h2>THÔNG TIN DOANH NGHIỆP</h2>
                        <p className="subtitle">CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH</p>
                        <p className="description">Let's Cafe được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.</p>
                        <a href={pdfFile} download>
                            <button>XEM CHI TIẾT</button>
                        </a>
                    </div>
                    <img src={image1} alt="Company info" className="about-image" />
                </div>

                {/* Giá trị cốt lõi */}
                <div className="about-section alternate">
                    <div className="text-content-2">
                        <h2>GIÁ TRỊ CỐT LÕI</h2>
                        <p className="subtitle">TẦM NHÌN SỨ MỆNH</p>
                        <p className="description">Let's Café được nhiều người nhớ đến với sự chú trọng vào việc tạo ra những ly cà phê chuẩn Gu và nổi bật với dòng sản phẩm Gu Đậm, hấp dẫn để chinh phục mọi khách hàng, kể cả những người khó tính nhất. Bí quyết của Let's Café bắt đầu từ việc sử dụng 100% hạt robusta chất lượng cao, một loại hạt cà phê mạnh mẽ và có hương vị đặc trưng.  Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Let's Cafe trở nên tuyệt vời hơn</p>
                        <a >
                            <button>XEM CHI TIẾT</button>
                        </a>
                    </div>
                    <img src={image2} alt="Core values" className="about-image" />
                </div>

                {/* Văn hóa doanh nghiệp */}
                <div className="about-section">
                    <div className="text-content">
                        <h2>VĂN HÓA DOANH NGHIỆP</h2>
                        <p className="subtitle">CƠ HỘI NÀY LÀ CỦA CHÚNG MÌNH</p>
                        <p className="description">Là điểm hội tụ của cộng đồng, Let's Cafe luôn tìm kiếm những thành viên mới với mong muốn không ngừng hoàn thiện một không gian dành cho tất cả mọi người. Chúng mình luôn chào đón bạn trở thành một phần của Let's Cafe để cùng nhau siết chặt thêm những kết nối và sự gắn bó giữa người với người.</p>
                        <a href={pdfFile} download>
                            <button>XEM CHI TIẾT</button>
                        </a>
                    </div>
                    <img src={image3} alt="Culture" className="about-image" />
                </div>
            </section>
        </div>
    );
};

export default memo(Aboutpage);
