import "./index.scss";
import { DragEvent, useMemo, useRef, useState } from "react";
import * as components from "@/components";
import { getDomOffset } from "@/utils";
import Store from "@/store";
import { subscribeHook } from "@/store/subscribe";

export interface ComJson {
  comType: string;
  comId: string; // 组件唯一 id
  style?: any;
  caption?: string;
}
interface Distance {
  startLeft: number;
  startTop: number;
  endLeft: number;
  endTop: number;
}

const MainCom = () => {
  // 存储已拖入的组件类型
  const comList = JSON.parse(JSON.stringify(Store.getState().comList));
  // 保存在当前画布拖拽的节点 id
  const [dragComId, setDragComId] = useState<string>("");
  // 当前选中节点的 comId
  const [selectId, setSelectId] = useState<string>("");
  const mainComRef = useRef<HTMLDivElement>(null);
  // 保存鼠标的开始位置和结束位置
  const distance = useRef<Distance>({
    startLeft: 0,
    startTop: 0,
    endLeft: 0,
    endTop: 0,
  });
  // 拿到当前拖拽的节点类型
  const nowCom = Store.getState().dragCom;
  subscribeHook();

  const selectCom = ({ comId, comType }: ComJson) => {
    return () => {
      setSelectId(comId);
      Store.dispatch({ type: "changeSelectComId", value: comId });
    };
  };

  const onDragStart = (com: ComJson) => {
    return (e: DragEvent) => {
      setDragComId(com.comId);
      // 鼠标开始位置
      distance.current.startLeft = e.clientX;
      distance.current.startTop = e.clientY;
    };
  };

  const onDrop = (e: DragEvent) => {
    // 鼠标结束位置
    distance.current.endLeft = e.clientX;
    distance.current.endTop = e.clientY;
    // 判断当前拖拽的节点是从左侧组件栏，还是从画布中拖拽的
    if (dragComId) {
      const node = comList.find((item: ComJson) => item.comId === dragComId);
      node.style = {
        ...node.style,
        left:
          parseInt(node.style.left) +
          e.clientX -
          distance.current.startLeft +
          "px",
        top:
          parseInt(node.style.top) +
          e.clientY -
          distance.current.startTop +
          "px",
      };
    } else {
      const containerOffset = getDomOffset(mainComRef.current);
      const style = {
        position: "absolute",
        left: e.clientX - containerOffset.left + "px",
        top: e.clientY - containerOffset.top + "px",
        zIndex: 100,
      };
      const comId = `comId_${Date.now()}`;
      const comNode = {
        comType: nowCom,
        style,
        comId,
      };
      comList.push(comNode);
      // 拖入之后给予选中状态
      selectCom(comNode)();
    }
    Store.dispatch({ type: "changeComList", value: [...comList] });
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const onDragEnter = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      ref={mainComRef}
      className="mainCom"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
    >
      {comList.map((com: ComJson, index: number) => {
        const Com = components[com.comType as keyof typeof components];
        return (
          <div
            key={`${com.comType}-${index}`}
            draggable
            onClick={selectCom(com)}
            onDragStart={onDragStart(com)}
          >
            <div
              className={com.comId === selectId ? "selectCom" : ""}
              style={com.style}
            >
              <Com {...com} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainCom;
