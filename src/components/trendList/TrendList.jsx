import TrendItem from "../trendItem";
import trendList from "../../mocks/trendList.js";
import "./index.css";

const TrendList = () => {
  console.log(trendList);
  return (
    <div className="TrendList">
      <h3>United States trends</h3>
      {trendList.map((item) => {
        return <TrendItem trend={item} key={item.id} />;
      })}
    </div>
  );
};

export default TrendList;
