import React, { useState } from 'react'
import './project.css';
import { color, motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import Header from '../../Containers/Header/Header'

const Projects = () => {
  const [showcard, setShowCard] = useState(false)
  return (
    // <div>
    // <div className= "card"
    //     style = {{
    //         border: "1px",
    //         display: "flex",

    //     }}
    // >
    //     Card
    // </div>
    // <div className= "card">Card</div>
    // <div className= "card">Card</div>
    // <div className= "card">Card</div>
    // </div>

    <div>
      <Header />
      <div className = "text">
        Welcome... This page is under developement!
      </div>
    </div>
  )
}


export default Projects