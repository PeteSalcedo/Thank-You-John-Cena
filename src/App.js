import React, { Component } from 'react';
import './resources/style.css'
import Header from './components/header_footer/Header'

import Featured from './components/Featured';
import VunueNfo from './components/venueNfo';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue' }}>
       <Header />
       <Featured />
       <VunueNfo />
      </div>
    );
  }
}

export default App;
