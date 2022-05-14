import React from "react";
import './Rightbar.css';
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
// import youtube from "../images/youtube.png";
// import js from "../images/js.png";
// import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: spaceshooter,
      text: "Ape Lounge Web3 Stealth Launch",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-space-fps-game/",
    },
    {
      img: netflix,
      text: "The fisrt Moralis Project! Let's Netflix and chill...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    },
    {
      img: academy,
      text: "How to buy Ape Lounge Web3...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
  ];

  return (
    <>
    <div className="rightbarContent">
      {/* <Input
        label="Search Twitter"
        name ="Search Twitter"
        prefixIcon="search"
        labelBgColor="#141d26" 
        >
      </Input> */}
      
    <div className="trends">
      Latest News
      {trends.map((e) => {
          return(
            <>
            <div className="trend" onClick={() => window.open(e.link)}>
              <img src={e.img} className="trendImg"></img>
              <div className="trendText">{e.text}</div>
            </div>
            </>
          )
      })}
    </div>

    </div>
    </>
  );
};

export default Rightbar;

