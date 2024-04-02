import { quiz } from "../../question";
import PropTypes from "prop-types";

import { useState } from "react";

function ButtonAnswer({ index }) {
  const questionData = quiz[index];

  const [isCorrect, setCorrect] = useState(false);
  const handleChoice = (e) => {
    //     console.log(indexButton);
    if (questionData.correctAnswer === e.target.value) {
      setCorrect(!isCorrect);
      console.log("coucou");
    } else {
      console.log("coucou2");
    }
  };

  return (
    <>
      <button value={questionData.choices[0]} onClick={handleChoice}>
        {" "}
        {questionData.choices[0]}{" "}
      </button>
      <button value={questionData.choices[1]} onClick={handleChoice}>
        {" "}
        {questionData.choices[1]}
      </button>
      <button value={questionData.choices[2]} onClick={handleChoice}>
        {" "}
        {questionData.choices[2]}
      </button>
      <button value={questionData.choices[3]} onClick={handleChoice}>
        {" "}
        {questionData.choices[3]}
      </button>
    </>
  );
}

ButtonAnswer.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ButtonAnswer;

{
  /* {questionData.choices.map((button, indexButton) => (
        <Button
          key={indexButton}
          button={button}
          onClick={() => handleChoice(indexButton)}
          className="btn"
        >
          {button}/
        </Button>
      ))} */
}
