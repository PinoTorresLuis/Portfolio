import React, {useState,useEffect} from 'react';
import NavBar from './Componentes/Navbar/NavBar';
import About from './Componentes/About/About';
import Name from './Componentes/Name/Name';
import Skills from './Componentes/Skill/Skills';
import Proyects from './Componentes/Proyects/Proyects';
import Footer  from './Componentes/Footer/Footer';

import './index.scss';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className='grid-container'>
      <NavBar isScrolling={scrollHeight}/>
      <Name/>
      <About/>
      <Skills/>
      <Proyects/>
      <Footer/>
    </div>
  )
}

export default App
