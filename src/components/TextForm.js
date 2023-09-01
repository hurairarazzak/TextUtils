import React, {useState} from "react";


export default function Transform(props) {
  const handleUpClick = ()=>{
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "Success")
  }
  const handleLoClick = ()=>{
    let newText =text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "Success")
  }
  
  const handleclearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text was cleared!", "Success")
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "Success")
  }

  const handleOnChange = (event)=>{
    // console.log("On change")
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text = "new text"; // wrong way to change the state 
  // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#031c40'}}>
        <h1 className="mb-4 mt-3" >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?
        '#13466e':'white',color: props.mode==='dark'?'white':'#031c40' }} id="myBox" rows="8"> </textarea> 
       </div>
<button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1 hover" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1 hover" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1 hover" onClick={handleclearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1 hover" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#031c40'}}>
      <h1>Your Text is summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

