import React from 'react'
import './App.css';
import FrontPage from './Front/FrontPage.js';
import {Route, Routes, Switch, BrowserRouter} from 'react-router-dom';


import { About_me, Home, Projects, Extra_Cur} from './Components';
import { Header, Footer, Projects_List } from './Containers';

const App = () => {
  return (
    <div className = "App">
      <Routes>
        <Route index element={<FrontPage/>} />
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/Projects" element = {<Projects/>} />
        <Route path = "/about_me" element = {<About_me/>} />
        <Route path = "/extra" element = {<Extra_Cur/>} />
      </Routes>
      {/* <Projects />    
      <Footer /> */}
    </div>
  )
}

export default App