import React, {useContext} from 'react';

import {ContextObj} from './Context';
import MemeCard from './MemeCard';

export default function MemesList({customHook}) {
    return (
        <div className="col-9">
            <div>
                {customHook()}
            </div>
        </div>
    );
};



// return <MemeCard key={index} url={item.url} comments={item.comments}/>