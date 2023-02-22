import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home'; 
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;