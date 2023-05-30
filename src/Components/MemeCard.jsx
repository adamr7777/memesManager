import React, {useContext, useState} from 'react';

import {ContextObj} from './Context';
import Comment from './Comment';



export default function MemeCard(props) {
    const {memesData, memeInCreateMeme, CompletedMemes, removeMeme, setMemeInCreateMeme} = useContext(ContextObj);

    const commentsQuantity = memesData[props.index].comments.length > 0 ? 
        '(' + memesData[props.index].comments.length + ')'
            : null;

    const firstComment = memesData[props.index].comments[0];
    const noCommentsMsg = 'This meme has no comments yet'
    const instructionText = 'Click on Use Template to add captions';
    const memeInCreateText = 'The meme has been sent to Create Your Meme. Go there to edit it.';

    const [commentsSection, setCommentsSection] = useState(firstComment ? `${firstComment} ......` : noCommentsMsg );
    const instructions = memeInCreateMeme ? (memeInCreateMeme.url === memesData[props.index].url ? memeInCreateText 
        : instructionText ) : instructionText ;
            // change to individual code
    const instructionsColor = memeInCreateMeme ? (memeInCreateMeme.url === memesData[props.index].url ? 'red' 
        : 'green' ) : 'green';

    
    const cardStyle = {
        margin: '30px 0',
        maxWidth: '450px'
    };

    function readComments() {
        if (typeof commentsSection !== 'object') {
            const comments = memesData[props.index].comments.map((item, index)=> (
                <Comment className='mb-1' title={`Comment ${index+1}`} comment={item} key={index}/>
            ));
            setCommentsSection(comments);
            if (!comments) {
                const comments = CompletedMemes[props.index].comments.map((item, index)=> (
                    <Comment className='mb-1' title={`Comment ${index+1}`} comment={item} key={index}/>
                ));
            };
        }
        else setCommentsSection(`${firstComment} ......`);
    };

    function sendMemeToCreate(memeIndex) {
        const meme = memesData[memeIndex];
        setMemeInCreateMeme(meme);
    };

    

  
    
    return (
            <div className='card' style={cardStyle}>
                <img src={props.url} className='card-img-top' alt='...'/>
                <div className='card-body'>
                    <div className='comments-div p-3 border mb-3'>
                        <h5 className='card-title'>Comments:</h5>
                        <p className='card-text'>{commentsSection}</p>
                    </div>
                    <p className='card-text' style={{color: instructionsColor}}>{instructions}</p>
                    <div className='d-flex justify-content-around' >
                        <button className='btn btn-primary mr-2' onClick={()=> sendMemeToCreate(props.index)}>Use Template</button>
                        <button className='btn btn-secondary mr-2' onClick={readComments}>Read Comments {commentsQuantity}</button>
                        <button className='btn btn-danger'onClick={()=> removeMeme(props.index, props.conditionPrompt)}>Remove</button>  
                    </div>
                </div>
            </div>
    );
};




{/* <button class="btn btn-primary" data-toggle="collapse" data-target="#commentSection">Expand</button>

<div id="commentSection" class="collapse">
  <!-- Comment section content goes here -->
</div> */}
