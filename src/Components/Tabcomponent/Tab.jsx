import { useState } from "react";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab__container">
      <ul className="tab__list-titles ">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              background: activeTab === index ? "#028BC1" : "none",
            }}>
            <span style={{ color: activeTab === index ? "#FFF" : "#006790" }}>
              {tab.title}
            </span>
          </li>
        ))}
      </ul>

      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
