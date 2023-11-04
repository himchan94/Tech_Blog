import React, { useContext } from "react";
import {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ModeContext from "../../context/ModeContext";
import NotionService from "../../services/notion-service";
import styles from "./project.module.scss";
import Wave from "../../public/images/wave/category-wave.svg";
import ProjectCard from "../../components/card/project";

const ProjectPage: NextPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <Head>
        <title>Project</title>
        <meta name='description' content={"개발자 김힘찬의 프로젝트"} />
        <meta name={"og:title"} title={"og:title"} content='Project' />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={"개발자 김힘찬의 프로젝트"}
        />
        <meta
          name={"og:image"}
          title={"og:image"}
          content={"/images/profile/profile-img.jpeg"}
        />
      </Head>
      {/* upper section */}
      <section className={styles["page-title-section"]}>
        <div className={styles["title-contianer"]}>
          <Image className={styles["wave"]} src={Wave} alt='header wave' />
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
                <ProjectCard
                  title={title}
                  cover={cover}
                  tags={tags}
                  isDarkMode={mode}
                />
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
