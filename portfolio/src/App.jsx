import React from "react";
import { Home } from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Topme } from "./pages/topme/Topme";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topme" element={<Topme />} />
        <Route path="*" element= "Portfolio In Progress 404" />
      </Routes>
    </Router>
  );
 }

export default App;