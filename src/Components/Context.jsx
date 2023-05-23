import React, {createContext, useState, useEffect} from 'react';


export const ContextObj = createContext();

export function ContextProvider({children}) {
    const allowApi = true;
    // const [tryApiAgain, setTryApiAgain] = useState(false);
    const [memesData, setMemesData] = useState([]);
    const [memeInCreateMeme, setMemeInCreateMeme] = useState(null);
    const [completedMemes, setCompletedMemes] = useState([]);
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=ydEyl4nja4f2KWAwXO98qbi58a076TdS&q=meme&limit=25&offset=0&rating=g&lang=en';
    const section = 'hot';
    const sort = 'hot';
    const window = 'week';
    const page = '1';
    const url2 = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}`;
    const imgFlipApi = `https://api.imgflip.com/get_memes`;

    // useEffect(()=> {
    //     if (!allowApi) return
    //     console.log('effect ran');
    //     fetch(url)
    //         .then((response)=> response.json())
    //         .then((data)=> {
    //             const memes = data.data.map((item)=> {
    //                 return {
    //                     origin: 'api',
    //                     url: item.images.original.url,
    //                     liked: false,
    //                     favorite: false,
    //                     comments: [],
    //                 }
    //             });
    //             setMemesData(memes);
    //             console.log('API ran')
    //         });
    // }, []);

   
    console.log(completedMemes);

    useEffect(()=> {
        (async function() {
            try {
                const response = await fetch(imgFlipApi);
                const data = await response.json();
                const memes = data.data.memes.map((item)=> {
                    return {
                        origin: 'api',
                        url: item.url,
                        liked: false,
                        favorite: false,
                        comments: [],
                    };
                });
                setMemesData(memes);
                console.log('API ran')
            }
            catch(error) {
                alert(error);
            };
        }) ();
    }, []);

   

    function likeMeme(memeIndex) {
        setMemesData((prev)=> prev.map((item, index)=> {
            if (memeIndex !== index) return item;
            else if (memeIndex === index) return {...item, liked: !item.liked};
        }));
    };

    function favoriteMeme(memeIndex) {
        setMemesData((prev)=> prev.map((item, index)=> {
            if (memeIndex !== index) return item;
            else if (memeIndex === index) return {...item, favorite: !item.favorite};
        }));
    };

    function commentMeme(comment, memeIndex, setText) {
        setMemesData((prev)=> prev.map((item, index)=> {
            if (memeIndex !== index) return item;
            else if (memeIndex === index) return {...item, comments: [...item.comments, comment]};
            setText('');
        }));
    };

    function removeMeme(memeIndex) {   /*review the function */
        // setMemesData((prevState)=> [...prevState, {...memeIndex, liked: false}]);
        // const meme = memesData.map((item, index)=> {
        //     if (memeIndex !== index) return null;
        //     else return {...item, liked: false};
        // }).filter((item)=> item);
        const meme = memesData[memeIndex];
        setMemesData((prevState)=> [...prevState, {meme, liked: false}]);
        // console.log(memeIndex);
    };

    function sendMemetoCreate(memeIndex) {
        const meme = memesData[memeIndex];
        setMemeInCreateMeme(meme);
    }

    // console.log(memesData[0]);
    


    return (
        <ContextObj.Provider value={{memesData, memeInCreateMeme, completedMemes, setMemesData, setCompletedMemes, likeMeme, commentMeme, favoriteMeme, removeMeme, sendMemetoCreate}}>
            {children}
        </ContextObj.Provider>
    );
};