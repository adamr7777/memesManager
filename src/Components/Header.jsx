import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import'./Header.css';

export default function Header() {

    function resetAll() {
        localStorage.removeItem('memesData');
        localStorage.removeItem('completedMemes');
        window.location.reload();
    };


    return (
        <nav className='navbar navbar-expand-sm navbar-light bg-secondary'>
            <div className="container-fluid">
                <a className='navbar-brand d-inline-block' href='#'>
                    <img src='../icon.png' width='30' className='mr-100'/>Memes Manager
                </a>
                <button 
                    className='navbar-toggler' type='button' 
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                ><span className='navbar-toggler-icon'></span></button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'><Link className='nav-link text-white' to='/'>Memes Pool</Link></li>
                        <li className='nav-item active'><Link className='nav-link text-white' to='/upload'>Upload Your Meme</Link></li>
                        <li className='nav-item active'><Link className='nav-link text-white' to='/library'>Meme Library</Link></li>
                        <li className='nav-item active'><Link className='nav-link text-white' to='/createMeme'>Create Your Meme</Link></li>
                    </ul>
                </div>
                <button className='btn btn-danger ms-auto' onClick={resetAll}>Reset</button>
            </div>
        </nav>
        
        
    );
};