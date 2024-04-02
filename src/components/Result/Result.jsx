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
  buttonsDisabled,
  setButtonsDisabled,
  setScore, 
  score,
}) {
  console.log(quiz);
  // console.log(isCorrect);
  let Visible = elementVisible;
  let className = "none";
  const buttons = document.querySelectorAll(".btn-answer");

  function visible() {
    Visible === true ? (className = "Result") : (className = "none");
  }

  function unVisible() {
    Visible === false ? (className = "Result") : (className = "none");
  }
  visible();
  unVisible;

  const handleNext = () => {
    if (index + 1 === quiz.length) {
      setIndex(0);
      setScore(0);
    } else {
      setIndex(index + 1);
    }
    setElementVisible(false);
    setButtonsDisabled(false);
    buttons.forEach((button) => {
      button.classList.remove("green", "red");
    });
  };

  //   const handleBefore = () => {
  //     setIndex((index) => index - 1);
  //   };

  return (
    <div className={className}>
      {isCorrect === true ? (
        <h3 className="GoodFalse">
          <img className="goodCheck" src={checkdetour} alt="check" /> Goode
          Answer{" "}
        </h3>
      ) : (
        <h3 className="GoodFalse">
          <img className="falseCheck" src={X} alt="cross" /> Wrong noob!{" "}
        </h3>
      )}
      {index + 1 === quiz.length ? (
        <div>
        <p>Score : {score} / {quiz.length}</p>
        <button className="Next" onClick={handleNext}>
          Replay ?
        </button>
        </div>

      ) : (
        <button className="Next" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default Result;
