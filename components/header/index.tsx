import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import cx from "classnames";
import ModeContext from "../../context/ModeContext";
import ToggleButton from "../button/toggle-button";
import Link from "next/link";
import LogoDefault from "../../public/images/logo/UDD_Logo_default_mode.svg";
import HamburgerDefault from "../../public/images/logo/Hamburger_default_mode.svg";
import LighthouseOff from "../../public/images/button_icon/Lighthouse-off.svg";
import LighthouseOn from "../../public/images/button_icon/Lighthouse-on.svg";
import HeaderWave from "../../public/images/wave/header_wave.svg";
import styles from "./header.module.scss";

const CATEGORIES = ["About", "Post", "Project", "Playground"];

const Header: React.FC = ({}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { pathname } = useRouter();

  const { mode, handleToggleMode } = useContext(ModeContext);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className={cx(styles.header, { darkmode: mode })}>
      <div className={cx(styles.header__logo)}>
        <Link href='/'>
          <a>
            <Image width={30} height={30} src={LogoDefault} alt='Logo' />
          </a>
        </Link>
      </div>

      <ul
        className={cx(
          styles["header__nav-container"],
          {
            [styles["header__nav-container--active"]]: toggle,
          },
          { darkmode: mode }
        )}
      >
        {CATEGORIES.map((category) => (
          <li key={category}>
            <Link href={`/${category.toLowerCase()}`}>
              <a>{category}</a>
            </Link>
          </li>
        ))}
        <div className={styles["header__wave-container"]}>
          <Image
            src={HeaderWave}
            layout='responsive'
            objectFit='contain'
            alt='header wave'
          />
        </div>
      </ul>

      <div className={cx(styles.header__hamburger)} onClick={handleClick}>
        <Image width={24} height={24} src={HamburgerDefault} alt='Hamburger' />
      </div>
      <div className={styles.header__toggle}>
        <ToggleButton
          onImage={LighthouseOn}
          offImage={LighthouseOff}
          _click={handleToggleMode}
        />
      </div>
    </div>
  );
};

export default Header;
