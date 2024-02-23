import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './header.css';
import person from '../../assets/person_w.png';
import {Link} from 'react-router-dom'

const Menu = () => (
  <>
  <p><Link to = "/home">Home</Link></p>
  <p><Link to = "/Projects">Projects</Link></p>
  {/* <p><Link to = "/about_me">About me</Link></p> */}
  <p><Link to = "/extra">Extra-Curriculars</Link></p>
  </>
);

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
      <div className= "gradient">
        <div className = "nav__bar">
          <img className = "person" src = {person} alt = "person"/>
        
          <div className= "navbar-links">
            
            <div className= "navbar-links__logo">
              
            </div>
            <div className = "navbar__container">
              <Menu />
            </div>
          </div>
          <div className = "navbar__menu">
            {toggleMenu 
              ? <RiCloseLine color = "fff" size = {27} onClick = {() => setToggleMenu(false)}/>
              : <RiMenu3Line color = "fff" size = {27} onClick = {() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className = "navbar-menu__container scale-up-center">
                <div className = "navbar-menu-container__links">
                  <Menu />
                </div>    
              </div>
            )}
          </div>
        </div>
      </div>
  )
}



export default Header