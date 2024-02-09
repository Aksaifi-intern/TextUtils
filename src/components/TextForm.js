import React, { useState } from 'react'


export default function TextForm(props) {
    const handelUpClick = () => {
        //  console.log("Uppercase was clicked"+text);

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Ucppercase', "success");

    }

    const handelLoClick = () => {
        //  console.log("Uppercase was clicked"+text);

        let newText = text.toLowerCase();

        setText(newText)
        props.showAlert('Converted to lowercase', "success");



    }
    const handelclearClick = () => {
        //  console.log("Uppercase was clicked"+text);
        let newText = "";
        setText(newText)
        props.showAlert('Text Cleared', "success");
    }

    const handelExtraSpaces = () => {

        let newText = text.split(/[ ]+/); {/* rejet ka use hua hai : ak ya ak se jada space hai ye us text ko split kar diya hai fir vo ak array ban jayega niche isko join kr de rhe hai 1 space se */ }
        setText(newText.join(" "))
        props.showAlert('Removed Extra space', "success");

    }

    const handleOnChange = (event) => {

        // console.log("on change");

        setText(event.target.value)
    }

    const [text, setText] = useState("");















    return (







        <>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#05203b', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handelUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handelLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handelclearClick}>Clear</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handelExtraSpaces}>Clear space</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length}character</p>
                {/* <p>{0.008 * text.split(" ").length} Minutes read</p>*/}
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>

        </>
    )
}
