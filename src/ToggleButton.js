// function ToggleButton() {

//     function hello(){
//         alert("hello");
//     }

//      function handleClick(e) {
//         e.preventDefault();
//        alert("hello");
//      }
//     const btnFun = (
//       <div>
//         <button onClick={hello}>Hello</button>
//         <a href="#page" onClick={handleClick}>
//           Page
//         </a>
//       </div>
//     );
//   return btnFun;
// }

// export default ToggleButton;
import React from "react";
class ToggleButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {istoggle:true};
    }
  hello() {
    alert("hello");
  }
  handleClick=(...value)=> {
    console.log(value);
    this.setState((state) => {
        return {istoggle:state.istoggle?false:true};
    });
    // e.preventDefault();
    // alert("hello");
  }
  render() {
    return (
      <div>
        <button onClick={this.hello}>Hello</button>
        <a href="#page" onClick={(e)=>this.handleClick(e,1)}>
          {this.state.istoggle?'ON':'OFF'}
        </a>
      </div>
    );
  }
}

export default ToggleButton;
