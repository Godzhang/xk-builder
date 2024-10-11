import { FC, PropsWithChildren, useState } from "react";
import { ComAttributes } from "../utils/attributesMap";
import { Button, Input, Select, Switch } from "antd";
import { ComJson } from "../../mainPart";
import * as ModalComponentMap from "@/pages/modal";

type Props = ComAttributes & {
  onChange: any;
  selectNode: ComJson;
};

const InputComponent: FC<Props> = (props) => {
  const {
    onChange,
    type,
    value,
    label,
    defaultValue,
    options,
    selectNode,
    modalType,
  } = props;
  const val = value as keyof ComJson;
  const ModalComponent =
    ModalComponentMap.default[
      (modalType as keyof typeof ModalComponentMap.default) || "IconSelect"
    ];

  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };

  const getComponent = () => {
    switch (type) {
      case "input":
        return (
          <Input
            value={selectNode[val] || ""}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        );
      case "switch":
        return (
          <Switch
            value={selectNode[val] || false}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        );
      case "select":
        return (
          <Select
            value={selectNode[val] || defaultValue}
            defaultValue={defaultValue}
            options={options}
            onChange={onChange}
          ></Select>
        );
      case "number":
        return (
          <Input
            type="number"
            value={selectNode[val] || ""}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        );
      case "modal":
        return <Button onClick={showModal}>{label}</Button>;
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      {getComponent()}
      <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default InputComponent;
