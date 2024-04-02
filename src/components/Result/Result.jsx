import { quiz } from "../../question";
import checkdetour from "./assets/checkdetour.png";
import X from "./assets/X.png";
import "./Result.css";
// onClick={setIndex(index + 1)}
function Result({
  isCorrect,
  elementVisible,
  setElementVisible,
  index,
  setIndex,
}) {
  console.log(isCorrect);
  let Visible = elementVisible;
  let className = "none";
  function visible() {
    Visible === true ? (className = "Result") : (className = "none");
  }

  function unVisible() {
    Visible === false ? (className = "Result") : (className = "none");
  }
  visible();
  unVisible;

  const handleNext = () => {
    setIndex(index + 1);
    setElementVisible(false);
  };

  //   const handleBefore = () => {
  //     setIndex((index) => index - 1);
  //   };

  return (
    <div className={className}>
      {isCorrect === true ? (
        <h3>
          <img className="goodCheck" src={checkdetour} /> Goode Answer{" "}
        </h3>
      ) : (
        <h3>
          <img className="falseCheck" src={X} /> Tes null !{" "}
        </h3>
      )}

      <button className="Next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Result;
