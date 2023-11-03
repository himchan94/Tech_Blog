import React from "react";
import cx from "classnames";
import { NextPage } from "next";
import styles from "./ghost.module.scss";

interface PageProps {}

const Page: NextPage = ({}) => {
  return (
    /* cloned from https://codepen.io/RiniSW/pen/wvNGVwN */
    /* thanks for sharing your idea */
    <>
      <div>
        <h1> &nbsp;&nbsp; Happy &nbsp; Halloween </h1>
        <div id={styles["container"]}>
          <div className={styles["ghost"]}>
            <div className={styles["body"]}>
              <div className={styles["face"]}>
                <div className={styles["eyes"]}> </div>
                <div className={styles["dimples"]}> </div>
                <div className={styles["mouth"]}> </div>
              </div>

              <div className={styles["bottom"]}>
                <div className={styles["circle"]}></div>
                <div className={styles["circle"]}></div>
                <div className={styles["circle"]}></div>
                <div className={styles["wave"]}></div>
              </div>
            </div>
            <div className={styles["shadow"]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
