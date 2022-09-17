import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import styles from "./about.module.scss";
import Wave from "../../public/images/wave/about-wave.svg";
import Tag from "../../components/tag";

interface AboutProps {}

const About: NextPage = ({}) => {
  return (
    <>
      {/* top section */}
      <section className={styles["head-section"]}>
        <Image
          src='/images/bg/about-bg.jpeg'
          alt='bg img'
          layout='fill'
          objectFit='cover'
        />
        <div className={styles["head-section__profile-image"]}>
          <Image
            src='/images/profile/profile-img.jpeg'
            alt='profile img'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
      </section>

      {/* info section */}
      <section className={styles["info-section"]}>
        <h3>늦깍이 개발자</h3>
        <h2>김 힘 찬</h2>
        <div className={styles["info-section__icon-container"]}>
          <a
            href='https://github.com/himchan94'
            target='_blank'
            rel='noreferrer'>
            <Image
              src='/images/icon/github-fill.svg'
              width={20}
              height={20}
              alt='github icon'
            />
          </a>
          {/* <a
            href='https://www.linkedin.com/in/%ED%9E%98%EC%B0%AC-%EA%B9%80-14a63b211/'
            target='_blank'
            rel='noreferrer'>
            <Image
              src='/images/icon/linkedin-fill.svg'
              width={20}
              height={20}
              alt='linkedin icon'
            />
          </a> */}
        </div>
      </section>

      {/* detail section */}
      <section className={styles["detail-section"]}>
        <article className={styles["detail-section__article"]}>
          <Image
            src={Wave}
            layout='responsive'
            objectFit='contain'
            alt='header wave'
          />
          <h3 className={styles["article__title"]}>Hello World!</h3>
          <div className={styles["article__desc"]}>
            사람들의 삶을 행복하게 하는 프로덕트를 만들고 싶은 프론트엔드 개발자
            &quot;
            <span className={styles["bold"]}>김힘찬</span>&quot; 입니다.
          </div>
        </article>
        <article className={styles["detail-section__article"]}>
          <Image
            src={Wave}
            layout='responsive'
            objectFit='contain'
            alt='header wave'
          />
          <h3 className={styles["article__title"]}>Motto</h3>
          <div className={styles["article__desc"]}>
            &quot;잔잔한 파도는 결코 유능한 뱃사람을 만들 수 없다.&quot;
          </div>
        </article>
        <article className={styles["detail-section__article"]}>
          <Image
            src={Wave}
            layout='responsive'
            objectFit='contain'
            alt='header wave'
          />
          <h3 className={styles["article__title"]}>Skills</h3>
          <div className={styles["tag-wrapper"]}>
            <Tag name='HTML' color='blue' />
            <Tag name='CSS' color='green' />
            <Tag name='Sass' color='orange' />
            <Tag name='React' color='purple' />
            <Tag name='Next.js' color='purple' />
            <Tag name='Styled-component' color='lavender' />
            <Tag name='JavaScript' color='yellow' />
            <Tag name='Figma' color='brown' />
            <Tag name='VSCode' color='red' />
            <Tag name='Slack' color='maroon' />
            <Tag name='Notion' color='cream' />
          </div>
        </article>
        <article className={styles["detail-section__article"]}>
          <Image
            src={Wave}
            layout='responsive'
            objectFit='contain'
            alt='header wave'
          />
          <h3 className={styles["article__title"]}>Interested In</h3>
          <div className={styles["tag-wrapper"]}>
            <Tag name='SEO' color='tan' />
            <Tag name='AWS' color='teal' />
            <Tag name='TypeScript' color='navy' />
            <Tag name='C++' color='coral' />
            <Tag name='Algorithm' color='gold' />
            <Tag name='Jira' color='cyan' />
            <Tag name='Vue' color='silver' />
            <Tag name='Design Pattern' color='rust' />
            <Tag name='MongDB' color='silver' />
            <Tag name='Express.js' color='lightgreen' />
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
