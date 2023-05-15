import React, {useContext} from 'react';

import {ContextObj} from './Context';
import MemeCard from './MemeCard';

export default function MemesList() {
    const {memesData} = useContext(ContextObj);
    const memesList = memesData.map((item, index)=> {
        if (!item.liked) return null;
        else return <MemeCard key={index} url={item.url}/>
    }).filter((item)=> item);

    console.log(memesList);
    return (
        <div className="col-9">
            <div>
                {memesList}
            </div>
        </div>
    );
};



// return <MemeCard key={index} url={item.url} comments={item.comments}/>