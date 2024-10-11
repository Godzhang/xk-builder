import iconAttributes from "./iconAttributes";

/**
 * 管理不同组件的属性配置
 */
interface AttributesMap {
  [key: string]: ComAttributes[];
}

export interface ComAttributes {
  label: string;
  value: string;
  type: string;
  options?: any[];
  defaultValue?: any;
  modalType?: string;
}

const buttonAttributes: ComAttributes[] = [
  { label: "设置按钮文字", value: "caption", type: "input" },
  { label: "设置危险按钮", value: "danger", type: "switch" },
  { label: "设置按钮禁用", value: "disabled", type: "switch" },
  { label: "设置幽灵按钮", value: "ghost", type: "switch" },
  {
    label: "设置按钮形状",
    value: "shape",
    type: "select",
    options: [{ value: "default" }, { value: "circle" }, { value: "round" }],
    defaultValue: "default",
  },
  {
    label: "设置按钮大小",
    value: "size",
    type: "select",
    options: [{ value: "large" }, { value: "middle" }, { value: "small" }],
    defaultValue: "middle",
  },
];

const inputAttributes: ComAttributes[] = [
  { label: "设置输入框禁用", value: "disabled", type: "switch" },
  {
    label: "设置输入框尺寸",
    value: "size",
    type: "select",
    options: [{ value: "large" }, { value: "middle" }, { value: "small" }],
    defaultValue: "middle",
  },
];

const attributesMap: AttributesMap = {
  Button: buttonAttributes,
  Input: inputAttributes,
  Icon: iconAttributes,
};

export { attributesMap };
