import Tweet from "./Tweet.jsx";
import "../CSS/TweetList.css";

function TweetList({ tweets,onEditTweet }) {
    //console.log("TweetList.jsx")
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet)=>(
                    <li className="tweet" key={tweet.id}>
                        <Tweet 
                                tweetId={tweet.id}
                                content={tweet.content}
                                likeCount={tweet.likeCount} 
                                createdAt={tweet.createdAt.toString()}
                                onEdit={onEditTweet}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default TweetList;