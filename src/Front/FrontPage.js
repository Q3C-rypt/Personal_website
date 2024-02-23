import React, { useState } from 'react';
import '../index.css'
import Header from './Front-Header/Front-Header'
import './front_page.css';

function FrontPage(){

    return (
        <div>
            <h1 className='hi'>Hi!</h1>
            <h2 className='name'>I'm Jacob</h2>
            <h3 className='welcome'>Welcome to my portfolio</h3>
            <Header/>
        </div>
            
    )
}

export default FrontPage