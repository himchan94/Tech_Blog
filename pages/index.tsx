import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./main.module.scss";
import ProjectCard from "../components/card/project";
import NotionService from "../services/notion-service";
import PostCard from "../components/card/post";

const Home: NextPage = ({
  projects,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts);
  console.log(projects);

  return (
    <>
      {/* information section */}
      <section className={styles.info}>
        <Image
          src='/images/bg/main-bg.jpeg'
          alt='bg img'
          layout='fill'
          objectFit='cover'
        />
        <div className={styles["info__inner-wrapper"]}>
          <div className={styles["info__profile-container"]}>
            <Link href='/about'>
              <a>
                <div className={styles["info__profile-img"]}>
                  <Image
                    src='/images/profile/profile-img.jpeg'
                    alt='profile img'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
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
              </a>
            </Link>
          </div>

          <div className={styles["info__description"]}>
            <h2>코드로 세상과 소통하는 프로그래머</h2>
            <h1>힘찬&#39;s 테크 이야기</h1>
          </div>
        </div>
      </section>

      {/* project list section */}
      <section className={styles.project}>
        <div className={styles["project__card-container"]}>
          {projects.map((post: any) => {
            const { title, tags, id, cover } = post;
            return (
              <Link key={id} href='/project/[id]' as={`/project/${id}`}>
                <a>
                  <ProjectCard
                    key={id}
                    title={title}
                    tags={tags}
                    cover={cover.url}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </section>

      {/* post list section */}
      <section className={styles.post}>
        <div className={styles["post__post-container"]}>
          {posts.map((post: any) => {
            console.log(post);
            const { title, id, description, tags } = post;
            return (
              <Link key={id} href='/post/[id]' as={`/post/${id}`}>
                <a>
                  <PostCard title={title} desc={description} tags={tags} />
                </a>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();

  const projects = await notionService.getPublishedProjects();

  return {
    props: {
      posts,
      projects,
    },
  };
};
