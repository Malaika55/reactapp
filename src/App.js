import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { Route, Routes } from "react-router-dom";
// import About from "./components/About";
function App() {
  const [darkmode, setDarkMode] = useState("light");
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
    if (darkmode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#7a6935";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "warning");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "warning");
    }
  };

  return (
    <>
      <Navbar title="TEXTUTILS" mode={darkmode} toggle={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes>
        <Route
          exact
          path="/"
          element={
            <Textform
              heading="Enter the text to Analyze"
              mode={darkmode}
              show={showAlert}
            />
          }
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes> */}
      {/* <About /> */}
      <Textform
        heading="Enter the text to Analyze"
        mode={darkmode}
        show={showAlert}
      />
    </>
  );
}

export default App;
