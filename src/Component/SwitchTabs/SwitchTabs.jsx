import React, { useState } from "react";
import "./style.scss";
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectTab, setSelectTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectTab === index ? "active" : ""}`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </span>
          );
        })}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
