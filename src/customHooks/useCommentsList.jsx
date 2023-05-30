import React, {useContext} from 'react';
import {ContextObj} from '../Components/Context';
import Comment from '../Components/Comment';





export default function useCommentsList() {
    const {memesData} = useContext(ContextObj);
    const firstComment = memesData[props.index].comments[0];
    const [commentsSection, setCommentsSection] = useState(`${firstComment} ......`);
    if (typeof commentsSection !== 'object') {
        const comments = memesData[props.index].comments.map((item, index)=> (
            <Comment className='mb-1' title={`Comment ${index+1}`} comment={item} key={index}/>
        ));
        setCommentsSection(comments);
    }
    else setCommentsSection(`${firstComment} ......`);
};