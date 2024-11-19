import React, { useState } from 'react';
import './style.scss';
import nongtrai from "assets/Lets/farm.jpg";
import soche from "assets/Lets/So_che.jpg";
import rangcafe from "assets/Lets/roast.jpg";
import tachcaphe from "assets/Lets/product.jpg";

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
      content: "Phụ thuộc vào vị trí địa lý và khí hậu của từng vùng đất mà những người nông dân sẽ lựa chọn giống cà phê để gieo trồng cho phù hợp. ...",
    },
    {
      id: 'soche',
      imgSrc: soche,
      title: "Sơ chế cà phê",
      content: "Khi cà phê đã được hái xuống thì cần bắt đầu ngay quy trình chế biến. Công việc này nên được làm càng nhanh càng tốt để tránh làm ảnh hưởng ...",
    },
    {
      id: 'rang',
      imgSrc: rangcafe,
      title: "Rang cà phê",
      content: "Quá trình rang sẽ khiến cho những hạt cà phê xanh trở thành màu nâu mà chúng ta thường nhìn thấy ở những quán cà phê. ...",
    },
    {
      id: 'cup',
      imgSrc: tachcaphe,
      title: "Tách cà phê thơm ngon",
      content: "Kết thúc quy trình “From Farm To Cup” này chính là khi làm nên những tách cà phê thơm ngon, đậm đà. ...",
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
      <SectionTitle />
      <JourneyTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <ContentGrid currentTab={currentTab} />
    </div>
  );
}

export default Storypage;
