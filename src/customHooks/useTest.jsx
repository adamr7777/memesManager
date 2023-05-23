import React, {useContext, useRef, useEffect, useState} from 'react';

import {ContextObj} from '../Components/Context';


export default function useTest() {
    const {completedMemes} = useContext(ContextObj);
    const dataURL = completedMemes[0].toDataURL();
    return <img src={dataURL} alt='Canvas Image'/>;
}