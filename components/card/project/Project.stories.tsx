import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProjectCard from "./";

export default {
  title: "Component/ProjectCard",
  component: ProjectCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <ProjectCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "테스트 프로젝트",
  cover:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/440px-Golde33443.jpg",
  tags: [
    {
      id: "c6afb9f1-4440-4e5f-a8ba-df4a1617770a",
      name: "javascript",
      color: "default",
    },
    {
      id: "0b766eb2-acdc-4466-aa76-520378721c75",
      name: "react",
      color: "brown",
    },
  ],
};
// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
