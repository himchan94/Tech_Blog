import React, { useContext } from "react";
import cx from "classnames";
import ModeContext from "../../context/ModeContext";

import styles from "./footer.module.scss";

const Footer: React.FC = ({}) => {
  const { mode } = useContext(ModeContext);

  return (
    <footer className={cx(styles.footer, { darkmode: mode })}>
      <span>
        © UDD All rights reserved <br /> Powered by
      </span>
    </footer>
  );
};

export default Footer;
