import React from 'react';
import "tachyons";
import './App.css';
import { CTA, Navbar } from './components';
import { About,  Footer, Header, HIW, Services } from './containers';

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <About />
    <Services />
    <HIW />
    <CTA />
    <Footer />
  </div>
);

export default App;
