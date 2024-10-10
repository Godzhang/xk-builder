import { Input as AntInput } from "antd";

const Input = (props: any) => {
  const { disabled, size, onChange } = props;

  return (
    <div>
      <AntInput disabled={disabled} size={size} onChange={onChange} />
    </div>
  );
};

export default Input;
