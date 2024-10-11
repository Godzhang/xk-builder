import "./index.scss";
import { Modal } from "antd";
import iconList from "./iconList.json";
import * as Icons from "@ant-design/icons";
import { useState } from "react";
import store from "@/store";

const IconSelect = (props: any) => {
  const { openModal, setOpenModal } = props;
  const [selectIcon, setSelectIcon] = useState("");
  const comList = JSON.parse(JSON.stringify(store.getState().comList));
  const selectComId = store.getState().selectComId;
  const selectNode = comList.find((item: any) => item.comId === selectComId);

  const handleOk = () => {
    selectNode.type = selectIcon;
    store.dispatch({ type: "changeComList", value: comList });
    setOpenModal(false);
    setSelectIcon("");
  };

  const handleCancel = () => {
    setOpenModal(false);
    setSelectIcon("");
  };

  return (
    <div>
      <Modal
        closable={false}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="iconList">
          {iconList.map((iconName) => {
            const Icon = Icons[iconName as keyof typeof Icons];
            return (
              <div
                className={selectIcon === iconName ? "activeIcon" : "iconItem"}
                key={iconName}
                onClick={() => setSelectIcon(iconName)}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export default IconSelect;
