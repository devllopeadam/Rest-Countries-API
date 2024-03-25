import { Link } from "react-router-dom";
import "./back.scss";
import { HiArrowLongLeft } from "react-icons/hi2";
const Back = () => {
  return (
    <div className="back">
      <Link
        className="back-button"
        to={"/"}>
        <HiArrowLongLeft />
        <p>Back</p>
      </Link>
    </div>
  );
};

export default Back;
