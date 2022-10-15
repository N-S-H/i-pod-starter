import React from "react";
import "./styles.css";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import gamesImage from "../src/images/games.jpeg";
import settingsImage from "../src/images/settings.jpeg";
import homeImage from "../src/images/home.jpeg";
import coverflowImage from "../src/images/coverflow.jpeg";
import musicImage from "../src/images/music.jpeg"

class Screen extends React.Component {
  componentDidMount() {
    let menuKey = this.props.currentMenuKey;
    let screen = this.props.currentScreen;
    if (screen === "HOME") {
      this.createHoverEffect(screen, menuKey);
    }
  }

  componentDidUpdate() {
    let menuKey = this.props.currentMenuKey;
    let screen = this.props.currentScreen;
    if (screen === "HOME") {
      this.createHoverEffect(screen, menuKey);
    }
  }

  createHoverEffect = (screen, key) => {
    if (screen === "HOME") {
      $("[sequence=" + key + "]").focus();
    }
  };

  render() {
    const { currentScreen, loadScreen, changeMenuKey } = this.props;
    return (
      <div className="screen">
        {currentScreen === "HOME" && (
          <div
            className="home-screen"
            style={{ backgroundImage: `url(${homeImage})` }}
          >
            <div id="home-menu-container">
              <Dropdown.Menu className="w-25 h-100" id="home-menu" show="true">
                <h3 id="menu-title"> IPod </h3>
                <Dropdown.Item
                  onClick={() => {
                    loadScreen("COVER");
                  }}
                  onMouseOver={() => {
                    changeMenuKey(0);
                  }}
                  id="menu-item"
                  sequence="0"
                  eventKey="1"
                >
                  Coverflow
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    loadScreen("MUSIC");
                  }}
                  onMouseOver={() => {
                    changeMenuKey(1);
                  }}
                  id="menu-item"
                  sequence="1"
                  eventKey="2"
                >
                  Music
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    loadScreen("GAMES");
                  }}
                  onMouseOver={() => {
                    changeMenuKey(2);
                  }}
                  id="menu-item"
                  sequence="2"
                  eventKey="3"
                >
                  Games
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    loadScreen("SETTINGS");
                  }}
                  onMouseOver={() => {
                    changeMenuKey(3);
                  }}
                  id="menu-item"
                  sequence="3"
                  eventKey="4"
                >
                  Settings
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </div>
        )}
        {currentScreen === "COVER" && (
          <div
            className="cover-screen"
            style={{ backgroundImage: `url(${coverflowImage})` }}
          ></div>
        )}
        {currentScreen === "MUSIC" && (
          <div
            className="music-screen"
            style={{ backgroundImage: `url(${musicImage})` }}
          ></div>
        )}
        {currentScreen === "GAMES" && (
          <div
            className="games-screen"
            style={{ backgroundImage: `url(${gamesImage})` }}
          ></div>
        )}
        {currentScreen === "SETTINGS" && (
          <div
            className="settings-screen"
            style={{ backgroundImage: `url(${settingsImage})` }}
          ></div>
        )}
      </div>
    );
  }
}

export default Screen;
