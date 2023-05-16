import React, {useContext} from 'react';

import {ContextObj} from '../Components/Context';
import MemeCard from '../Components/MemeCard';

export default function useLikedMemes() {
    const {memesData} = useContext(ContextObj);
    return memesData.map((item, index)=> {
        if (!item.liked) return null;
        else return <MemeCard index={index} meme={item} key={index} url={item.url}/>
    }).filter((item)=> item);
};

