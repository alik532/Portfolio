import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import { useScrollPosition } from './hooks/useScrollPosition';
import Title from './components/Title';
import { useEffect, useState, useRef } from 'react';
import Projects from './components/Projects';
import Links from './components/Links';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';

function App() {

  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const scrollPosition = useScrollPosition()

  return (
    <div className='app' style={scrollPosition < 1 ? {backgroundColor: `rgba(25, 28, 41, ${scrollPosition})`} : {background: "#191c29"}}>
      <Header />
      <div className="container" >
        <div className='content' >
          <Intro />
          <div ref={ref} className={inView ? 'enter-animation' : ''} id='projects'>
            <Title text="Projects"/>
          </div>
          <Projects/>
          <div id='links'>
            <Title text="Links"/>
          </div>
          <Links/>
          <div id="about_me">
            <Title text="About Me"/>
          </div>
            <AboutMe/>
          <div id='contacts'>
            <Title text="Contacts"/>
          </div>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
