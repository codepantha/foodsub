import React from 'react';
import './App.css';
import { Navbar } from './components';
import { About, Header } from './containers';

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <About />
  </div>
);

export default App;
