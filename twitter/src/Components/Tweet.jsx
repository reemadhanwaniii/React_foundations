import { useState } from "react";
import "../CSS/Tweet.css";

function Tweet({ tweetId,content,likeCount,createdAt,onEdit }){
    const [isEditing,setIsEditing] = useState(false);
    return(
        <div className="tweet-wrapper">
            <div className="tweet-edit-wrapper">
                <div className="tweet-content">
                     {(isEditing)? (<input 
                                        value={content} onChange={(event)=> {
                                            onEdit({
                                                id:tweetId,
                                                content: event.target.value,
                                                likeCount:likeCount,
                                                createdAt:createdAt
                                            });
                                        }}/>) : content}
                </div>
                <div className="edit-tweet">
                    <button onClick={()=>setIsEditing(!isEditing)}>
                        {(isEditing)?'Save':'Edit'}
                    </button>
                </div>
            </div>
            
            <div className="like-created-wrapper">
                <div className="like-count">
                    {likeCount} likes
                </div>
                <div className="created-at">
                    <b>Tweeted At {createdAt}</b>
                </div>
            </div>
        </div>
    )
}

export default Tweet;