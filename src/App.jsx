import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './styles.css'

import Header from './Components/Header';
import Pool from './Pages/Pool';
import Upload from './Pages/Upload';
import Library from './Pages/Library';




export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Pool/>}/>
                <Route path='/upload' element={<Upload/>}/>
                <Route path='/library' element={<Library/>}/>
            </Routes>
        </>
    );
};