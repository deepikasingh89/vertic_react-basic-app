import React from "react";
// function Clock(props) {
//   return <h1>{props.date.toLocaleString()}</h1>;
// }

// export default Clock;

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state={date: new Date()} //to set state
    }
    //lifecycle of react
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState({ date: new Date() }); //to update state 
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        return <h1>{this.state.date.toLocaleString()}</h1>;
    }
}

export default Clock;