import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
export default function Approute() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </React.Fragment>
  );
}
