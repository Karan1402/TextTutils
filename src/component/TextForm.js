import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();

    setText(newText);

    props.showAlert("converted to upper case", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("converted to lower case", "success");
  };

  const handletoClear = () => {
    let newText = " ";

    setText(newText);
    props.showAlert("text clear", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard", "success");
  };

  const handextraSplace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("remove extra spaces", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change was clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text="new text"            //wrong way to change text
  // setText=("new setText");   //right way to change

  //color

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#062757"
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",

              color: props.mode === "dark" ? "white" : "#062757"
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper class
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lower class
        </button>

        <button className="btn btn-primary mx-2" onClick={handletoClear}>
          clear
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          text copy
        </button>

        <button className="btn btn-primary mx-2" onClick={handextraSplace}>
          remove extra spaces
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#062757"
        }}
      >
        <h1>your text summery</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.length} Minutes to read</p>
        <h2> Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
