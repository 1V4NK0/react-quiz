import React from "react";

const Exit = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: "exit" })} className="btn btn-ui">
      Exit
    </button>
  );
};

export default Exit;
