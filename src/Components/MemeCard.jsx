import React from 'react';



export default function MemeCard(props) {
    const cardStyle = {
        margin: '30px 0'
    }

   
    
    return (
        <>
            <div className='card' style={cardStyle}>
                <img src={props.url} className='card-img-top' alt='...'/>
                <div className='card-body'>
                    <h5 className='card-title'>Comments:</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex justify-content-around' >
                        <button className='btn btn-primary mr-2'>Expand...</button>
                        <button className='btn btn-danger'>Remove</button>  
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