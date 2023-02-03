import "./style.css";
import AnalyticsCard from "../analyticsCard";
import data from "../../data/data.json";

// Icon Imports
import workIcon from "../../assets/analyticsCards/icon-work.svg";
import playIcon from "../../assets/analyticsCards/icon-play.svg";
import studyIcon from "../../assets/analyticsCards/icon-study.svg";
import exerciseIcon from "../../assets/analyticsCards/icon-exercise.svg";
import socialIcon from "../../assets/analyticsCards/icon-social.svg";
import selfCareIcon from "../../assets/analyticsCards/icon-self-care.svg";

function Analytics(props) {
  const cards = [
    {
      name: "Work",
      time: "32",
      icon: workIcon,
      background: "hsl(15, 100%, 70%)",
    },
    {
      name: "Play",
      time: "32",
      icon: playIcon,
      background: "hsl(195, 74%, 62%)",
    },
    {
      name: "Study",
      time: "32",
      icon: studyIcon,
      background: "hsl(348, 100%, 68%)",
    },
    {
      name: "Exercise",
      time: "32",
      icon: exerciseIcon,
      background: "hsl(145, 58%, 55%)",
    },
    {
      name: "Social",
      time: "32",
      icon: socialIcon,
      background: "hsl(264, 64%, 52%)",
    },
    {
      name: "Self Care",
      time: "32",
      icon: selfCareIcon,
      background: "hsl(43, 84%, 65%)",
    },
  ];

  return (
    <div id="analyticsContainer">
      {cards.map((element) => {
        return <AnalyticsCard time={props.time} setTime={props.setTime} card={element} data={data}></AnalyticsCard>;
      })}
    </div>
  );
}

export default Analytics;
