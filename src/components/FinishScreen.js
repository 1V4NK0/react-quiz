import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "⭐️";
  if (percentage >= 80 && percentage < 100) emoji = "😻";
  if (percentage >= 50 && percentage < 80) emoji = "🪼";
  if (percentage >= 30 && percentage < 50) emoji = "🧝🏼‍♀️";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(best score: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
