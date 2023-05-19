import React, {useContext, useRef, useEffect} from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';

import {ContextObj} from '../Components/Context';

export default function Library() {
    const {memeInCreateMeme} = useContext(ContextObj);
    // const canvasRef = useRef(null);

    // useEffect(()=> {
    //     if (!memeInCreateMeme) return;


    //     const gif = new GIF({ workerScript: 'gif.worker.js' });
    //     gif.load(memeInCreateMeme.url, () => {
    //         renderGifWithText();
    //     });
  



    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');

        

    //    gif.render(context, 0, 0);
    // }, [])
    
    // return (
    //     <div className='card'>
    //         {/* {memeInCreateMeme && <img className='card-img-top' src={memeInCreateMeme.url}/>} */}
    //         <canvas ref={canvasRef}/>
    //         <div className='card-body'>
    //             <p className='card-text'>Create your meme!</p>
    //             <div className='d-flex justify-content-around' >
            
    //             </div>
    //         </div>
    //     </div>
    // );
    let gifUrl = null;
    useEffect(()=> {
        if(!memeInCreateMeme) return;
        gifUrl = memeInCreateMeme.url;
    },[])

   

    return (
        <div className='card'>
            {/* {memeInCreateMeme && <img className='card-img-top' src={memeInCreateMeme.url}/>} */}
            {/* <canvas ref={canvasRef}/> */}
            {memeInCreateMeme && 
                <div>
                    <Stage width={400} height={300}>
                        <Layer>
                            <Image
                                image={new window.Image()} // Create a new image object
                                src={gifUrl} // Set the source of the GIF
                                width={400}
                                height={300}
                            />
                        </Layer>
                    </Stage>
                </div>}
            <div className='card-body'>
                <p className='card-text'>Create your meme!</p>
                <div className='d-flex justify-content-around' >
            
                </div>
            </div>
        </div>
    );
};







