import { useState } from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light'); //set dark / light mode
  const [buttonText, setButtonText] = useState("Enable Dark Mode") //set button text
  const [textCol, setTextCol] = useState("dark") //set button text colour
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setButtonText("Disable Dark Mode")
      setTextCol("white")
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils | Dark Mode"

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setButtonText("Enable Dark Mode")
      setTextCol("dark")
      showAlert("Dark Mode has been disabled", "success")
      document.title = "TextUtils | Light Mode"
    }
  }


  return (
    <>

      <Navbar textCol={textCol} title="TextUtils2" home="Home" about="About" toggle={toggleMode} mode={mode} buttonText={buttonText} />

      <strong><Alert alert={alert} /></strong>

      <div className="container my-3">

        <TextForm showAlert = {showAlert} title="Enter the text to Analyze" mode={mode} />

      </div>
      {/* <div className='container my-3 '>
        <About heading="About Us"/>
      </div> */}

    </>
  );
}

export default App;
