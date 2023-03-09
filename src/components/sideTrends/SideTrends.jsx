import { useState } from "react";
import TrendList from "../trendList";
import { FiSearch } from "react-icons/fi";
import "./index.css";

const SideTrends = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="SideTrends">
      <div className="container_input">
        <input
          className="SideTrends_input"
          type="text"
          placeholder="Search Trends"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <FiSearch className="icon_input" />
      </div>
      <TrendList inputValue={inputValue} />
    </div>
  );
};

export default SideTrends;
