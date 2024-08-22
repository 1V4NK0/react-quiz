import React from "react";

const UploadQuiz = () => {
  return (
    <div className="upload">
      <h2>Upload your Quiz!</h2>
      <input type="file" id="fileInput" accept="application/json" />
      <p>only .json format </p>
    </div>
  );
};

export default UploadQuiz;
