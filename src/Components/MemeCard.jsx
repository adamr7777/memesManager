import React, {useContext, useState} from 'react';

import {ContextObj} from './Context';
import Comment from './Comment';



export default function MemeCard(props) {
    const {memesData, CompletedMemes, removeMeme, sendMemetoCreate} = useContext(ContextObj);

    const commentsQuantity = memesData[props.index].comments.length > 0 ? 
        '(' + memesData[props.index].comments.length + ')'
            : null;

    const firstComment = memesData[props.index].comments[0];

    const [commentsSection, setCommentsSection] = useState(`${firstComment} ......`);
    

    const cardStyle = {
        margin: '30px 0',
        maxWidth: '450px'
    };

    function readComments() {
        if (typeof commentsSection !== 'object') {
            const comments = memesData[props.index].comments.map((item, index)=> (
                <Comment className='bm-1' title={`Comment ${index+1}`} comment={item} key={index}/>
            ));
            setCommentsSection(comments);
            if (!comments) {
                const comments = CompletedMemes[props.index].comments.map((item, index)=> (
                    <Comment className='bm-1' title={`Comment ${index+1}`} comment={item} key={index}/>
                ));
            };
        }
        else setCommentsSection(`${firstComment} ......`);
    };

    console.log(commentsSection);

   
    
    return (
        <>
            <div className='card' style={cardStyle}>
                <img src={props.url} className='card-img-top' alt='...'/>
                <div className='card-body'>
                    <h5 className='card-title'>Comments:</h5>
                    <p className='card-text'>{commentsSection}</p>
                    <div className='d-flex justify-content-around' >
                        <button className='btn btn-primary mr-2' onClick={()=> sendMemetoCreate(props.index)}>Send to</button>
                        <button className='btn btn-secondary mr-2' onClick={readComments}>Read Comments {commentsQuantity}</button>
                        <button className='btn btn-danger'onClick={()=> removeMeme(props.index, props.conditionPrompt)}>Remove</button>  
                    </div>
                </div>
            </div>
        </>
    );
};




{/* <button class="btn btn-primary" data-toggle="collapse" data-target="#commentSection">Expand</button>

<div id="commentSection" class="collapse">
  <!-- Comment section content goes here -->
</div> */}
