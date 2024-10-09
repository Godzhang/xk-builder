import DesignTop from "./designTop";
import LeftPart from "./leftPart";
import MainPart from "./mainPart";
import RightPart from "./rightPart";
import "./index.scss";

const Builder = () => {
  return (
    <div className="builder-container">
      <DesignTop />
      <div className="main-container">
        <LeftPart />
        <MainPart />
        <RightPart />
      </div>
    </div>
  );
};

export default Builder;
