import React, {useContext} from 'react';

import {ContextObj} from '../Components/Context';
import MemeCard from '../Components/MemeCard';

export default function useLikedMemes(conditionPrompt) {
    
    const {memesData} = useContext(ContextObj);
    return memesData.map((item, index)=> {
        const condition = conditionPrompt === 'likedMemes' ? item.liked : 
            conditionPrompt === 'uploadedMemes' ? item.origin === 'uploaded' :
                conditionPrompt === 'favoriteMemes' ? item.favorite : null;
        if (condition) return <MemeCard index={index} meme={item} key={index} url={item.url}/>;
        else return null;
    }).filter((item)=> item);
};

