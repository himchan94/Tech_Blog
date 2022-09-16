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
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d58942dc-5191-4883-b15e-edab9e708715/coco1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220916T101901Z&X-Amz-Expires=3600&X-Amz-Signature=0e02a438048c447220f9d01198e3be1fd0113b2ccb58267b6eebaa253c585ac0&X-Amz-SignedHeaders=host&x-id=GetObject",
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
