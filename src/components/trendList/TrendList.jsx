import TrendItem from "../trendItem";
import trendList from "../../mocks/trendList.js";
import "./index.css";

const TrendList = ({ inputValue }) => {
  const filteredTweet = () =>
    trendList.filter((tweet) => tweet.title.includes(inputValue));

  return (
    <div className="TrendList">
      <h3>United States trends</h3>
      {filteredTweet().map((item) => {
        return <TrendItem trend={item} key={item.id} />;
      })}
    </div>
  );
};

export default TrendList;
