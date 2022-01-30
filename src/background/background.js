import React from "react";
import "./background.css";

// const banner = document.getElementsByClassName("banner")[0];
// const blocks = document.getElementsByClassName("blocks");
// for (var i = 1; i < 400; i++) {
//   banner.innerHTML += "<div class = 'blocks'></div>";
//   const duration = Math.random() * 5;
//   blocks[i].style.animationDuration = 2 + duration + "s";
//   blocks[i].style.animationDelay = duration + "s";
// }

const Background = () => {
  return (
    <section>
      <h2> Добро пожаловать в игру</h2>
      <div className="banner"></div>
      <div className="blocks"></div>
    </section>
  );
};

export default Background;
