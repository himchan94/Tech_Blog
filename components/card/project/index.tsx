import React from "react";
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, cover }) => {
  return (
    <article className={styles["project-card"]}>
      <div className={styles["project-card__img"]}>
        <Image
          src={cover}
          layout='fill'
          alt='project image'
          objectFit='cover'
        />
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
