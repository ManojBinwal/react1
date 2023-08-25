import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    {/* Navbar sends props to its component */}
      <Navbar title="TextUtils2" home="Home" about="About" />

    </>
  );
}

export default App;
