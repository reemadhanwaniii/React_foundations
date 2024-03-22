import { useState } from 'react';
import TweetList from './TweetList.jsx';
import AddTweet from './AddTweet.jsx';
import { useCallback,memo } from 'react';


const initialDummyTweets = [
    {id:0, content: "what should i post",likeCount: 4, createdAt: new Date()},
    {id:1, content: "what's going on in tech community", likeCount:7, createdAt: new Date()},
    {id:2, content: "What about new instagram app called as thread", likeCount:10, createdAt: new Date()}
  ];
  

const AddMemoisedTweet = memo(AddTweet);

function Twitter(){
    const [tweets,setTweets] = useState(initialDummyTweets);
    
    const handleTweet = useCallback((text) => {
        let nextId = (tweets.length>0)?tweets[tweets.length-1].id+1:0;
        setTweets([...tweets,{
            id: nextId,
            content: text,
            likeCount: Math.floor(Math.random()*10),
            createdAt: new Date()
        }]);
    },[tweets]); // this callback array is array of dependency

    const handleEditTweet = useCallback((tweet) => { //this incoming tweet is the updated tweet
        setTweets(
            tweets.map((currentTweet) => {
                if(currentTweet.id === tweet.id){
                    return tweet;
                }else{
                    return currentTweet;
                }
            })
        )
    },[tweets]);

    const sortTweets = useCallback(() => {
        tweets.sort((t1,t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
    },[tweets]);

    return (
        <div>
          <AddMemoisedTweet onAddTweet={handleTweet}/>
          <button onClick={sortTweets}>
            Sort Tweet By CreatedAt
          </button>
          <TweetList tweets={tweets} onEditTweet={handleEditTweet}/>
        </div>
      );
}

export default Twitter;