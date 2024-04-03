import { quiz } from "../../../question";
import "./question.css";
import PropTypes from "prop-types";
function Question({ index }) {
  return (
    <>
      <div className="box">
        <h2>{quiz[index].question}</h2>
      </div>
    </>
  );
}

export default Question;

Question.propTypes = {
  index: PropTypes.number.isRequired,
};
