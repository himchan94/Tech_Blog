interface Project {
  title: string;
  id: string;
  tags: { name: string; color: string }[];
  slug: string;
  alternativeText: string;
}

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
  // {
  //   title: "generative-art1",
  //   id: "art1-11/2",
  //   tags: [{ name: "p5.js", color: "green" }],
  //   slug: "art1",
  //   alternativeText: "p5.js",
  // },
  {
    title: "유령이다",
    id: "halloween-11/3",
    tags: [{ name: "css", color: "green" }],
    slug: "ghost",
    alternativeText: "css",
  },
];

export const getProjects = (): Project[] => {
  return projects;
};
