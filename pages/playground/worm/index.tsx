import React from "react";
import cx from "classnames";
import { NextPage } from "next";
import styles from "./worm.module.scss";

interface PlanetPageProps {}

const WormPage: NextPage = ({}) => {
  return (
    <div id={styles["container"]}>
      <div id={styles["gameContainer"]}>
        <canvas id={styles["gameBoard"]} width='500' height='500'></canvas>
        <div id={styles["scoreText"]}>0</div>
        <button id={styles["resetBtn"]}>Reset</button>
      </div>
    </div>
  );
};

export default WormPage;
