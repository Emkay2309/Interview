import React from 'react'

function PropsChildren({name , age , children}) {
    console.log(children);
  return (
    <div>
        <h1>My name is {name}</h1>
        <p>age is {age}</p>
        {children}
    </div>
  )
}

export default PropsChildren