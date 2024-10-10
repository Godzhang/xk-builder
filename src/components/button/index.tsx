import { Button as AntButton } from "antd";

const Button = (props: any) => {
  const { caption } = props;

  return (
    <div>
      <AntButton>{caption || "按钮"}</AntButton>
    </div>
  );
};

export default Button;
