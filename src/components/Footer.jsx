import React from "react";
import "./Footer.css";

export default function Footer() {
    return(
        <div className="footer">
                <ul className="footer-items">
                    <li className="item">
                        <i class='bx bx-support' ></i>
                        <a href="https://discord.gg/TYhSGhWGvm">Support Server</a>
                    </li>
                    <li className="item">
                        <i class='bx bx-down-arrow-alt'></i>
                        <a href="https://discordapi.com/permissions.html#0">Generate an invite link</a>
                    </li>
                    <li className="item">
                        <i class='bx bx-command' ></i>
                        <a href="/">Command list</a>
                    </li>
                    <li className="item">
                        <i class='bx bx-code-alt'></i>
                        <a href="https://github.com/HellLover/dolphin-website">Source Code</a>
                    </li>
                </ul>
        </div>
    )
}