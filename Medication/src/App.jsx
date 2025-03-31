import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './assets/navbar';
import Info from './assets/Info';
import Hero from './assets/Hero';
import Content from './assets/Content';
import Statistics from './assets/Statistics';
import About from './assets/About';
import Footer from './assets/Footer';
import Signin from './assets/Signin';

const App = () => {
  return (
    <Router>
       
      <Routes>
       
        <Route path="/" element={
          <>
            <Info />
            <Navbar />
            <Hero />
            <Content />
            <Statistics />
            <About />
            <Footer />
          </>
        } />

       
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
