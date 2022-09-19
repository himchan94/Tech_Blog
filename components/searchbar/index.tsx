import React from "react";
import Image from "next/image";
import SearchIcon from "../../public/images/search/search.svg";
import styles from "./searchbar.module.scss";

import NotionService from "../../services/notion-service";
import { Document } from "../../@types/schema";

interface SearchBarProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeHandler }) => {
  const handleSubmit = (e: React.SyntheticEvent): void => e.preventDefault();

  return (
    <form className={styles["search-bar"]} onSubmit={handleSubmit}>
      <input
        className={styles["search-bar__input"]}
        type='text'
        onChange={onChangeHandler}
      />
      <button className={styles["search-bar__button"]}>
        <Image src={SearchIcon} width={24} height={24} alt='search' />
      </button>
    </form>
  );
};

export default SearchBar;
