import React from "react";
import styles from "./tag.module.scss";

interface TagProps {
  name: string;
  color: string;
}

const Tag: React.FC<TagProps> = ({ name, color }) => {
  return (
    <div className={styles.tag} style={{ backgroundColor: `${color}` }}>
      <span>#{name}</span>
    </div>
  );
};

export default Tag;
