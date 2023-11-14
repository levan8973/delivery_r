import React from "react";
import Tab from "./Tab";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";
import TabContentFour from "./TabContentFour";
const Tabs = () => {
  const tabs = [
    {
      title: "Тент",
      content: <TabContentOne />,
    },
    {
      title: "Борт",
      content: <TabContentTwo />,
    },
    {
      title: "Рефрижератор",
      content: <TabContentThree />,
    },
    {
      title: "Фургон",
      content: <TabContentFour />,
    },
  ];

  return (
    <div>
      <Tab tabs={tabs} />
    </div>
  );
};

export default Tabs;
