import * as Icons from "@ant-design/icons";

const Icon = (props: any) => {
  const { rotate, spin, type } = props;
  const IconComponent = Icons[(type as keyof typeof Icons) || "HomeOutlined"];

  return (
    <div>
      <IconComponent rotate={rotate} spin={spin} />
    </div>
  );
};

export default Icon;
