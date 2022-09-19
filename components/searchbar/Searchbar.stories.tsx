import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "./";

export default {
  title: "Component/SearchBar",
  component: SearchBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
