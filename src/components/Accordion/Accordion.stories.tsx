import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./index";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    id: { control: "text" },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionStory: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    content:
      " Cras id pharetra leo. Phasellus nec pretium est. Duis congue quam et rhoncus semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis viverra sit amet nunc non congue. Maecenas sagittis tortor sem, eu volutpat ante volutpat sit amet. Curabitur ac nulla eu tortor viverra euismod. Cras nisl tortor, volutpat non porta non, porta ultrices mi. ",
    id: "test",
  },
};
