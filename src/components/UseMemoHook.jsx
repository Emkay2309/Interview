import React, {useMemo, useState } from 'react'

function UseMemoHook() {
    const [count , setCount] = useState(0);
    const [item , setItem] = useState(10);

    // function update() {
    //   return count*5;
    // }

    const multiCountMemo = useMemo( function update() {
      return count*5 },[count]);

  return (
    <div>
        <h1>This is an example of useMemo in react</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>update count</button>

        <h2>{multiCountMemo}</h2>

        <h2>Item : {item}</h2>
        <button onClick={()=>setItem(item*10)}>update item</button>

    </div>
  )
}

export default UseMemoHook