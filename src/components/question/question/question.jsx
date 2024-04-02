import { quiz } from "../../../question";
import "./question.css";

function Question({ index, setIndex }) {
  return (
    <>
      <div className="box">
        <h2>{quiz[index].question}</h2>
      </div>
    </>
  );
}

export default Question;
