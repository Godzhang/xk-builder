import "./index.scss";
import { Input, Tabs } from "antd";
import type { TabsProps } from "antd";
import type { ChangeEvent } from "react";

const RightCom = () => {
  const getAttributePanel = () => {
    return (
      <div>
        <div className="attributeItem">
          <label>按钮文字：</label>
          <div className="attributteItemValue">
            <Input onChange={changeComAttribute} />
          </div>
        </div>
      </div>
    );
  };

  const changeComAttribute = (e: ChangeEvent<HTMLInputElement>) => {
    window.renderCom.caption = e.target.value;
    window.setComList([...window.comList]);
  };

  const items: TabsProps["items"] = [
    {
      key: "attributePanel",
      label: (
        <div style={{ fontSize: "18px", width: "100px", textAlign: "center" }}>
          属性
        </div>
      ),
      children: getAttributePanel(),
    },
    {
      key: "stylePanel",
      label: (
        <div style={{ fontSize: "18px", width: "100px", textAlign: "center" }}>
          样式
        </div>
      ),
      children: "content of tab pane 2",
    },
  ];

  const onChange = () => {};

  return (
    <div className="rightCom">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default RightCom;
