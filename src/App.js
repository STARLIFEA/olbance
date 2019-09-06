import React from 'react';
import landscape from "./landscape.jpg";
import './App.css';

function App() {
  return (
    <div>
    <h1 className="logo">OLBANCE</h1>
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">MEN</a></li>
            <li><a href="#">CHILDRIN</a></li>

        </ul>
        <hr/>
        <div>
            <img className="main-foto" src={landscape}/>
        </div>
    </div>
  );
}

export default App;
