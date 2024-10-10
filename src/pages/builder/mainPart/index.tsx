import "./index.scss";
import { DragEvent, useMemo, useRef, useState } from "react";
import * as components from "@/components";
import { getDomOffset } from "@/utils";

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
  const [comList, setComList] = useState<ComJson[]>([]);
  // 保存在当前画布拖拽的节点
  const [dragCom, setDragCom] = useState<ComJson | null>(null);
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

  const selectCom = (com: ComJson) => {
    return () => {
      setSelectId(com.comId);
      window.renderCom = com;
      window.comList = comList;
      window.setComList = setComList;
    };
  };

  const onDragStart = (com: ComJson) => {
    return (e: DragEvent) => {
      window.nowCom = "renderCom";
      setDragCom(com);
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
    if (window.nowCom === "renderCom" && dragCom && dragCom.style) {
      dragCom.style = {
        ...dragCom.style,
        left:
          parseInt(dragCom.style.left) +
          e.clientX -
          distance.current.startLeft +
          "px",
        top:
          parseInt(dragCom.style.top) +
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

      comList.push({
        comType: window.nowCom,
        style,
        comId: `comId_${Date.now()}`,
      });
    }
    setComList([...comList]);
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
      {comList.map((com, index) => {
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
