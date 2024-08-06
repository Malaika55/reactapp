import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.show("Converted to Uppercase", "warning");
  };

  const handleDownClick = () => {
    setText(text.toLowerCase());
    props.show("Converted to Lowercase", "warning");
  };

  const handleClearText = () => {
    setText("");
    props.show("Cleared Text", "warning");
  };

  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.show("Copied Text to Clipboard", "warning");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.show("Extra Spaces Removed", "warning");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${
              props.mode === "dark" ? "#7a6935" : "light"
            }`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#7a6935" : "light",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-warning" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning ms-2" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning ms-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-warning ms-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-warning ms-2" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview Your text</h2>
        <p>
          {text.length > 0 ? text : "Please write something to PREVIEW IT!"}
        </p>
      </div>
    </>
  );
}
