import React, { useContext } from "react";
import Head from "next/head";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import ModeContext from "../../context/ModeContext";
import NotionService from "../../services/notion-service";
import styles from "./post.module.scss";
import Wave from "../../public/images/wave/category-wave.svg";
import PostCard from "../../components/card/post";

const PostPage: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <Head>
        <title>Post</title>
        <meta name='description' content={"개발자 김힘찬의 포스팅"} />
        <meta name={"og:title"} title={"og:title"} content='Post' />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={"개발자 김힘찬의 포스팅"}
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
          <h3 className={styles["title"]}>Post</h3>
        </div>
      </section>

      {/* post section */}
      <section className={styles["posts-section"]}>
        {posts.map((post: any) => {
          const { title, id, description, tags, slug } = post;
          return (
            <Link key={id} href='/post/[slug]' as={`/post/${slug}`}>
              <a>
                <PostCard
                  title={title}
                  desc={description}
                  tags={tags}
                  isDarkMode={mode}
                />
              </a>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();
  const posts = await notionService.getDocuments(
    process.env.NOTION_POST_DATABASE_ID
  );

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
