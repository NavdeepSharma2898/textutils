import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase " , "success");
  };

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase " , "success");
  };

  const handleClr = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared " , "success");
  };

  const handleCopy = () => {
    let newText = document.getElementById('mybox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copied to clipboard " , "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);  // regex js concept vid -48
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed " , "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
        <div className="mb-3">
          <h3>{props.heading}</h3>

          <textarea
            className={`form-control my-3 text-${props.mode === 'light'?'dark':'light'}`}
            id= "mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            
            style = {{backgroundColor : props.mode === 'light'?'white':'grey' }}
          ></textarea>

          <button className="btn btn-primary mx-1" onClick={handleUpper}>
            Uppercase
          </button>

          <button className="btn btn-primary mx-1" onClick={handleLower}>
            Lowercase
          </button>

          <button className="btn btn-primary mx-1" onClick={handleClr}>
            Clear 
          </button>

          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy Text
          </button>

          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>

        </div>
      </div>
      <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
        <h5>TEXT SUMMARY</h5>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} WORDS AND {text.length} CHARACTERS</p>
        <p>{0.008 * text.split(" ").length} MINUTES ARE REQUIRED TO READ THIS TEXT</p>
        <h6>PREVIEW YOUR TEXT</h6>
        <p>{text}</p>
      </div>
    </>
  );
}
