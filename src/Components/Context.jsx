import React, {createContext, useState, useEffect} from 'react';


export const ContextObj = createContext();

export function ContextProvider({children}) {
    const [memesData, setMemesData] = useState([]);
    const [memeInCreateMeme, setMemeInCreateMeme] = useState(null);
    const [completedMemes, setCompletedMemes] = useState([]);
    const imgFlipApi = `https://api.imgflip.com/get_memes`;


    useEffect(()=> {
        
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


    function likeMeme(memeIndex) {
        setMemesData((prev)=> prev.map((item, index)=> {
            return memeIndex === index ? {...item, liked: !item.liked} 
                : item;
        }));
    };

    function favoriteMeme(memeIndex) {
        setMemesData((prev)=> prev.map((item, index)=> {
            return memeIndex === index ? {...item, favorite: !item.favorite}
                : item;
        }));
    };

    function commentMeme(comment, memeIndex, setText) {
        setMemesData((prev)=> prev.map((item, index)=> {
            return memeIndex === index ? {...item, comments: [...item.comments, comment]}
                : item;
            setText('');
        }));
    };

    function removeMeme(memeIndex, conditionPropt) {   /*review the function */

        // if (conditionPropt === 'likedMeme') {
        //     const meme = memesData[memeIndex];
        //     setMemesData((prevState)=> {
        //        const newState = [...prevState];
        //        newState[memeIndex].liked = false;
        //        return newState;
        //     });
        // }
        // else if (conditionPropt === 'favoriteMeme') {
        //     const meme = memesData[memeIndex];
        //     setMemesData((prevState)=> {
        //        const newState = [...prevState];
        //        newState[memeIndex].favorite = false;
        //        return newState;
        //     });
        // }
        // else if (conditionPropt === 'uploadedMeme') {
        //     const meme = memesData[memeIndex];
        //     setMemesData((prevState)=> {
        //         const newState = [...prevState];
        //         newState.splice(memeIndex, 1);
        //         return newState;
        //     });
        // }
        // else if (conditionPropt === 'commentedMeme') {
        //     const meme = memesData[memeIndex];
        //     setMemesData((prevState)=> {
        //        const newState = [...prevState];
        //        newState[memeIndex].comments = [];
        //        return newState;
        //     });
        // }
        // else if (conditionPropt === 'createdMeme') {
        //     const meme = completedMemes[memeIndex];
        //     setCompletedMemes((prevState)=> {
        //         const newState = [...prevState];
        //         newState.splice(memeIndex, 1);
        //         return newState;
        //     });
        // };
        switch(conditionPropt) {
            case 'likedMeme':
                setMemesData((prevState)=> {
                    const newState = [...prevState];
                    newState[memeIndex].liked = false;
                    return newState;
                 });
                break;
            case 'favoriteMeme':
                setMemesData((prevState)=> {
                   const newState = [...prevState];
                   newState[memeIndex].favorite = false;
                   return newState;
                });
                break;
            case 'uploadedMeme':
                setMemesData((prevState)=> {
                    const newState = [...prevState];
                    newState.splice(memeIndex, 1);
                    return newState;
                });
                break;
            case 'commentedMeme':
                setMemesData((prevState)=> {
                   const newState = [...prevState];
                   newState[memeIndex].comments = [];
                   return newState;
                });
                break;
            case 'createdMeme':
                setCompletedMemes((prevState)=> {
                    const newState = [...prevState];
                    newState.splice(memeIndex, 1);
                    return newState;
                });
        };
    };

    
    return (
        <ContextObj.Provider value={{memesData, memeInCreateMeme, completedMemes, 
            setMemesData, setCompletedMemes, setMemeInCreateMeme, likeMeme, commentMeme, favoriteMeme, removeMeme}}>
            {children}
        </ContextObj.Provider>
    );
};