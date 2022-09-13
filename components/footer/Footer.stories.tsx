import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./";

export default {
  title: "Component/Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   isDarkmode: true,
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
