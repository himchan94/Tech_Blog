import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./project.module.scss";
import Tag from "../../tag";

type Tag = {
  color: string;
  id: string;
  name: string;
};

interface ProjectCardProps {
  title: string;
  tags: Tag[];
  cover: string;
  isDarkMode: boolean;
  alternativeText?: string;
}

const cx = classNames.bind(styles);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tags,
  cover,
  isDarkMode,
  alternativeText,
}) => {
  return (
    <article className={cx("project-card", { darkmode: isDarkMode })}>
      <div className={styles["project-card__img"]}>
        {cover ? (
          <Image
            src={cover}
            layout='fill'
            alt='project image'
            objectFit='cover'
          />
        ) : (
          <div className={styles["project-card__alternative-text"]}>
            {alternativeText}
          </div>
        )}
      </div>
      <div className={styles["project-card__tag-container"]}>
        {tags.map((tag) => {
          const { name, color, id } = tag;

          return <Tag key={id} name={name} color={color} />;
        })}
      </div>
      <h3 className={styles["project-card__title"]}>{title}</h3>
    </article>
  );
};

export default ProjectCard;
