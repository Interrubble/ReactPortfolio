import React from "react";
import './components/NavTabs';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';
import MyWork from './components/pages/MyWork';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

const styles = {
  padding: '0px',
  margin: '0px',
  maxWidth: '90vmax',
  backgroundColor: 'radial-gradient(purple, green)'
}

function App() {
  return (
    <BrowserRouter style={styles}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/myWork' element={<MyWork/>}/>
            <Route path='/aboutMe' element={<AboutMe/>}/>
            <Route path='/contactMe' element={<ContactMe/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
