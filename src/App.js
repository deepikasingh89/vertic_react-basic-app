import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome";
import Message from "./Message";
import ToggleButton from './ToggleButton';
import Clock from './Clock';
import Greeting from './Greeting';
import Logincntrl from './Logincntrl';
import NumberList from './Numberlist';
import Form from './Form';
function App() {
  //jsx 
  // function formatName(userName){
  //   return userName.toUpperCase();
  // }

  // function sendGreeting(userName){
  //   if(userName){
  //     return <h1>Hello {formatName(userName)}</h1>; 
  //   }else{
  //     return <h1>Hello Stranger</h1>
  //   }
  // }
  // const imgurl = "/logo192.png";
  // const image = <img src={imgurl} alt="logo"></img>;
  // const userName = 'Deepika Merai';
  // const element = (
  //   <div>
  //     <h1>{sendGreeting(userName)}</h1>
  //     {image}
  //   </div>
  // );

  // return element;
  // const number = [1, 2, 3, 4, 5, 5, 6, 7];
  // const todo = [
  //   { id: 1, name: "coding", isdone: false },
  //   { id: 1, name: "walking", isdone: true },
  // ];
   return (
     <div>
      <Form></Form>
       {/* <NumberList number={number} />
       {todo.map((todo) => (
         <ul>
           <li>
             <h5>
               {todo.name} - {todo.isdone ? "done" : "notdone"}
             </h5>
           </li>
         </ul>
       ))} */}
       {/* <Clock date={new Date()} /> */}
       {/* <ToggleButton></ToggleButton> */}
       {/* <Logincntrl hasMessage={false} credit={100} hasWarning={true}></Logincntrl> */}
       {/* <Greeting isloggined={false}/> */}
       {/* <Welcome name  ="deepika" />; */}
       {/* <Message message="Angular is great!!" />; */}
     </div>
   );
}

export default App;
