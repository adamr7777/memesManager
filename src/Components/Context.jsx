import React, {createContext, useState, useEffect} from 'react';


export const ContextObj = createContext();

export function ContextProvider({children}) {
    const allowApi = true;
    // const [tryApiAgain, setTryApiAgain] = useState(false);
    const [memesData, setMemesData] = useState([]);
    const [memeInCreateMeme, setMemeInCreateMeme] = useState(null);
    const [completedMemes, setCompletedMemes] = useState([]);
    // const [siteWillReload, setSiteWillReload] = useState(true);
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

    // useEffect(()=> {
    //     if (siteWillReload) return
    //     localStorage.setItem('siteWillReload', JSON.stringify(siteWillReload));
    // }, [siteWillReload]);

    // useEffect(()=> {
    //     const localData = JSON.parse(localStorage.getItem('siteWillReload'));
    //     setSiteWillReload(localData);
    // }, []);
   
    console.log(completedMemes);

    useEffect(()=> {
        // if (localStorage.getItem('memesData')) return;
        (async function() {
            try {
                if (localStorage.getItem('memesData')) {
                    const localData = JSON.parse(localStorage.getItem('memesData'));
                    setMemesData(localData);
                } 
                else {
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
                    localStorage.setItem('memesData', JSON.stringify(memesData));
                    console.log('API ran')
                };
            }
            catch(error) {
                alert(error);
            };
        }) ();
    }, []);



    useEffect(()=> {
        localStorage.setItem('memesData', JSON.stringify(memesData));
    }, [memesData]);

    // useEffect(()=> {
    //     localStorage.setItem('completedMemes', JSON.stringify(completedMemes));
    // }, [completedMemes]);

    // useEffect(()=> {
    //     const localData = JSON.parse(localStorage.getItem('memesData'));
    //     setMemesData(localData);
    // }, []);

    useEffect(()=> {
        if (!localStorage.getItem('completedMemes')) return;
        else {
            const localData = JSON.parse(localStorage.getItem('completedMemes'));
            setCompletedMemes(localData);
        };
    }, []);

    useEffect(()=> {
        localStorage.setItem('completedMemes', JSON.stringify(completedMemes));
    }, [completedMemes]);


//    function retreveCompletedMemes() {
//     console.log('retreveCompletedMemes is working');
//     if (!localStorage.getItem('completedMemes')) return [];
//     return JSON.parse(localStorage.getItem('completedMemes'))
//    };

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

    function removeMeme(memeIndex, conditionPropt) {   /*review the function */
        // console.log('this is condition:' + ' ' + conditionPropt);
        if (conditionPropt === 'likedMeme') {
            const meme = memesData[memeIndex];
            setMemesData((prevState)=> {
               const newState = [...prevState];
               newState[memeIndex].liked = false;
               return newState;
            });
            console.log(memesData);
        }
        else if (conditionPropt === 'favoriteMeme') {
            const meme = memesData[memeIndex];
            setMemesData((prevState)=> {
               const newState = [...prevState];
               newState[memeIndex].favorite = false;
               return newState;
            });
        }
        else if (conditionPropt === 'uploadedMeme') {
            const meme = memesData[memeIndex];
            setMemesData((prevState)=> {
                const newState = [...prevState];
                newState.splice(memeIndex, 1);
                return newState;
            });
        }
        else if (conditionPropt === 'commentedMeme') {
            const meme = memesData[memeIndex];
            setMemesData((prevState)=> {
               const newState = [...prevState];
               newState[memeIndex].comments = [];
               return newState;
            });
        }
    };

    function sendMemetoCreate(memeIndex) {
        const meme = memesData[memeIndex];
        setMemeInCreateMeme(meme);
    };

   

    // console.log(memesData[0]);
    


    return (
        <ContextObj.Provider value={{memesData, memeInCreateMeme, completedMemes, setMemesData, setCompletedMemes, likeMeme, commentMeme, favoriteMeme, removeMeme, sendMemetoCreate}}>
            {children}
        </ContextObj.Provider>
    );
};