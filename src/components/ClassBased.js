import React from 'react'
import MyComponent from './MyComponent';

class ClassBased extends React.Component {
//   // Constructor is not needed here if you're not initializing state or binding methods
//     constructor(props) {
//         super(props);
//     }
  render() {
    return (
      <div>
        <MyComponent prop1="Value 1" prop2="Value 2" />
      </div>
    );
  }
}

export default ClassBased;
