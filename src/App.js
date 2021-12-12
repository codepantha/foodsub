import React from 'react';
import "tachyons";
import './App.css';
import { Navbar } from './components';
import { About, Header, HIW, Services } from './containers';

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <About />
    <Services />
    <HIW />
  </div>
);

export default App;
