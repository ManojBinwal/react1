import { useState } from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light'); //set dark / light mode
  const [buttonText, setButtonText] = useState("Enable Dark Mode") //set button text
  const [textCol, setTextCol] = useState("dark") //set button text colour

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setButtonText("Disable Dark Mode")
      setTextCol("white")
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setButtonText("Enable Dark Mode")
      setTextCol("dark")
    }
  }

  return (
    <>
    
      {/* Navbar sends props to its component */}
      <Navbar textCol={textCol} title="TextUtils2" home="Home" about="About" toggle={toggleMode} mode={mode} buttonText={buttonText} />
      <div className="container my-3">
        <TextForm title="Enter the text to Analyze"  mode={mode}/>
      </div>
      {/* <div className='container my-3 '>
        <About heading="About Us"/>
      </div> */}

    </>
  );
}

export default App;
