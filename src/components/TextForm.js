import React, { useState } from 'react'

const TextForm = (props) => {

    //create a text-filed , create a button , set onClick function on the button , as soon as the button is clicked handleClick function will be invoked and it will create a new variable which will convert the submitted text to upper case and store it. Then handleOnChange function will be invoked and it will set the text to the new text.

    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        console.log("button was clicked")
        const newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to UPPER CASE ","success")

    }
    const handleDwClick = () => {
        console.log("button was clicked")
        const newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to lower case ","success")

    }

    // event.target.value extracts the current value of the textarea where the user typed.
    // The extracted value is used as an argument to the setText function.
    // When setText is called with the new value, it triggers a re-render of the component with the updated state.
    // As a result, the value of the textarea is updated to match the user's input.

    const handleOnChange = (event) => {
        console.log('on Change ')
        setText(event.target.value)
    }
    //wrong way to change text 
    // text = 'dfsfdfs'
    // right way to change the text
    // setText('sdfsffs');

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied ","success")
        // alert("text Copied");
    }

    const removeExtraSpaces = () => {
        //split the text removing all spaces into an array
        let newText = text.split(/[ ]+/);
        //join the text and update the text
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces ","success")

    }


    return (
        <>
            <div className='container'
                style={{
                    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black',
                }}>

                <h1>{props.title}</h1>
                <div className="mb-3" >
                    {/* <label for="myBox" class="form-label">{props.title}</label> */}
                    <textarea value={text}
                        onChange={handleOnChange}
                        className="form-control "
                        id="myBox"
                        rows="8"
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black',

                        }}>
                    </textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UPPER CASE</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleDwClick}>Convert to lower case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                </div>
                <div className="container my-2" style={{
                    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black',

                }}>
                    <h1>Your text Summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{(text.split(" ").length) * 0.008} minutes to read</p>
                    <h1>Preview</h1>
                    <p>{text}</p>
                </div>
            </div>
        </>

    )
}

export default TextForm
