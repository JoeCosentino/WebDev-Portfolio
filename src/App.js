import React from 'react';
import './App.css';
import About from './componenets/About';
import Contact from './componenets/Contact';
import Header from './componenets/Header';

function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
