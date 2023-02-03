import "./style.css";
import ellipsis from "../../assets/icon-ellipsis.svg";

function AnalyticsCard(props) {
  function getData(name) {
    return props.data.filter((obj) => {
      return obj.title === name;
    });
  }

  function selectedData() {
    const elementData = getData(props.card.name);

    if (props.time === "daily") {
      return elementData[0].timeframes.daily;
    } else if (props.time === "weekly") {
      return elementData[0].timeframes.weekly;
    } else if (props.time === "monthly") {
      return elementData[0].timeframes.monthly;
    }
  }

  selectedData();

  return (
    <div
      id="analyticsCardContainer"
      style={{ backgroundColor: props.card.background }}
    >
      <div id="imageContainer">
        <img alt="cardBackground" src={props.card.icon}></img>
      </div>
      <div id="analyticsCardContent">
        <div id="cardContentHeader">
          <h2>{props.card.name}</h2>
          <img src={ellipsis} alt="options"></img>
        </div>
        <div id="dataDisplay">
          <span id="currentHours">
            {selectedData().current}hrs
          </span>
          <span id="previousHours">
            Last Week - {selectedData().previous}
            hrs
          </span>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;
