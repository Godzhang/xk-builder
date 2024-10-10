import "./index.scss";
import { Input, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useMemo, useState } from "react";
import { attributesMap } from "./utils/attributesMap";
import InputComponent from "./components/InputComponent";
import store from "@/store";
import { subscribeHook } from "@/store/subscribe";
import { ComJson } from "../mainPart";

const RightCom = () => {
  const storeState = store.getState();
  const { selectComId } = storeState;
  const comList = JSON.parse(JSON.stringify(storeState.comList));
  const selectNode = useMemo(
    () => comList.find((item: ComJson) => item.comId === selectComId),
    [comList, selectComId]
  );
  subscribeHook();

  const getAttributePanel = () => {
    const comAttributeList = selectNode
      ? attributesMap[selectNode.comType]
      : [];
    return (
      <div>
        {comAttributeList.map((item, index) => {
          return (
            <div className="attributeItem" key={index}>
              <label className="attributeLabel">{item.label}</label>
              <div className="attributteItemValue">
                <InputComponent
                  selectNode={selectNode}
                  {...item}
                  onChange={changeComAttribute(item.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const changeComAttribute = (value: string) => (e: any) => {
    let attribute = e;
    if (typeof e === "object") {
      attribute = e.target.value;
    }
    selectNode[value] = attribute;
    store.dispatch({
      type: "changeComList",
      value: comList,
    });
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
