import React, { useState, useContext } from "react";
import ModeContext from "../context/ModeContext";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./main.module.scss";
import NotionService from "../services/notion-service";
import SearchBar from "../components/searchbar";
import ProjectCard from "../components/card/project";
import PostCard from "../components/card/post";

import { Document } from "../@types/schema";

const Home: NextPage = ({
  projectList,
  postList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [posts, setPosts] = useState<Document[]>(postList);
  const [searchResults, setSearchResults] = useState<Document[]>(postList);

  // darkmode context
  const { mode } = useContext(ModeContext);

  // search handler
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      return setSearchResults(posts);
    }

    const result = posts.filter(
      (post: Document) =>
        post.title.includes(e.target.value) ||
        post.title.toLowerCase().includes(e.target.value)
    );
    setSearchResults(result);
  };

  return (
    <>
      <Head>
        <title>김힘찬의 테크노트</title>
        <meta
          name='description'
          content={"프론트엔드 개발자 김힘찬의 테크 블로그 tech blog"}
        />
        <meta
          name={"og:title"}
          title={"og:title"}
          content='늦깍이 개발자 김힘찬의 개발 블로그'
        />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={"프론트엔드 개발자 김힘찬의 테크 블로그 tech blog"}
        />
        <meta
          name={"og:image"}
          title={"og:image"}
          content={"/images/profile/profile-img.jpeg"}
        />
      </Head>
      {/* information section */}
      <section className={styles.info}>
        <Image src='/images/bg/main-bg.jpeg' alt='bg img' fill />
        <div className={styles["info__inner-wrapper"]}>
          <div className={styles["info__profile-container"]}>
            <Link href='/about'>
              <div className={styles["info__profile-img"]}>
                <Image
                  src='/images/profile/2023-me.png'
                  alt='profile img'
                  fill
                />
              </div>
              <div className={styles["info__arrow"]}>
                <Image
                  src='/images/profile/arrow.svg'
                  width={72}
                  height={19}
                  alt='arrow'
                />
              </div>
            </Link>
          </div>

          <div className={styles["info__description"]}>
            <h2>코드로 세상과 소통하는 프로그래머</h2>
            <h1>힘찬&#39;s 테크 이야기</h1>
          </div>
        </div>
      </section>
      {/* search section */}
      <section className={styles["search"]}>
        <SearchBar onChangeHandler={handleSearchChange} />
      </section>
      {/* project list section */}
      <section className={styles.project}>
        <div className={styles["project__card-container"]}>
          {projectList.map((singleProject: Document) => {
            const { title, tags, id, cover, slug } = singleProject;
            return (
              <Link key={id} href='/project/[slug]' as={`/project/${slug}`}>
                <ProjectCard
                  key={id}
                  title={title}
                  tags={tags}
                  cover={cover}
                  isDarkMode={mode}
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* post list section */}
      <section className={styles.post}>
        {searchResults.length ? (
          <div className={styles["post__post-container"]}>
            {searchResults.map((singlePost: Document) => {
              const { title, id, description, tags, slug } = singlePost;
              return (
                <Link key={id} href='/post/[slug]' as={`/post/${slug}`}>
                  <PostCard
                    title={title}
                    desc={description}
                    tags={tags}
                    isDarkMode={mode}
                  />
                </Link>
              );
            })}
          </div>
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();
  const postList = await notionService.getDocuments(
    process.env.NOTION_POST_DATABASE_ID
  );

  const projectList = await notionService.getDocuments(
    process.env.NOTION_PROJECT_DATABASE_ID
  );

  return {
    props: {
      postList,
      projectList,
    },
    revalidate: 10,
  };
};
