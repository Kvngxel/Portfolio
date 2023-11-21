import React from "react";
import { Home } from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element= "Portfolio In Progress 404" />
      </Routes>
    </Router>
  );
 }

export default App;