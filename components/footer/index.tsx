import React from "react";
import styles from "./footer.module.scss";

interface FooterProps {
  isDarkmode: boolean;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <span>
        © UDD All rights reserved <br /> Powered by
      </span>
    </footer>
  );
};

export default Footer;
