import React, {createContext, useState, useEffect} from 'react';


export const ContextObj = createContext();

export function ContextProvider({children}) {
    const allowApi = true;
    const [memesData, setMemesData] = useState([]);
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=ydEyl4nja4f2KWAwXO98qbi58a076TdS&q=meme&limit=25&offset=0&rating=g&lang=en'
    useEffect(()=> {
        if (!allowApi) return
        console.log('effect ran');
        fetch(url)
            .then((response)=> response.json())
            .then((data)=> {
                const memes = data.data.map((item)=> {
                    return {
                        url: item.images.original.url,
                        liked: false,
                        favorite: false,
                        comments: [],
                    }
                });
                setMemesData(memes);
                console.log('API ran')
            });
    }, []);

    function likeMeme(memeIndex) {
        setMemesData((prev)=> prev.map((item, index)=> {
            if (memeIndex !== index) return item;
            if (memeIndex === index) return {...item, liked: !item.liked}
        }));
    };

    function commentMeme(comment, memeIndex) {
        setMemesData((prev)=> prev.map((item, index)=> {
            if (memeIndex !== index) return item;
            if (memeIndex === index) return {...item, comments: [...item.comments, comment] }
        }));
    }

    console.log(memesData);

    return (
        <ContextObj.Provider value={{memesData, likeMeme, commentMeme}}>
            {children}
        </ContextObj.Provider>
    );
};