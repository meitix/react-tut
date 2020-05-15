import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/navbar'
import { HomePage } from './pages';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <HomePage />
    </div>
    </div>
  );
}

export default App;
