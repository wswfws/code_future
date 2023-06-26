import React from "react";
import { useContext } from "react";
import CounterContext from "./count";
import "./head.css";

function Header(props) {
  const count = useContext(CounterContext);
  return (
    <header>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src="/logo-mini.png" alt="logo" />
        <h2> booklist </h2>
      </div>
      <div className="about_us">
        <a href="mailto:wswfws@ya.ru">wswfws@ya.ru</a>
        <a href="https://vk.com/polochcka">мой вк</a>
      </div>
      <div
        className="basket"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img className="basket" src="/basket.svg" alt="busket" />
        <div
          className="counter"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color:"blue",
          }}
        >
          {count.c}
        </div>
      </div>
    </header>
  );
}

export default Header;
