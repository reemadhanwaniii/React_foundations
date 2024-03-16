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
    return (
        <div>
          <AddTweet onAddTweet={handleTweet}/>
          <TweetList tweets={tweets}/>
        </div>
      );
}

export default Twitter;