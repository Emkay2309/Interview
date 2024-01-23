import React from 'react';
import PropsChildren from "./components/PropsChildren"
import ConditionalRendering from "./components/ConditionalRendering"
import ClassBased from "./components/ClassBased"
import UpdateArray from "./components/UpdateArray"
import ObjectUpdate from './components/ObjectUpdate'
import UseMemoHook from './components/UseMemoHook'
import UseReducer from './components/UseReducer'
import Test1 from './components/Test1'

function App() {
  return (
    <>
      {/* <Test1/> */}
      {/* <UseReducer/> */}
       <UseMemoHook/>
      {/*
      <ObjectUpdate/>
      <UpdateArray/>
      <PropsChildren name="Mohsin" age="31">
        <p>Hello this should be a child</p>
      </PropsChildren>
      <ConditionalRendering/>
      <ClassBased/> */}
    </>
      )
}

export default App;
