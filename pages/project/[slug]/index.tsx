import React from "react";
import Image from "next/image";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import Tag from "../../../components/tag";
import NotionService from "../../../services/notion-service";
import Wave from "../../../public/images/wave/category-wave.svg";
import styles from "./projectdetail.module.scss";

import { Document } from "../../../@types/schema";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const ProjectDetail: InferGetStaticPropsType<typeof getStaticProps> = ({
  information,
  markdown,
}: {
  information: Document;
  markdown: string;
}) => {
  return (
    <>
      <Head>
        <title>{information.title}</title>
        <meta name='description' content={information.description} />
        <meta
          name={"og:title"}
          title={"og:title"}
          content={information.title}
        />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={information.description}
        />
        <meta
          name={"og:image"}
          title={"og:image"}
          content={information.cover}
        />
      </Head>
      <div className={styles["page-wrapper"]}>
        <section className={styles["page-header-section"]}>
          <div className={styles["header-contianer"]}>
            <Image
              src={Wave}
              layout='responsive'
              objectFit='contain'
              alt='header wave'
            />
            <h3 className={styles["page-title"]}>Post</h3>
          </div>
        </section>
        <h1 className={styles.title}>{information.title}</h1>
        <div className={styles.time}>
          {dayjs(information.date).format("YYYY-MM-DD A hh/mm ")}
        </div>
        <div className={styles["tag-container"]}>
          {information.tags.map((tag) => {
            const { name, color, id } = tag;

            return <Tag key={id} name={name} color={color} />;
          })}
        </div>
        <section className='nontion-container'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}>
            {markdown}
          </ReactMarkdown>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  // @ts-ignore
  const document = await notionService.getDocumentDeatail(
    process.env.NOTION_PROJECT_DATABASE_ID,
    context.params?.slug
  );

  if (!document) {
    throw "";
  }

  const { information, markdown } = document;

  return {
    props: {
      markdown,
      information,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const notionService = new NotionService();

  const projects = await notionService.getDocuments(
    process.env.NOTION_PROJECT_DATABASE_ID
  );

  // Because we are generating static paths, you will have to redeploy your site whenever
  // you make a change in Notion.
  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}
