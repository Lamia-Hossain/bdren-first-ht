"use client";

import DarkLight from "./DarkLight";
import Intro from "./Intro";
import Navbar from "./Navbar";
import introPic from "./figures/Lamia.png";
import logOut from "./icons/log-out-outline.svg";
import profile from "./icons/person-circle-outline.svg";
import React, { useState, useEffect, useRef } from "react";

function Layout() {
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
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const themeCheck = () => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    themeCheck();
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 p-2 rounded-b-lg dark:text-white dark:bg-[#191A19] flex flex-row-reverse gap-x-3 bg-slate-300 w-screen">
        <div ref={menuRef} className="w-fit">
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img className="h-10" src={introPic} alt="Lamia's Photo" />
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>
              Lamia
              <br />
              <span className="text-slate-500">Website Designer</span>
            </h3>
            <ul>
              <DropdownItem img={profile} text={"Profile"} alt="P" />
              <DropdownItem img={logOut} text={"Log Out"} alt="P" />
            </ul>
          </div>
        </div>
        <DarkLight />
        <Navbar />
      </div>

      <Intro />
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

export default Layout;
