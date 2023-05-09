import React from 'react';

import './Meme.css'


export default function Meme(props) {
    return (
        <img className='meme' src={props.url}/>
    );
};