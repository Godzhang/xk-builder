import {
  TabletOutlined,
  TableOutlined,
  FrownOutlined,
  DoubleRightOutlined,
  CheckOutlined,
  InfoCircleOutlined,
  StarOutlined,
  LoginOutlined,
  FormOutlined,
  CreditCardOutlined,
  AlertOutlined,
  SmallDashOutlined,
  QrcodeOutlined,
  InstagramOutlined,
  UserOutlined,
  InfoOutlined,
  FileImageOutlined,
  UploadOutlined,
} from "@ant-design/icons";

interface ComponentIconMap {
  [key: string]: any;
}

export interface ComponentTextMap {
  [key: string]: string;
}

export const componentIconMap: ComponentIconMap = {
  Button: TabletOutlined,
  Icon: FrownOutlined,
  Input: DoubleRightOutlined,
  Checkbox: CheckOutlined,
  Radio: InfoCircleOutlined,
  Rate: StarOutlined,
  Switch: LoginOutlined,
  Form: FormOutlined,
  Card: CreditCardOutlined,
  FloatButton: TabletOutlined,
  Alert: AlertOutlined,
  Progress: SmallDashOutlined,
  QRCode: QrcodeOutlined,
  Tag: InstagramOutlined,
  Avatar: UserOutlined,
  Badge: InfoOutlined,
  Carousel: FileImageOutlined,
  Upload: UploadOutlined,
  Image: FileImageOutlined,
  Table: TableOutlined,
};

export const componentTextMap: ComponentTextMap = {
  Button: "按钮",
  Icon: "图标",
  Input: "输入框",
  Checkbox: "多选框",
  Radio: "单选框",
  Rate: "评分",
  Switch: "开关",
  Form: "表单",
  Card: "卡片容器",
  FloatButton: "悬浮按钮",
  Alert: "警告提示",
  Progress: "进度条",
  QRCode: "二维码",
  Tag: "标签",
  Avatar: "头像",
  Badge: "徽标容器",
  Carousel: "轮播图",
  Upload: "上传图片",
  Image: "图片",
  Table: "表格",
};
