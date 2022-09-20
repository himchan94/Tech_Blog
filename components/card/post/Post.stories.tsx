import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostCard from "./";

export default {
  title: "Component/PostCard",
  component: PostCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "테스트 포스트",
  desc: "JS를 시작하고 오픈그래프에 대해 처음 알았다. 플랫폼을 쓸 때는 이미지 삽입만 하면 됐었는데 직접 이미지 등을 설정해 보니 아 이렇게 ...",
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
  isDarkMode: false,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
