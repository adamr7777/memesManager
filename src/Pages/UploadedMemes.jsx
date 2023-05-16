import React from 'react';

import Sidebar from '../Components/Sidebar';
import MemesList from '../Components/MemesList';
import useUploadedMemes from '../customHooks/useUploadedMemes';

export default function Library() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Sidebar/>
                <MemesList customHook={useUploadedMemes}/>
            </div>      
        </div>
    );
};