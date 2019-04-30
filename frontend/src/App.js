import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import SOSDariRouter from './Component/SOSDariRouter.js';



class App extends Component {
  render() {
    return (
      
        <div className="App">
      <BrowserRouter> 
       <SOSDariRouter/>
       </BrowserRouter>    
      </div>
      
      
    );
  }
}

export default App;
