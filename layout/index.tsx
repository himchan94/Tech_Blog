import React, { useContext } from "react";
import cx from "classnames";
import ModeContext from "../context/ModeContext";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { mode } = useContext(ModeContext);

  return (
    <div className={cx(styles.layout, { darkmode: mode })}>{children}</div>
  );
};

export default Layout;
