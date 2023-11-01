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
import styles from "./playground.module.scss";
import Wave from "../../public/images/wave/category-wave.svg";
import ProjectCard from "../../components/card/project";

const projects = [
  {
    title: "planets",
    id: "planets-10/23",
    tags: [
      { name: "우주", color: "green" },
      { name: "cloned", color: "purple" },
    ],
    slug: "planets",
    alternativeText: "우주다",
  },
  {
    title: "worm",
    id: "worm-10/29",
    tags: [
      { name: "worm", color: "green" },
      { name: "cloned", color: "purple" },
    ],
    slug: "worm",
    alternativeText: "지렁이다",
  },
  {
    title: "generative-art1",
    id: "worm-11/2",
    tags: [{ name: "p5.js", color: "green" }],
    slug: "art1",
    alternativeText: "p5.js",
  },
];

const ProjectPage: NextPage = () => {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <Head>
        <title>Playground</title>
        <meta name='description' content={"개발자 김힘찬의 놀이터"} />
        <meta name={"og:title"} title={"og:title"} content='Project' />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={"개발자 김힘찬의 실습 파ㄹ"}
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
          <Image
            src={Wave}
            layout='responsive'
            objectFit='contain'
            alt='header wave'
          />
          <h3 className={styles["title"]}>Playground</h3>
        </div>
      </section>

      {/* post section */}
      <section className={styles["playground-section"]}>
        <div className={styles["playground-section__inner-container"]}>
          {projects.map((project: any) => {
            const { title, id, cover, tags, slug, ...rest } = project;

            return (
              <Link
                key={id}
                href='/playground/[slug]'
                as={`/playground/${slug}`}>
                <ProjectCard
                  title={title}
                  cover={cover}
                  tags={tags}
                  isDarkMode={mode}
                  {...rest}
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
