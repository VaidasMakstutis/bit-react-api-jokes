import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Jokes from "./components/Jokes";
import Favorites from "./components/Favorites";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Jokes/>} />
            <Route path="/favorites" element={<Favorites/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
