import React, { memo } from 'react';
import './provide.scss';
import backgroundImage from 'assets/Lets/quan.jpg';
import image1 from 'assets/Lets/Xuong.jpg';
import image2 from 'assets/Lets/logo_let.jpg';


const Aboutpage = () => {
    return (
        <div className="provide">
            {/* Phần tiêu đề với hình nền */}
            <section className="about-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Cung cấp cà phê</h1>
            </section>

            {/* Phần nội dung chi tiết */}
            <section className="about-content">
                {/* Thông tin doanh nghiệp */}
                <div className="about-section">
                    <div className="text-content">
                        <h2>Tại sạo phải chọn Let's Cafe ___</h2>
                        <p className="subtitle">Cà phê 100% rang mộc</p>
                        <p className="description">Để đảm bảo chất lượng tối đa, Let's Café tin tưởng vào sự tài năng của những thợ rang chuyên nghiệp. Quy trình rang tỉ mỉ giúp tạo ra hương thơm đặc trưng và vị cà phê mạnh mẽ, đáp ứng đúng Gu của những người yêu thích cà phê đậm đà.</p>
                        <div className="services">
                            <div>
                            <i className="icon-check"></i>
                            <p>Quality<br /><b>Services</b></p>
                            </div>
                            <div>
                            <i className="icon-designer"></i>
                            <p>Professional<br /><b>Roaster</b></p>
                            </div>
                            <div>
                            <i className="icon-consultation"></i>
                            <p>Free<br /><b>Consultation</b></p>
                            </div>
                            <div>
                            <i className="icon-support"></i>
                            <p>Customer<br /><b>Support</b></p>
                            </div>
                        </div>
                    </div>
                    <img src={image1} alt="Company info" className="about-image" />
                </div>

                {/* Giá trị cốt lõi */}
                <div className="about-section alternate">
                    <div className="text-content-2">
                        <h2>ĐĂNG KÝ THÔNG TIN</h2>
                        <p className="description">
                            Hãy chia sẻ với Let's Café thông tin của bạn để nhận những ưu đãi và cập nhật mới nhất. Chúng tôi sẽ liên hệ với bạn sớm nhất!
                        </p>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Họ và Tên</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Nhập họ và tên của bạn"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Nhập email của bạn"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Tin nhắn</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Nhập tin nhắn của bạn"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button type="submit">GỬI THÔNG TIN</button>
                        </form>
                    </div>
                    <img src={image2} alt="logo_let" className="about-image" />
                </div>
            </section>
        </div>
    );
};

export default memo(Aboutpage);
