import "./index.scss";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import * as components from "@/components";

const LeftPart = () => {
  const renderComponent = () => {
    return (
      <div>
        {Object.keys(components).map((name) => {
          return (
            <div className="componentItem" draggable key={name}>
              <div style={{ display: "inline-block" }}>
                <span>{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "component",
      label: (
        <div style={{ fontSize: "18px", width: "100px", textAlign: "center" }}>
          组件
        </div>
      ),
      children: renderComponent(),
    },
    {
      key: "data",
      label: (
        <div style={{ fontSize: "18px", width: "100px", textAlign: "center" }}>
          数据
        </div>
      ),
      children: renderComponent(),
    },
  ];

  const onChange = () => {};

  return (
    <div className="leftCom">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default LeftPart;
