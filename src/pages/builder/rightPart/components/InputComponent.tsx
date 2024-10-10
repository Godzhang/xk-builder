import { FC, PropsWithChildren } from "react";
import { ComAttributes } from "../utils/attributesMap";
import { Input, Select, Switch } from "antd";
import { ComJson } from "../../mainPart";

type Props = ComAttributes & {
  onChange: any;
  selectNode: ComJson;
};

const InputComponent: FC<Props> = (props) => {
  const { onChange, type, defaultValue, options, selectNode, value } = props;

  const getComponent = () => {
    switch (type) {
      case "input":
        return (
          <Input
            value={selectNode[value as keyof ComJson] || ""}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        );
      case "switch":
        return (
          <Switch
            value={selectNode[value as keyof ComJson] || false}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        );
      case "select":
        return (
          <Select
            value={selectNode[value as keyof ComJson] || defaultValue}
            defaultValue={defaultValue}
            options={options}
            onChange={onChange}
          ></Select>
        );
    }
  };

  return <div>{getComponent()}</div>;
};

export default InputComponent;
