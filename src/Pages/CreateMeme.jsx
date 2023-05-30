import React, {useContext, useRef, useEffect, useState} from 'react';

import {ContextObj} from '../Components/Context';
import './CreateMeme.css';

export default function CreateMeme() {
    const {memeInCreateMeme, setCompletedMemes} = useContext(ContextObj);
    const [meme, setMeme] = useState(null);
    const [text, setText] = useState({textA: '', textB: ''});
    const [textAPosition, setTextAPosition] = useState({x: 300, y: 40});
    const [textBPosition, setTextBPosition] = useState({x: 300, y: 620});
    const [textColor, setTextColor] = useState('#000000');
    const canvasRef = useRef(null);
    const size = 650;
    const position = 0;
    const styles = {display: 'flex', justifyContent: 'center', alignItems: 'center'}
    
    


    useEffect(()=> {
        if (!memeInCreateMeme) return;
        const memeImage = new Image();
        memeImage.src = memeInCreateMeme.url;
        memeImage.crossOrigin = 'anonymous';
        memeImage.onload = ()=> setMeme(memeImage);
    }, [memeInCreateMeme]);


    

    useEffect(()=> {
        if (!meme) return;
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, size, size);
        context.drawImage(meme, position, position, size, size);
        
        context.font = '28px Comic Sans Mc';
        context.fillStyle = textColor;
        context.textAlign = 'center';

        context.fillText(text.textA, textAPosition.x, textAPosition.y);
        context.fillText(text.textB, textBPosition.x, textBPosition.y);
    }, [meme, text, textAPosition, textBPosition]);

    // useEffect(()=> {
    //     localStorage.setItem('completedMemes', JSON.stringify(completedMemes));
    // }, [completedMemes]);
    
    function submitMeme(e) {
        e.preventDefault();
        
        const context = canvasRef.current.getContext('2d');
        const url = canvasRef.current.toDataURL();
        setCompletedMemes((prevState)=> [...prevState, {url: url, comments: []}]);
        // console.log('write memes to local working');
        context.clearRect(0, 0, size, size);
        setMeme(null);
    };

    function removeMeme() {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, size, size);
    };



    return (
        <div className='card mt-4' style={styles}>
            <div className='mt-3'>
                {meme && <canvas width={size} height={size} ref={canvasRef}/>}
            </div>
            <div className='card-body'>
                <p className='card-text'>Create your meme by choosing the text and the color, 
                but do not refresh the page as your work will be lost</p>
                <div className='container-joysticks'>
                    <div className='joystick-container'>
                        <p className='joystick-text'>Text A</p>
                        <div className='joystick'>
                            <button className='btn btn-primary btn-joystick joystick-up' 
                                onClick={()=> setTextAPosition((prev)=> ({...prev, y: prev.y - 60}))}>
                                <span className='arrow'>&#9650;</span>
                            </button>
                            <div className='joystick-middle'>
                            <button className='btn btn-primary btn-joystick joystick-left' 
                                onClick={()=> setTextAPosition((prev)=> ({...prev, x: prev.x - 60}))}>
                                <span className='arrow'>&#9668;</span>
                            </button>
                            <button className='btn btn-primary btn-joystick joystick-right' 
                                onClick={()=> setTextAPosition((prev)=> ({...prev, x: prev.x + 60}))}>
                                <span className='arrow'>&#9658;</span>
                            </button>
                            </div>
                            <button className='btn btn-primary btn-joystick joystick-down' 
                                onClick={()=> setTextAPosition((prev)=> ({...prev, y: prev.y + 60}))}>
                            <span className='arrow'>&#9660;</span>
                            </button>
                        </div>
                    </div>
                    <div className='joystick-container'>
                        <p className='joystick-text'>Text B</p>
                        <div className='joystick'>
                            <button className='btn btn-primary btn-joystick joystick-up'
                                onClick={()=> setTextBPosition((prev)=> ({...prev, y: prev.y - 60}))}>
                                <span className='arrow'>&#9650;</span>
                            </button>
                            <div className='joystick-middle'>
                            <button className='btn btn-primary btn-joystick joystick-left'
                                onClick={()=> setTextBPosition((prev)=> ({...prev, x: prev.x - 60}))}>
                                <span className='arrow'>&#9668;</span>
                            </button>
                            <button className='btn btn-primary btn-joystick joystick-right'
                                onClick={()=> setTextBPosition((prev)=> ({...prev, x: prev.x + 60}))}>
                                <span className='arrow'>&#9658;</span>
                            </button>
                            </div>
                            <button className='btn btn-primary btn-joystick joystick-down'
                                onClick={()=> setTextBPosition((prev)=> ({...prev, y: prev.y + 60}))}>
                            <span className='arrow'>&#9660;</span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <form>
                        <div className='row'>
                            <div className='col-sm-5'>
                                <input className='form-control' type='text' 
                                    onChange={(e)=> setText((prev)=> ({...prev, textA: e.target.value}))}     
                                        value={text.textA} placeholder='Text A'/>
                            </div>
                            <div className='col-sm-5'>
                                <input className='form-control' type='text' 
                                    onChange={(e)=> setText((prev)=> ({...prev, textB: e.target.value}))} 
                                        value={text.textB} placeholder='Text B'/>
                            </div>
                            <div className='col-sm-2'>
                                <input className='form-control' type='color' 
                                    onChange={(e)=> setTextColor(e.target.value)} value={textColor}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <button className='btn btn-primary w-100 mt-3' onClick={submitMeme} type='submit'>Submit</button>
                            </div>
                            <div className='col-5'>
                                <button className='btn btn-danger w-100 mt-3' onClick={removeMeme} type='submit'>Remove</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};







