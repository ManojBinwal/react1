import React, { useState } from 'react'

const TextForm = (props) => {

    //create a text-filed , create a button , set onClick function on the button , as soon as the button is clicked handleClick function will be invoked and it will create a new variable which will convert the submitted text to upper case and store it. Then handleOnChange function will be invoked and it will set the text to the new text.

    const [text, setText] = useState('Enter Text Here');

    const handleClick = () => {
        // console.log("button was clicked" + text)
        const newText = text.toUpperCase(text);
        setText(newText);

    }

    const handleOnChange = (event) => {
        // console.log('on Change this appeared')
        setText(event.target.value)
    }
    //wrong way to change text 
    // text = 'dfsfdfs'
    // right way to change the text
    // setText('sdfsffs');


    return (
        <div>
            <h1>{props.title}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">{props.title}</label> */}
                <textarea value={text} onChange={handleOnChange} className="form-control " id="myBox" rows="8" ></textarea>
                <button className="btn btn-primary my-3" onClick={handleClick}>Convert to UPPER CASE</button>
            </div>
        </div>
    )
}

export default TextForm
