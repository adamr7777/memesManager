import React, {memo} from 'react';
import {Route, Routes} from 'react-router-dom';

import './styles.css'

import Header from './Components/Header';
import Pool from './Pages/Pool';
import Upload from './Pages/Upload';
import Library from './Pages/Library';
import FavoriteMemes from './Pages/FavoriteMemes';




const App =  memo(function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Pool/>}/>
                <Route path='/upload' element={<Upload/>}/>
                <Route exact path='/library' element={<Library/>}/>
                <Route exact path='/FavoriteMemes' element={<FavoriteMemes/>}/>
            </Routes>
        </>
    );
});

export default App;