import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react'

class Practice extends React.Component {
    //constructor
    constructor(props) {
        super(props);
        console.log("child constructor is called");
        //usestate : 
        this.state = {
            col : "red",
            //converting state of json from api call
            userInfo : {
                name:"",
                id:1
            }
        };
    }

    async componentDidMount() {
        console.log("child mounting is done");

        //API 
        const data = await fetch("https://api.github.com/users/Emkay2309");
        const json = await data.json();
        this.setState({
            userInfo : json
        });
        console.log(json);

    }

    render(){
        console.log("child constructor is rendered");
        const {name , id} = this.state.userInfo;
        return (
            <div>
                <h1>Name : {this.state.userInfo.name}</h1>
                <h1>Id : {this.state.userInfo.id}</h1>
                <h1>Practice Class Based Component</h1>
                <p>change color : {this.state.col}</p>
                <button 
                    onClick={()=>{
                        this.setState({
                            col:this.state.col === "red" 
                            ? this.state.col = "blue" : this.state.col = "red"
                        })
                    }}>Change Color
                </button>
            </div>
        )
    }
}
export default Practice