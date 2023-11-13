import "./App.css";

import React, { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";

import Alerts from "./component/Alerts";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const [mode, setmode] = useState("light");

  const [text, settext] = useState("dark mode");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      settext("light mode");
      document.body.style.backgroundColor = "#062757";
      showAlert("drak mode has enabled", "success");
    } else {
      setmode("light");
      settext("dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextTuitles"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      />
      <Alerts Alerts={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm
          heading="Enter text to Analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* }
            ></Route> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
        {/* </Routes> */}
        <About />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
