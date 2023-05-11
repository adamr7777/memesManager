import React, {useState, useEffect, useContext} from 'react';

import './Pool.css';
import Meme from '../Components/Meme';
import {ContextObj} from '../Components/Context';



export default function Pool() {
    const {memesData, likeMeme} = useContext(ContextObj);
    
    function handleHover(index) { /*change it */
        console.log(index);
    }
    
    const memes = memesData.map((item, index)=> <Meme 
    key={index} 
    index={index}  
    url={item.url}
    />)
    return (
        <>
            <div className='grid-container'>
                {memes}
            </div>
        </>
    );
};