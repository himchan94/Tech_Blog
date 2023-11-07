import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { NextPage } from "next";
import styles from "./monitor.module.scss";

interface PageProps {}

// FIXME: type refactor need
const Page: NextPage = ({}) => {
  let panel: HTMLDivElement;
  let start: number;
  let frames = 0;

  const create = () => {
    const div = document.createElement("div");

    div.style.position = "fixed";
    div.style.left = "50%";
    div.style.top = "50%";
    div.style.width = "120px";
    div.style.height = "120px";
    div.style.backgroundColor = "black";
    div.style.color = "white";
    div.style.fontSize = "36px";

    return div;
  };

  const tick = () => {
    frames++;
    const now = window.performance.now();
    if (now >= start + 1000) {
      panel.innerText = frames.toString();
      frames = 0;
      start = now;
    }
    window.requestAnimationFrame(tick);
  };

  const init = (parent = document.body) => {
    panel = create();

    window.requestAnimationFrame(() => {
      start = window.performance.now();
      parent.appendChild(panel);
      tick();
    });
  };

  useEffect(() => {
    init();
  }, []);

  return <div id={styles["container"]}></div>;
};

export default Page;
