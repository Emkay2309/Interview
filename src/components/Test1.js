import React, { useState } from 'react';

function Test1() {
  const [comma, setComma] = useState([]);
  const [data, setData] = useState('');

  const changeInput = (e) => {
    setData(e.target.value);
  };

  const commaInput = ()=> {
    if(data !== '') {
        setComma((prev) => [...prev , data] );
        setData("");
    }
  }

  const addRow = ()=> {
    <p>{data}</p>
    console.log("add row");
  }

  return (
    <div>
      <input
        placeholder='text...'
        value={data}
        onChange={changeInput}
      ></input>

      <p>{data}</p>

      <p>{comma.join()}</p>

      <ul>
        {comma.map((val)=>(
            <li>{val}</li>
        ))}
      </ul>

      <button onClick={commaInput }   >Click Me</button>
      <button onClick={addRow} > Add Row</button>
    </div>
  );
}

export default Test1;
