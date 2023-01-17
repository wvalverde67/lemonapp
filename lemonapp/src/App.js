import "./App.css";
// importamos el componente main  y lo usamos en el return

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/Notfound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Header />
            <Routes>
              <Route exact path="/" element={ <Home /> }/>
              <Route path="/About" element={ <About /> } />
              <Route path="/Contact" element={ <Contact /> } />
              <Route component={NotFound} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
