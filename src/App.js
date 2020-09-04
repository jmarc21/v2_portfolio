import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="blur">
        <div className="title">Under <br/> Construction</div>
        <div className="subtitle">Sorry for the inconvenience, but I am making some important changes to my portfolio. It will be up shortly.</div>
        <div className="percentage">
          <p>Site Progress</p>
          <div className="percentage-bar">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/justindemarco21/" target="_blank"><div className="instagram"></div></a>
          <a href="https://github.com/jmarc21" target="_blank"><div className="github"></div></a>
        </div>
      </div>
    </div>
  );
}

export default App;
