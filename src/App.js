import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
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
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container" my-3>
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter Text to analyse" mode={mode}/>
            {/* </Route> */} 
          {/* </Switch>  */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
