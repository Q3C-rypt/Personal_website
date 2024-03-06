import React, { useState } from 'react';
import '../index.css'
// import Heading from './Front-Header/Front-Header'
import './front_page.css';
import {Link} from 'react-router-dom'

function FrontPage(){

    return (
        <div>
            <h1 className='hi'>Hi!</h1>
            <h2 className='name'>I'm Jacob</h2>
            <h3 className='welcome'>Welcome to my portfolio</h3>
            
            <div className = 'links'>
                <p><Link to = "/home">Home</Link></p>
                <p><Link to = "/Projects">Projects</Link></p>
                <p><Link to = "/extra">Extra-Curriculars</Link></p>
            </div>
        </div>
            
    )
}

export default FrontPage