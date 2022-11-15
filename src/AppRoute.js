import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
export default class AppRoute extends Component {
  render() {
    return (
      <div>
         <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    )
  }
}
