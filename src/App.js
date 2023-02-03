import "./App.css";
import { useState } from "react";
import UserProfile from "./components/userProfile";
import Analytics from "./components/analytics";

function App() {
  const [time, setTime] = useState("weekly");

  return (
    <div className="App">
      <div id="appContainer">
        <UserProfile time={time} setTime={setTime}></UserProfile>
        <Analytics time={time}></Analytics>
      </div>
    </div>
  );
}

export default App;
