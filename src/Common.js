import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from './AppRoute'
export default class Common extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        I am header
        <AppRoute/>
        I am Footer
        </Router>
      </React.Fragment>
    )
  }
}
