import React from "react";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Play } from "./pages/Play/Play";
import { Notes } from "./pages/Notes/Notes";
import { Error } from "./pages/Error/Error";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Topme } from "./pages/topme/Topme";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/notes" element={<Notes/>} />
        {/* <Route path="/topme" element={<Topme/>} /> */}
        <Route path="*" element= {<Error/>} />
      </Routes>
    </Router>
  );
 }

export default App;