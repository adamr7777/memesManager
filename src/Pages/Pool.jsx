import React, {useState, useEffect, useContext} from 'react';

import './Pool.css';
import Meme from '../Components/Meme';
import {ContextObj} from '../Components/Context';



export default function Pool() {
    const {memesData} = useContext(ContextObj);
    
    
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