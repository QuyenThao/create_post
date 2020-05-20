import React from "react";
import "./styles.css";

import imageIcon from "./img/image.png";
import friendIcon from "./img/friend.png";
import emotionIcon from "./img/emotion.png";
import menuIcon from "./img/menu.png";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Create Post</p>
        <div class="body">
          <img
            src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg"
            alt=""
            class="avatar"
          />
          <input type="text" placeholder="Write a New Post" />
        </div>
        <div class="footer">
          <div class="item">
            <img src={imageIcon} alt="" />
            <span>Images/Video</span>
          </div>
          <div class="item">
            <img src={friendIcon} alt="" />
            <span>Tag your friends</span>
          </div>
          <div class="item">
            <img src={emotionIcon} alt="" />
            <span>Emotion</span>
          </div>
          <div class="item">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
