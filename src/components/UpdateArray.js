import React, { useState } from 'react'

function UpdateArray() {
    const [friends , setFriends] = useState(["alex","bob" , "carl","damon"]);

    const add = () => {
        const value = document.getElementById('input');
        console.log(value.value);
        if(value.value != "") {
            setFriends([...friends,value.value]);
        }  
    };
    const remove = () => {
        friends.pop();
        setFriends([...friends]);
    };
    
  return (
    <div>
        {
            friends.map((f)=> (
                <li key={Math.random()}>{f}</li>
            ))
        }
        <input id='input' placeholder='Type name'  />
        <button  onClick={add} >Add Friend</button>
        <button  onClick={remove}>Remove Friend</button>
        
    </div>
  )
}

export default UpdateArray