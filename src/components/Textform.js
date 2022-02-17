import React, { useState } from "react";

export default function Textform(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const clearTxt= (event)=>{
        setText(event.target.value);
    }
  const [text, setText] = useState(``);
  
 // text="new text"; //Wrong way to change the state
  //setText=("new text"); //Correct way to change the state
  return (
      <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2 " onClick={handleLoClick}>Convert to LoverCase</button>
      <button className="btn btn-primary mx-2" onClick={clearTxt}>Clear Text</button>
    </div>
    <div className="container my-2" ></div>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words,  {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  );
}
