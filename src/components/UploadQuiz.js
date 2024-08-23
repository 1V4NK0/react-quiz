import React, { useState } from "react";

const UploadQuiz = ({ dispatch }) => {
  const [fileName, setFileName] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);

      if (file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const fileContent = JSON.parse(e.target.result);

            // Check if the file contains a 'questions' key with an array
            if (fileContent && Array.isArray(fileContent.questions)) {
              dispatch({
                type: "dataReceived",
                payload: fileContent.questions,
              });
            } else {
              alert(
                "Invalid file format. The JSON should contain a 'questions' array."
              );
            }
          } catch (error) {
            alert("Invalid JSON file.");
          }
        };
        reader.readAsText(file);
      } else {
        alert("Please upload a valid JSON file.");
      }
    }
  };

  return (
    <div className="upload">
      <h2>Upload your Quiz!</h2>
      <input
        type="file"
        id="fileInput"
        accept="application/json"
        onChange={handleUpload}
      />
      <p>only .json format</p>
      {fileName && <p>File uploaded: {fileName}</p>}
    </div>
  );
};

export default UploadQuiz;
