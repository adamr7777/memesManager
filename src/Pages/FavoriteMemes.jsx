import React, {useState, useContext} from 'react'; /*only test */

import Sidebar from '../Components/Sidebar';
import MemesList from '../Components/MemesList';


import useTest from '../customHooks/useTest';




export default function FavoriteMemes() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Sidebar/>
                {/* <MemesList customHook={()=> useLibrary('favoriteMemes')}/> */}
                <MemesList customHook={useTest}/> 
            </div>      
        </div>
    );
};