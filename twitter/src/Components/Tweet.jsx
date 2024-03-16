import "../CSS/Tweet.css";

function Tweet({ content,likeCount,createdAt }){
    
    return(
        <div className="tweet-wrapper">
            <div className="tweet-content">
                {content}
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