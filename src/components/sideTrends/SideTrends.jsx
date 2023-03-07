import TrendList from "../trendList";
import { FiSearch } from "react-icons/fi";
import "./index.css";

const SideTrends = () => {
  return (
    <div className="SideTrends">
      <div className="container_input">
        <input
          className="SideTrends_input"
          type="text"
          placeholder="Search Twitter"
        ></input>
        <FiSearch className="icon_input" />
      </div>
      <TrendList />
    </div>
  );
};

export default SideTrends;
