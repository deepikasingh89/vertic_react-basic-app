import GuestGrt from "./GuestGrt";
import UserGreeting from "./UserGreeting";

function Greeting(props) {
  if (!props.isLoggedIn) {
    return <UserGreeting></UserGreeting>;
  } else {
    return <GuestGrt />;
  }
}

export default Greeting;
