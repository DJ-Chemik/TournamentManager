import React from 'react';
import './App.css';
import LoginPage from './logging/LoginPage';
import MainPage from './mainPage/MainPage';

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <br/>
      <MainPage/>
    </div>
  );
}

export default App;
