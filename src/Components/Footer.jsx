import React from 'react'
import { DiGithubBadge } from "react-icons/di";

export default function Footer() {
    return (
        <footer className="footer">
        <p><a href="https://github.com/abeatrix"><DiGithubBadge className="footer-icon"/></a></p>
          <p>Made by <a href="https://github.com/abeatrix">Beatrix Woo</a> and <a href="https://github.com/gabtorre">Gabriel Torres</a></p>
          <p>© {new Date().getFullYear()} Films with Friends</p>
        </footer>
    )
}
