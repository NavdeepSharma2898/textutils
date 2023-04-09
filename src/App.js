import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route,Link, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e1c4a";
      showAlert("Dark mode has been Enabled", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "primary");
    }
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      
      <div className="container my-3">
        
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={ */}
            <TextForm
                heading="ENTER YOUR TEXT BELOW TO ANALYZE"
                mode={mode}
                showAlert={showAlert}
              />
              {/* } /> */}
          {/* </Routes> */}
          
      </div>
      {/* </BrowserRouter> */}
      </> 
  );
}

export default App;
