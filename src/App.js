import proIco from "./figures/LamiaHossain.jpg";
import "./App.css";
import logOut from "./icons/log-out-outline.svg";
import profile from "./icons/person-circle-outline.svg";

import React, { useState, useEffect, useRef } from "react";

function App() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.addEventListener("mousedown", handler);
    };
  });

  return (
    <div class="App">
      <header class="App-header">
        <div class="menu-container" ref={menuRef}>
          <div
            class="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={proIco} class="proIco" alt="Lamia" />
          </div>

          <div class={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>
              The Kite
              <br />
              <span>Website Designer</span>
            </h3>
            <ul>
              <DropdownItem img={profile} text={"Profile"} alt="P" />
              <DropdownItem img={logOut} text={"Log Out"} alt="P" />
            </ul>
          </div>
        </div>

        <div>
          <p className="text-2xl">Hello</p>
        </div>
      </header>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li class="dropDownItem">
      <img src={props.img} alt="P" />
      <a>{props.text}</a>
    </li>
  );
}

export default App;
