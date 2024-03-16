import './App.css';
import TweetList from './Components/TweetList.jsx';

const initialDummyTweets = [
  {id:0, content: "what should i post",likeCount: 4},
  {id:1, content: "what's going on in tech community", likeCount:7},
  {id:2, content: "What about new instagram app called as thread", likeCount:10}
];

function App() {
 // console.log("app.js");
  return (
    <div>
      <TweetList tweets={initialDummyTweets}/>
    </div>
  );
}

export default App;
