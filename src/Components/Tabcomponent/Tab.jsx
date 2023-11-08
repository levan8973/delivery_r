import React, { useState } from "react";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab__container">
      <ul className="tab">
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => handleTabClick(index)}>
            {tab.title}
          </li>
        ))}
      </ul>

      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
