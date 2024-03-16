import Tweet from "./Tweet.jsx";

function TweetList({ tweets }) {
    //console.log("TweetList.jsx")
    return(
        <ul>
            {
                tweets.map((tweet)=>(
                    <li>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default TweetList;