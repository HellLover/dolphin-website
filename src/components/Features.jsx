import React from "react";
import "./Features.css";

function Features(options) {
    return(
        <div>
            <div className="features-container">
                <div className="feature">
                   <div className="feature-image">
                      <img src={options.img} alt="DiscordUI" />
                   </div>
                   <div className="feature-desc">
                      <h2>{options.title}</h2>
                      <p>{options.description}</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Features;