import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Table/bowlerslist';

function App() {
  return (
    <div className="App">
      <Header />
      <BowlerList />
    </div>
  );
}

export default App;
