import React, {useState, useEffect, useContext} from 'react';

import './Pool.css';
import Meme from '../Components/Meme';
import {ContextObj} from '../Components/Context';



export default function Pool() {
    const context = useContext(ContextObj);
    
    
    const memes = context.map((item, index)=> <Meme key={index} url={item.url}/>)
    return (
        <>
            <div className='grid-container'>
                {memes}
            </div>
        </>
    );
};