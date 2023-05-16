import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import './Sidebar.css'

export default function Sidebar() {
    const [linkActive, setLinkActive] = useState({link1: false, link2: false});
    return (
        <div className='col-3 sidebar'>
            <ul className='nav flex-column'>
                <li className='nav-item'>
                    <NavLink className='nav-link' activeclassname='active' to='/library' 
                        >Liked Memes
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' activeclassname='active' to='/favoriteMemes' 
                        >Favorite Memes
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' activeclassname='active' to='/uploadedMemes'>Uploaded Memes</NavLink>
                </li>
            </ul>
        </div>
    );
};


// 'nav-link' 'nav-item'

// onClick={()=> setLinkActive((prev)=> ({...prev, link1: true, link2: false}))}

// {linkActive.link2 ? 'nav-link active' : 'nav-link'}





