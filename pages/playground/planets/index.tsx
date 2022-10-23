import React from "react";
import cx from "classnames";
import { NextPage } from "next";
import styles from "./planet.module.scss";

interface PlanetPageProps {}

const PlanetPage: NextPage = ({}) => {
  return (
    /* cloned from https://codepen.io/everdimension/pen/DwREaP */
    /* thanks for sharing your idea */

    <div className={styles.universe}>
      <div className={styles["solar-system"]}>
        <div id={styles.sun}></div>

        <div className={cx(styles.orbit, styles["mercury-orbit"])}></div>
        <div className={styles["mercury-spin"]}>
          <div id={styles["mercury"]}></div>
        </div>

        <div className={cx(styles.orbit, styles["venus-orbit"])}></div>
        <div className={styles["venus-spin"]}>
          <div id={styles["venus"]}></div>
        </div>

        <div className={cx(styles.orbit, styles["earth-orbit"])}></div>
        <div className={styles["earth-spin"]}>
          <div className={cx(styles.orbit, styles["moon-orbit"])}></div>
          <div className={styles["moon-spin"]}>
            <div id={styles["moon"]}></div>
          </div>

          <img
            id={styles["earth"]}
            src='https://raw.githubusercontent.com/everdimension-personal/codepen-assets/master/earth_small_150.jpg'
            alt='earth image'
          />
        </div>

        <div className={cx(styles.orbit, styles["mars-orbit"])}></div>
        <div className={styles["mars-spin"]}>
          <div id={styles["mars"]}></div>
        </div>
      </div>
      {/* <div className={styles.sun}></div>

      <div className={styles["planets-container"]}>
        <div className={styles.route}>
          <div
            className={cx(
              styles["planet-container"],
              styles["first-planet-container"]
            )}
          >
            <div className={cx(styles.planet, styles.first)}></div>
          </div>
        </div>

        <div className={styles.route}>
          <div
            className={cx(
              styles["planet-container"],
              styles["second-planet-container"]
            )}
          >
            <div className={cx(styles.planet, styles.second)}></div>
          </div>
        </div>

        <div className={styles.route}>
          <div
            className={cx(
              styles["planet-container"],
              styles["thrid-planet-container"]
            )}
          >
            <div className={cx(styles.planet, styles.third)}></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PlanetPage;
