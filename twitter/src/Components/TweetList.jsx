import Tweet from "./Tweet.jsx";
import "../CSS/TweetList.css";

function TweetList({ tweets }) {
    //console.log("TweetList.jsx")
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet)=>(
                    <li className="tweet" key={tweet.id}>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount} createdAt={tweet.createdAt.toString()}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default TweetList;