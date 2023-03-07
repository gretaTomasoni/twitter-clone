import { FiMoreHorizontal } from "react-icons/fi";
import "./index.css";

const TrendItem = ({ trend }) => {
  return (
    <div className="TrendItem">
      <div>
        <div className="trend_category">
          <span>
            {trend.id} - {trend.tag}
          </span>
        </div>
        <p>{trend.title}</p>
        <span>{trend.tweets}</span>
      </div>
      <FiMoreHorizontal className="iconMore" />
    </div>
  );
};

export default TrendItem;
