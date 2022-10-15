import React from "react";
import "./styles.css";
import ZingTouch from "zingtouch";

class ControlCircle extends React.Component {
  constructor() {
    super();
    this.state = {
      latestMenuChangePoint: 0
    };
  }

  registerRotateEventOnCircle = () => {
    let target = document.getElementById("circle");
    let region = ZingTouch.Region(target);
    let { latestMenuChangePoint } = this.state;
    region.bind(target, "rotate", (e) => {
      const distanceFromOrigin = Math.floor(e.detail.distanceFromOrigin);
      if (
        distanceFromOrigin > latestMenuChangePoint &&
        distanceFromOrigin - latestMenuChangePoint >= 45
      ) {
        latestMenuChangePoint = distanceFromOrigin;
        this.props.incrementMenuKey(1);
      } else if (
        distanceFromOrigin < latestMenuChangePoint &&
        latestMenuChangePoint - distanceFromOrigin >= 45
      ) {
        latestMenuChangePoint = distanceFromOrigin;
        this.props.incrementMenuKey(-1);
      }
    });
  };

  menuDisplay = () => {
    this.props.loadMainMenu();
  };

  handleMainControlButtonClick = () => {
    this.props.loadScreenFromMainMenu();
  };

  componentDidMount() {
    this.registerRotateEventOnCircle();
  }

  render() {
    return (
      <>
        <div id="circle" className="control-circle">
          <div id="menu-text" onMouseOver={this.menuDisplay}>
            Menu
          </div>
          <div id="previous-button">
            <i className="fa-solid fa-backward-fast"></i>
          </div>

          <div id="next-button">
            <i className="fa-solid fa-forward-fast"></i>
          </div>

          <div id="pause-play-button">
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-pause"></i>
          </div>
        </div>

        <div
          id="main-control-button"
          onClick={this.handleMainControlButtonClick}
        ></div>
      </>
    );
  }
}

export default ControlCircle;
