
function Tweet({ content,likeCount}){
    //console.log("tweet.jsx");
    return(
        <>
            <div className="tweet-content">
                {content}
            </div>
            <div className="like-count">
                {likeCount} likes
            </div>
        </>
    )
}

export default Tweet;