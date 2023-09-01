import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, SetMode] = useState('light'); // Whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#031c40';
      showAlert("Dark Mode has been Enabled", "success")
      // document.title = 'TextUtils - Dark Mode';

      //To look Hacking Title
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);

      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success")
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">

            {/* users ---> Component 1
          /users/home ---> Component 2  */}
             <Routes>
             <Route exact path="/about" element={<About />} />
         
             <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter," mode={mode} />} />
            
         
          
        </Routes>
   </div >
   </Router>
    </>
  );
}

export default App;