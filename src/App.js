import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* Navbar sends props to its component */}
      <Navbar title="TextUtils2" home="Home" about="About" />
      <div className="container my-3">
        <TextForm title="Enter the text to Analyze" />
      </div>

    </>
  );
}

export default App;
