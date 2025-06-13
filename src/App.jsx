import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services'; 
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
import Background from './Components/Background/Background';
import Skills from './Components/Skills/Skills';

const App = () => {
  return (
    <div>
      <Background /> {/* ✅ Add it here */}
      <Navbar />
    
      <About />
      <Skills />
      <Services />
      <Experience />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
