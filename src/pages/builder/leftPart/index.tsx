import "./index.scss";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import * as components from "@/components";
import { componentIconMap, componentTextMap } from "./utils/iconList";

const LeftPart = () => {
  const onDragStart = (name: string) => {
    return () => {
      window.nowCom = name;
    };
  };

  const renderComponent = () => {
    return (
      <div className="componentGroup">
        {Object.keys(components).map((name) => {
          const Icon = componentIconMap[name];
          const text = componentTextMap[name];
          return (
            <div className="componentItem" key={name}>
              <div
                draggable
                style={{ display: "inline-block" }}
                onDragStart={onDragStart(name)}
              >
                <Icon style={{ marginRight: "10px" }} />
                <span>{text}</span>
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
