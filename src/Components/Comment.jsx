import React from 'react'; 



export default function Comment(props) {
    return (
      <div className='container mb-2'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <div className='card-text'>{props.comment}</div>
          </div>
        </div>
      </div>
    );
  }
  