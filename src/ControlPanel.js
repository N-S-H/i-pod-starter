import React from "react";
import "./styles.css";
import ControlCircle from "./ControlCircle.js";
import Screen from "./Screen.js";

class ControlPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScreen: screens.HOME_SCREEN,
      currentMenuKey: 0
    };
  }

  incrementMenuKey = (offset) => {
    if (this.state.currentScreen === screens.HOME_SCREEN) {
      let currentOffset = this.state.currentMenuKey;
      currentOffset += offset;
      if (currentOffset < 0)
        currentOffset = screenMenuItems.HOME_SCREEN - Math.abs(currentOffset);
      currentOffset = currentOffset % screenMenuItems.HOME_SCREEN;
      this.setState({
        currentMenuKey: currentOffset
      });
    }
  };

  changeMenuKey = (value) => {
    this.setState({
      currentMenuKey: value
    });
  };

  loadScreenFromMainMenu = () => {
    let currentMenuKey = this.state.currentMenuKey;
    if (currentMenuKey === 0) {
      this.loadScreen(screens.COVER_SCREEN);
    } else if (currentMenuKey === 1) {
      this.loadScreen(screens.MUSIC_SCREEN);
    } else if (currentMenuKey === 2) {
      this.loadScreen(screens.GAMES_SCREEN);
    } else if (currentMenuKey === 3) {
      this.loadScreen(screens.SETTINGS_SCREEN);
    }
  };

  loadScreen = (screenName) => {
    this.setState({
      currentScreen: screenName,
      currentMenuKey: 0
    });
  };

  loadMainMenu = () => {
    this.setState({
      currentScreen: screens.HOME_SCREEN,
      currentMenuKey: 0
    });
  };

  render() {
    const { currentScreen, currentMenuKey } = this.state;
    return (
      <div className="control-box">
        <Screen
          currentScreen={currentScreen}
          loadScreen={this.loadScreen}
          currentMenuKey={currentMenuKey}
          changeMenuKey={this.changeMenuKey}
        />
        <ControlCircle
          loadMainMenu={this.loadMainMenu}
          incrementMenuKey={this.incrementMenuKey}
          loadScreenFromMainMenu={this.loadScreenFromMainMenu}
        />
      </div>
    );
  }
}

const screens = {
  HOME_SCREEN: "HOME",
  COVER_SCREEN: "COVER",
  MUSIC_SCREEN: "MUSIC",
  GAMES_SCREEN: "GAMES",
  SETTINGS_SCREEN: "SETTINGS"
};

const screenMenuItems = {
  HOME_SCREEN: 4
};

export default ControlPanel;
