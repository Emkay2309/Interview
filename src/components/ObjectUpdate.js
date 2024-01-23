import React, { useState } from 'react'

function ObjectUpdate() {
    const [student , setStudnt] = useState({
        name:'emkay',
        marks:4.0,
        subject:'DSA'
    });

    const update = ()=> {
        let tempStudent = {...student};
        if(student.marks == 4.0) {
            tempStudent = {
                ...student,
                marks:3.8,
                subject:'LLD'
            }
        }
        else {
            tempStudent = {
                ...student,
                marks:4.0,
                subject:'DSA'
            }
        }
        setStudnt(tempStudent);
    }
  return (
    <div style={{border:'solid 1px black'}}>
        <h4 style={{margin:'10px 10px'}}>Student Name : {student.name}</h4>
        <h4 style={{margin:'10px 10px'}}>Subject      : {student.subject}</h4>
        <h4 style={{margin:'10px 10px'}}>Marks        : {student.marks}</h4>
        <button onClick={update} style={{margin:'10px 10px'}}>Update Student</button>
    </div>
  )
}

export default ObjectUpdate