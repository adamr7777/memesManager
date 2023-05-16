import React, {memo} from 'react';
import {Route, Routes} from 'react-router-dom';

import './styles.css'

import Header from './Components/Header';
import Pool from './Pages/Pool';
import Upload from './Pages/Upload';
import Library from './Pages/Library';
import FavoriteMemes from './Pages/FavoriteMemes';
import UploadedMemes from './Pages/UploadedMemes';




const App =  memo(function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Pool/>}/>
                <Route path='/upload' element={<Upload/>}/>
                <Route exact path='/library' element={<Library/>}/>
                    <Route exact path='/favoriteMemes' element={<FavoriteMemes/>}/>
                    <Route exact path='/uploadedMemes' element={<UploadedMemes/>}/>
            </Routes>
        </>
    );
});

export default App;