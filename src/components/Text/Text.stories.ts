import type { Meta, StoryObj } from "@storybook/react";
import Text from "./index";
import { TextType } from "./text.constant";

const meta = {
  title: "Foundation/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    className: { control: "text" },
    type: {
      control: "select",
      options: Object.keys(TextType),
      mapping: TextType,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextStory: Story = {
  args: {
    label:
      "hello-design-systemdms Next.js 14를 이용한 tailwind 디자인 시스템 입니다. 가나다라마바사 1234567890 ~!@#$%^&*()_",
  },
};
