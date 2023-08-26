import React from 'react';
import { useState } from 'react';

export default function About(props) {
    const [toggleText, setToggleText] = useState('Dark');
    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black',
    });

    const toggleDarkStyle = () => {
        setMyStyle({
            backgroundColor: 'black',
            color: 'white'
        })

    }
    const toggleLightStyle = () => {
        setMyStyle({
            backgroundColor: 'white',
            color: 'black'
        })

    }
    const toggleDarkLight = () => {
        if (myStyle.backgroundColor === 'white') {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white'
            })
            setToggleText('Light');
        }
        else {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setToggleText('Dark');
        }
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='mx-2 '>{props.heading}</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleDarkStyle} className='bg-primary text-white my-2 mx-2 ' style={myStyle}>Enable Dark Mode</button>
            <button onClick={toggleLightStyle} className='bg-primary text-white my-2 mx-2 ' style={myStyle}>Enable Light Mode</button>
            <button onClick={toggleDarkLight} className='bg-primary text-white my-2 mx-2 ' style={myStyle}>{toggleText}</button>
        </div>
    )
}
