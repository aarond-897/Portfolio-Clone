import React from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header';
import LandingContent from './Components/LandingContent';


function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <Header />
        <LandingContent />
      </div>
    </div>
  );
}

export default App;
