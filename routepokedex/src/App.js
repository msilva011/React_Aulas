import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about/:id" component={About} />
    </Routes>
  );
}

export default App;
