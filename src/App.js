import React, { Component } from 'react';
import './resources/style.css'
import Header from './components/header_footer/Header'

import Featured from './components/Featured';
import VunueNfo from './components/venueNfo';
import Highlights from './components/Highlights'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1800px",background:'cornflowerblue' }}>
       <Header />
       <Featured />
       <VunueNfo />
       <Highlights/>
      </div>
    );
  }
}

export default App;
