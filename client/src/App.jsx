import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Nomatch from "./components/Nomatch";
import "./index.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [theme, settheme] = useState("light");

  const changetheme = () => {
    let ss = document.styleSheets[0];
    if (theme === "light") {
      settheme("dark");
      document.body.style.backgroundColor = "rgb(41, 41, 41)";
      ss.insertRule(
        "::selection { background: rgb(144, 244, 255); color: rgb(0, 0, 0); }",
        0
      );
      document.body.style.color = "white";
    } else {
      settheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Layout mode={theme} changetheme={changetheme} />}
        >
          <Route index element={<Home mode={theme} />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="form" element={<Form mode={theme} />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
