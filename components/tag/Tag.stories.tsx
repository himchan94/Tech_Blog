import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "./";

export default {
  title: "Component/Tag",
  component: Tag,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "React",
  color: "grey",
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
