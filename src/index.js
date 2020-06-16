import React from 'react';
import ReactDOM from 'react-dom';
import JobSaver from "./components/JobSaver"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <JobSaver />
  </Router>
  , document.getElementById('root'));
