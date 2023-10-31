import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { NextPage } from "next";
import styles from "./worm.module.scss";
import useWormGameHander from "./hooks/useWormGameHander";

const WormPage: NextPage = ({}) => {
  const { gameBoardRef, scoreTextRef, resetButtonRef } = useWormGameHander();

  return (
    <div id={styles["container"]}>
      <div id={styles["gameContainer"]}>
        <canvas
          id={styles["gameBoard"]}
          width='500'
          height='500'
          ref={gameBoardRef}></canvas>
        <div id={styles["scoreText"]} ref={scoreTextRef}>
          0
        </div>
        <button id={styles["resetBtn"]} ref={resetButtonRef}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default WormPage;
