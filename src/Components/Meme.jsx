import React, {useState, useContext} from 'react';

import './Meme.css';
import {ContextObj} from './Context';



export default function Meme(props) {
    const [hovered, setHovered] = useState(false);
    const [commentIconClicked, setCommentIconClicked] =  useState(false);
    const {memesData, likeMeme, commentMeme} = useContext(ContextObj);
    const heartClassName = memesData[props.index].liked ? 'ri-heart-fill like' : 'ri-heart-line like';
    // const heartClassName = 'ri-heart-line like';

    return (
        <div onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className='meme-container'>
            <img className='meme' src={props.url}/>
            {hovered && <i className={heartClassName} onClick={()=> likeMeme(props.index)}></i>} 
            {hovered && <i className='ri-menu-add-line'></i>}
            {hovered && !commentIconClicked && 
                <i className='ri-chat-1-line' onClick={()=>setCommentIconClicked((prev)=> !prev)}></i>}
            {commentIconClicked && <div className='comment-window'><textarea/></div>}
        </div>
    );
};