import "./style.css";
import userPicture from "../../assets/jeremy.png";

function UserProfile(props) {
  return (
    <div id="userProfileContainer">
      <div id="profile">
        <img src={userPicture} alt="profilePicture" id="profilePicture"></img>
        <div id="profileText">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div id="period">
        <h2
          style={{ opacity: `${props.time === "daily" ? 1 : 0.5}` }}
          onClick={() => {
            props.setTime("daily");
          }}
        >
          Daily
        </h2>
        <h2
          style={{ opacity: `${props.time === "weekly" ? 1 : 0.5}` }}
          onClick={() => {
            props.setTime("weekly");
          }}
        >
          Weekly
        </h2>
        <h2
          style={{ opacity: `${props.time === "monthly" ? 1 : 0.5}` }}
          onClick={() => {
            props.setTime("monthly");
          }}
        >
          Monthly
        </h2>
      </div>
    </div>
  );
}

export default UserProfile;
