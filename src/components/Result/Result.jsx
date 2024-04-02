import { quiz } from "../../question";
import checkdetour from "./assets/checkdetour.png";
import "./Result.css";
// onClick={setIndex(index + 1)}
function Result() {
  console.log(quiz);
  return (
    <div className="Result">
      <h3>
        <img className="goodCheck" src={checkdetour} />
        Good Answer
      </h3>
      <button className="Next">Next</button>
    </div>
  );
}

export default Result;
