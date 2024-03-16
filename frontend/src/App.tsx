import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Table/bowlerslist';

function App() {
  // Return JSX elements representing the main application structure
  return (
    <div className="App">
      {/* Render the Header component */}
      <Header />
      {/* Render the BowlerList component */}
      <BowlerList />
    </div>
  );
}

export default App;
