import { useState } from 'react';
import TweetList from './TweetList.jsx';
import AddTweet from './AddTweet.jsx';


const initialDummyTweets = [
    {id:0, content: "what should i post",likeCount: 4, createdAt: new Date()},
    {id:1, content: "what's going on in tech community", likeCount:7, createdAt: new Date()},
    {id:2, content: "What about new instagram app called as thread", likeCount:10, createdAt: new Date()}
  ];
  



function Twitter(){
    const [tweets,setTweets] = useState(initialDummyTweets);
    
    const handleTweet = (text) => {
        let nextId = (tweets.length>0)?tweets[tweets.length-1].id+1:0;
        setTweets([...tweets,{
            id: nextId,
            content: text,
            likeCount: Math.floor(Math.random()*10),
            createdAt: new Date()
        }]);
    }

    const handleEditTweet = (tweet) => { //this incoming tweet is the updated tweet
        setTweets(
            tweets.map((currentTweet) => {
                if(currentTweet.id === tweet.id){
                    return tweet;
                }else{
                    return currentTweet;
                }
            })
        )
    }

    const sortTweets = () => {
        tweets.sort((t1,t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
    }

    return (
        <div>
          <AddTweet onAddTweet={handleTweet}/>
          <button onClick={sortTweets}>
            Sort Tweet By CreatedAt
          </button>
          <TweetList tweets={tweets} onEditTweet={handleEditTweet}/>
        </div>
      );
}

export default Twitter;