import React from "react";
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
}

const PostCard: React.FC<PostCardProps> = ({ title, desc, tags }) => {
  return (
    <article className={styles["post-card"]}>
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
