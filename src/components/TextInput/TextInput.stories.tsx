import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextInput } from "./index";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    message: { control: "text" },
    placeholder: { control: "text" },
    className: { control: "text" },
    disabled: { control: "boolean" },
    type: {
      control: "select",
      options: ["default", "success", "error"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputStory: Story = {
  args: {
    label: "주소 입력",
    placeholder: "주소를 입력해주세요.",
    message: "올바른 주소를 입력해주세요.",
  },
};

export const TextInputStoryError: Story = {
  args: {
    label: "주소 입력",
    placeholder: "주소를 입력해주세요.",
    type: "error",
    message: "올바른 주소를 입력해주세요.",
  },
};

export const TextInputNoLabel: Story = {
  args: {
    placeholder: "주소를 입력해주세요.",
    message: "올바른 주소를 입력해주세요.",
  },
};

export const TextInputNoMessage: Story = {
  args: {
    label: "주소 입력",
    placeholder: "주소를 입력해주세요.",
  },
};

export const TextInputPlain: Story = {
  args: {},
};

export const TextInputSuccess: Story = {
  args: {
    label: "주소 입력",
    defaultValue: "한국시 한국동 한국구",
    placeholder: "주소를 입력해주세요.",
    message: "올바른 주소를 입력했습니다!",
    type: "success",
  },
};
