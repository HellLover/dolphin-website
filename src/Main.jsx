// Main
import React from "react";
import './Main.css';
// Components
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
// Images
import DiscordUI from "./assets/DiscordUI.png";
import Stats from "./assets/Stats.png";

function Main() {
  return (
   <body>
     <header>
      <NavBar />
     </header>
    <div className="full">
     <div className="center-content">
      <div className="info-content">
       <h1>
         <span>Dolphin</span> - A powerful Discord bot.
       </h1>
       <button className="invite_me-btn">
         <i class='bx bxl-discord'></i>
         <a href="https://discord.com/api/oauth2/authorize?client_id=713713873915478036&permissions=8&scope=bot" target="_blank" rel="noreferrer">Invite me to your server</a>
       </button>
      </div>
     </div>
     <div>
       <Features title="Why Dolphin?" img={DiscordUI} description="Dolphin is easy-to-use, free and multipurpose! It is a Discord bot with 200+ useful commands from Moderation to Economy and Settings." />
       <Features title="Note" img={Stats} description={`300+ servers and 110k+ users are using Dolphin! So invite me to your server and enjoy this bot too.`} />
     </div>
    </div>
    <footer>
       <Footer />
    </footer>
   </body>
  );
}

export default Main;
