import { useState } from "react";

function AddTweet({onAddTweet}){
    const [text,setText] = useState("");
    return(
        <>
            <input 
                placeholder="Add new tweet..."
                value={text}
                onChange={(event)=>setText(event.target.value)}
            />
            <button onClick={ () => {
                onAddTweet(text);
                setText('');
            }}>
                Tweet !!
            </button>
        </>
    );
}

export default AddTweet;