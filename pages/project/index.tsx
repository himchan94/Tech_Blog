import React from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import NotionService from "../../services/notion-service";
import styles from "./project.module.scss";
import Wave from "../../public/images/wave/category-wave.svg";
import ProjectCard from "../../components/card/project";

const ProjectPage: NextPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {/* upper section */}
      <section className={styles["page-title-section"]}>
        <div className={styles["title-contianer"]}>
          <Image
            src={Wave}
            layout='responsive'
            objectFit='contain'
            alt='header wave'
          />
          <h3 className={styles["title"]}>Project</h3>
        </div>
      </section>

      {/* post section */}
      <section className={styles["projects-section"]}>
        <div className={styles["projects-section__inner-container"]}>
          {projects.map((project: any) => {
            const { title, id, cover, tags, slug } = project;
            return (
              <Link key={id} href='/project/[slug]' as={`/project/${slug}`}>
                <a>
                  <ProjectCard title={title} cover={cover.url} tags={tags} />
                </a>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();
  const projects = await notionService.getDocuments(
    process.env.NOTION_PROJECT_DATABASE_ID
  );

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};
