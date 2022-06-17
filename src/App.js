import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './components/NavTabs';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';
import MyWork from './components/pages/MyWork';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const styles = {
  padding: '0px',
  margin: '0px',
  maxWidth: '90vmax',
}

function App() {
  return (
    <BrowserRouter style={styles}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/myWork' element={<MyWork />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/contactMe' element={<ContactMe />} />
      </Routes>
      <footer>
        {/* <SocialMediaIconsReact borderColor="transparent" icon="github" iconColor="black" backgroundColor="transparent" url="https://github.com/Interrubble" size="48" />
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://www.linkedin.com/in/christopher-delagarza-309550234" size="48" /> */}
        <a href="https://github.com/Interrubble"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/christopher-delagarza-309550234"><FaLinkedin/></a>
      </footer>
    </BrowserRouter>
  );
}

export default App;
