import React, {useState, useContext} from 'react';

import './Meme.css';
import {ContextObj} from './Context';



export default function Meme(props) {
    const [hovered, setHovered] = useState(false);
    const [commentIconClicked, setCommentIconClicked] =  useState(false);
    const {memesData, likeMeme, commentMeme} = useContext(ContextObj);
    const heartClassName = memesData[props.index].liked ? 'ri-heart-fill like' : 'ri-heart-line like';
    const [currentComment, setCurrentComment] = useState('');

    function handleClose() {
        setCommentIconClicked(false);
        setCurrentComment('');
    }
    // const heartClassName = 'ri-heart-line like';
    // const a = 0.375;
    // const b = 0.75;
    // const c = 1.8;

    // console.log(`${a/c} and ${b/c}`);
    // console.log(comment);

    function handleSubmit() {
        commentMeme(currentComment, props.index);
        setCurrentComment('');
    }

    return (
        <div onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className='meme-container'>
            <img className='meme' src={props.url}/>
            {hovered && <i className={heartClassName} onClick={()=> likeMeme(props.index)}></i>} 
            {hovered && <i className='ri-menu-add-line'></i>}
            {hovered && !commentIconClicked && 
                <i className='ri-chat-1-line' onClick={()=>setCommentIconClicked(true)}></i>}
            {commentIconClicked && <div className='comment-window'>
                <textarea className='textarea' onChange={(e)=> setCurrentComment(e.target.value)} value={currentComment}/>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                <button type="button" className="btn btn-outline-primary btn-add-comment" onClick={handleSubmit} >Submit</button>
            </div>}
        </div>
    );
};