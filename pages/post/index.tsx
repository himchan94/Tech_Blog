import React from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import NotionService from "../../services/notion-service";
import styles from "./post.module.scss";
import Wave from "../../public/images/wave/category-wave.svg";
import PostCard from "../../components/card/post";

const PostPage: NextPage = ({
  posts,
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
                <PostCard title={title} desc={description} tags={tags} />
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
  };
};
