
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;