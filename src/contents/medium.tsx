import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://medium.com/*", "https://*.medium.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = `
    .freedium-button {
      position: fixed;
      top: 40px;
      right: 40px;
      z-index: 99999;
      padding: 12px 20px;
      background-color: #1a8917;
      color: white;
      border: none;
      border-radius: 25px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: all 0.2s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .freedium-button:hover {
      background-color: #0f730c;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }

    .freedium-button:active {
      transform: translateY(0);
    }
  `
  return style
}

const FreediumButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    const currentUrl = window.location.href
    const freediumUrl = `https://freedium-mirror.cfd/${currentUrl}`
    window.open(freediumUrl, "_blank")
  }

  return (
    <button
      className="freedium-button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      🔓 Read on Freedium
    </button>
  )
}

export default FreediumButton
