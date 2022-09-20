import React from "react";
import classNames from "classnames/bind";
import styles from "./post.module.scss";
import Tag from "../../tag";

type Tag = {
  color: string;
  id: string;
  name: string;
};

interface PostCardProps {
  title: string;
  desc: string;
  tags: Tag[];
  isDarkMode: boolean;
}
const cx = classNames.bind(styles);

const PostCard: React.FC<PostCardProps> = ({
  title,
  desc,
  tags,
  isDarkMode,
}) => {
  return (
    <article className={cx(styles["post-card"], { darkmode: isDarkMode })}>
      <div className={styles["post-card__tag-container"]}>
        {tags.map((tag) => {
          const { name, color, id } = tag;

          return <Tag key={id} name={name} color={color} />;
        })}
      </div>
      <h3 className={styles["post-card__title"]}>{title}</h3>
      <div className={styles["post-card__desc"]}>{desc}</div>
      <div className={styles["post-card__border"]}></div>
    </article>
  );
};

export default PostCard;
