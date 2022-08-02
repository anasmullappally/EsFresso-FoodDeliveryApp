import React from "react";

function MenuContainer({ link, icon }) {
  return (
    <li>
      <a href={link}>
        <span className="icon">{icon}</span>
      </a>
    </li>
  )
}

export default MenuContainer;
