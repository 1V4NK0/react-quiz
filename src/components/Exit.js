import React from "react";
import { useQuiz } from "./QuizContext";

const Exit = () => {
  const { dispatch } = useQuiz();
  return (
    <button onClick={() => dispatch({ type: "exit" })} className="btn btn-ui">
      Exit
    </button>
  );
};

export default Exit;
