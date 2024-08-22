import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>(you can upload your quiz with .json file)</h3>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
      <button className="btn btn-ui" onClick={() => dispatch({type: "upload"})}>Upload your quiz</button>
    </div>
  );
};

export default StartScreen;
