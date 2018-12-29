import React, { Component } from 'react';
import './resources/style.css';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VunueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo/>
        </Element>
        
        <Element name="highlights">
          <Highlight/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>
      </div>
    );
  }
}

export default App;
