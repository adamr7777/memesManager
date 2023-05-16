import React, {useContext} from 'react';

import {ContextObj} from '../Components/Context';
import MemeCard from '../Components/MemeCard';

export default function useUploadedMemes() {
    const {memesData} = useContext(ContextObj);
    return memesData.map((item, index)=> {
        if (item.origin === 'uploaded') return <MemeCard index={index} meme={item} key={index} url={item.url}/>
        else return null
    }).filter((item)=> item);
};