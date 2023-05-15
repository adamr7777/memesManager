import React from 'react';

import Sidebar from '../Components/Sidebar';
import MemesList from '../Components/MemesList';

export default function FavoriteMemes() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Sidebar/>
                <MemesList/>
            </div>      
        </div>
    );
};