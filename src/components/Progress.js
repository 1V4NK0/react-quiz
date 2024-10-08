import React from "react";
import { useQuiz } from "./QuizContext";

const Progress = () => {
  const { index, numQuestions, points, maxPossiblePoints} = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index} </strong>/ {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
