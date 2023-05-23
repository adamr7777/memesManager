import React, {useContext, useRef, useEffect, useState} from 'react';

import {ContextObj} from '../Components/Context';

export default function CreateMeme() {
    const {memeInCreateMeme, setCompletedMemes} = useContext(ContextObj);
    const [meme, setMeme] = useState(null);
    const [text, setText] = useState({top: '', bottom: ''});
    const [textColor, setTextColor] = useState('#FFFFFF');
    const canvasRef = useRef(null);
    const size = 650;
    const position = 0;
    const styles = {display: 'flex', justifyContent: 'center', alignItems: 'center'}
    
    


    useEffect(()=> {
        if (!memeInCreateMeme) return;
        const memeImage = new Image();
        memeImage.src = memeInCreateMeme.url;
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

        context.fillText(text.top, 300, 40)
        context.fillText(text.bottom, 300, 620)
    }, [meme, text]);

    function submitMeme(e) {
        e.preventDefault();
        
        const context = canvasRef.current.getContext('2d');
        const url = canvasRef.current.toDataURL();
        setCompletedMemes((prevState)=> [...prevState, {url: url}]);
        context.clearRect(0, 0, size, size);
        setMeme(null)
    };

    function removeMeme() {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, size, size);
    }


    return (
        <div className='card mt-4' style={styles}>
            <div className='mt-3'>
                {meme && <canvas width={size} height={size} ref={canvasRef}/>}
            </div>
            <div className='card-body'>
                <p className='card-text'>Create your meme by choosing the text and the color!</p>
                <div className='row'>
                    <form>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <input className='form-control' type='text' onChange={(e)=> setText((prev)=> ({...prev, top: e.target.value}))} value={text.top} placeholder='Top text'/>
                        </div>
                        <div className='col-sm-5'>
                            <input className='form-control' type='text' onChange={(e)=> setText((prev)=> ({...prev, bottom: e.target.value}))} value={text.bottom} placeholder='Bottom text'/>
                        </div>
                        <div className='col-sm-2'>
                            <input className='form-control' type='color' onChange={(e)=> setTextColor(e.target.value)} value={textColor}/>
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







