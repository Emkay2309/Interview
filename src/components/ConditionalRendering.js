import React from 'react'

const Valid = ()=> <h1>Correct Password</h1>;
const InValid = ()=> <h1>Wrong Password</h1>;
const CheckPassword = ({isValid})=> {
  return isValid === true ? <Valid/> : <InValid/>;
}

function ConditionalRendering() {
  return (
    <div>
      <h1 style={{color:'red',backgroundColor:'lightgreen'}}>This is sub component</h1>
      <CheckPassword isValid={false}/>
    </div>
  )
}

export default ConditionalRendering