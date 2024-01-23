import React from 'react'
import Practice from './Practice'

class MyComponent extends React.Component {
    //constructor
    constructor(props) {
        super(props);
        console.log("Parent constructor is called");
        this.state = {
            inc:0,
            count:0,
        };

    }

    componentDidMount() {
        console.log("parent mounting is done");
    }

    render() {
        console.log("parent constructor is rendered");
        return (
            <div>
                <Practice/>
                <h1>MyComponent</h1>
                <p>{this.props.prop1}</p>
                <p>{this.props.prop2}</p>
                <h1>count : {this.state.count}</h1>
                <button 
                    onClick={()=> {
                        this.setState({
                            count : this.state.count + 1,
                        });
                    }
                }
                >increase count</button>

                {/* <h1>inc : {this.state.inc}</h1>
                <button 
                    onClick={()=> {
                        this.setState({
                            inc : this.state.inc + 1,
                        });
                    }
                }
                >increase inc</button> */}

            </div>
        )
    }
}
export default MyComponent