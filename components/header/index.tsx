import React, { useState } from "react";
import Image from "next/image";
import cx from "classnames";
import ToggleButton from "../button/toggle-button";
import Link from "next/link";
import LogoDefault from "../../public/images/logo/UDD_Logo_default_mode.svg";
import HamburgerDefault from "../../public/images/logo/Hamburger_default_mode.svg";
import LighthouseOn from "../../public/images/button_icon/Lighthouse-on.svg";
import LighthouseOff from "../../public/images/button_icon/Lighthouse-off.svg";
import HeaderWave from "../../public/images/wave/header_wave.svg";
import styles from "./header.module.scss";

interface HeaderProps {
  isDarkmode: boolean;
}

const CATEGORIES = ["About", "Post", "Project", "Search"];

const Header: React.FC<HeaderProps> = ({}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className={cx(styles.header)}>
      <div className={cx(styles.header__logo)}>
        <Link href='/'>
          <a>
            <Image width={30} height={30} src={LogoDefault} alt='Logo' />
          </a>
        </Link>
      </div>

      <ul
        className={cx(styles["header__nav-container"], {
          [styles["header__nav-container--active"]]: toggle,
        })}>
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
        <ToggleButton onImage={LighthouseOn} offImage={LighthouseOff} />
      </div>
    </div>
  );
};

export default Header;
