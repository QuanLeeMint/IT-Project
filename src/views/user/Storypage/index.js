import React, { useState } from 'react';
import './style.scss';
import nongtrai from "assets/Lets/farm.jpg";
import soche from "assets/Lets/So_che.jpg";
import rangcafe from "assets/Lets/roast.jpg";
import tachcaphe from "assets/Lets/product.jpg";
import backgroundImage from "assets/Lets/quan.jpg"
function SectionTitle() {
  return (
    <div className="section-title">
      <h2>_ From Farm To Cup _</h2>
      <p>Hành trình kì diệu</p>
    </div>
  );
}

function JourneyTabs({ currentTab, setCurrentTab }) {
  return (
    <div className="journey-tabs">
      <span onClick={() => setCurrentTab('all')} className={currentTab === 'all' ? 'active' : ''}>All</span>
      <span onClick={() => setCurrentTab('farm')} className={currentTab === 'farm' ? 'active' : ''}>Từ nông trại xa xôi</span>
      <span onClick={() => setCurrentTab('soche')} className={currentTab === 'soche' ? 'active' : ''}>Sơ chế và bảo quản cà phê</span>
      <span onClick={() => setCurrentTab('rang')} className={currentTab === 'rang' ? 'active' : ''}>Rang cà phê</span>
      <span onClick={() => setCurrentTab('cup')} className={currentTab === 'cup' ? 'active' : ''}>Kết thúc hành trình tại quán cà phê</span>
    </div>
  );
}


function ContentCard({ imgSrc, title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="content-card ">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{isExpanded ? content : `${content.slice(0, 206)}...`}</p>
      <button onClick={toggleExpand}>
        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
      </button>
    </div>
  );
}

function ContentGrid({ currentTab }) {
  const data = [
    {
      id: 'farm',
      imgSrc: nongtrai,
      title: "Khởi nguồn từ nông trại",
      content: "Phụ thuộc vào vị trí địa lý và khí hậu của từng vùng đất mà những người nông dân sẽ lựa chọn giống cà phê để gieo trồng cho phù hợp. Tùy thuộc vào từng giống cây nhưng sẽ mất khoảng 3 đến 4 năm cho đến khi cây cà phê ra trái. Đến mùa thu hoạch hạt cà phê, người nông dân sẽ chỉ chọn hái những quả chín nhất và hái trực tiếp bằng tay. Việc lựa chọn và thu hoạch cà phê thường sẽ kéo dài vài ngày hoặc cả tháng cho đến khi thu hoạch hết.",
    },
    {
      id: 'soche',
      imgSrc: soche,
      title: "Sơ chế cà phê",
      content: "Khi cà phê đã được hái xuống thì cần bắt đầu ngay quy trình chế biến. Công việc này nên được làm càng nhanh càng tốt để tránh làm ảnh hưởng đến chất lượng cà phê. Sau khi hoàn thành giai đoạn bóc vỏ, nhân cà phê bên trong sẽ được sấy khô. Tiếp theo sẽ là khoảng thời gian để hạt cà phê được ‘nghỉ ngơi’ ở nhiệt độ và độ ẩm thích hợp. Cuối cùng, cà phê sẽ được xát vỏ và phân loại theo kích cỡ hạt để đóng gói và vận chuyển.",
    },
    {
      id: 'rang',
      imgSrc: rangcafe,
      title: "Rang cà phê",
      content: "Quá trình rang sẽ khiến cho những hạt cà phê xanh trở thành màu nâu mà chúng ta thường nhìn thấy ở những quán cà phê. Ở mỗi mẻ rang tùy vào mục đích khác nhau mà họ sẽ điều chỉnh và lựa chọn mức độ rang sao cho phù hợp nhất, đảm bảo mùi vị, màu sắc của cà phê khi lên thành phẩm. Rang cà phê là một quá trình rất quan trọng ảnh hưởng trực tiếp đến mùi vị của cà phê và từng tách cà phê.",
    },
    {
      id: 'cup',
      imgSrc: tachcaphe,
      title: "Tách cà phê thơm ngon",
      content: "Kết thúc quy trình “From Farm To Cup” này chính là khi làm nên những tách cà phê thơm ngon, đậm đà. Đến đây vai trò của người Barista sẽ được thể hiện. Có thể thấy để có thể đi hết một hành trình kì diệu ấy thì đó là cả một chặng đường dài với những nỗ lực, cố gắng và làm việc tỉ mỉ từ những người nông dân vun trồng, hái quả cho đến những Barista đảm nhiệm công việc pha chế trong cửa hàng.",
    },
  ];

  const filteredData = currentTab === 'all' ? data : data.filter(item => item.id === currentTab);

  return (
    <div className="content-grid">
      {filteredData.map((item, index) => (
        <div key={index} className={`card card-${index + 1}`}>
          <ContentCard
            imgSrc={item.imgSrc}
            title={item.title}
            content={item.content}
          />
        </div>
      ))}
    </div>
  );
}


const Storypage = () => {
  const [currentTab, setCurrentTab] = useState('all'); // Mặc định là 'all'

  return (
    <div className="from-farm-to-cup">
      <section className="story-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <h1>Câu chuyện thương hiệu</h1>
      </section>
      <section className='story-content'>
          <SectionTitle />
          <JourneyTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <ContentGrid currentTab={currentTab} />
      </section>
      
    </div>
  );
}

export default Storypage;
