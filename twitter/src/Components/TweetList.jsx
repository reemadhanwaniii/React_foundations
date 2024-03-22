import Tweet from "./Tweet.jsx";
import "../CSS/TweetList.css";
import { memo } from "react";

const MemoisedTweet = memo(Tweet);

function TweetList({ tweets,onEditTweet }) {
    //console.log("TweetList.jsx")
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet)=>(
                    <li className="tweet" key={tweet.id}>
                       <MemoisedTweet 
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