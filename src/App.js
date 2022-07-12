import React, {useState} from 'react';
import './App.css';
import About from './componenets/About';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';
import Nav from './componenets/Nav';
import Project from './componenets/Project';

function App() {

  const [contactSelected, setContactSelected] = useState(false)

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Project></Project>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
