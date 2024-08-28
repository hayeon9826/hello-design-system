import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./index";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    showArrows: { control: "boolean" },
    autoplay: { control: "boolean" },
    autoplayInterval: { control: "number" },
    imageUrls: {
      control: "array",
      description: "이미지 URL 배열을 입력하여 슬라이드를 설정합니다.",
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselStory: Story = {
  args: {
    showArrows: true,
    imageUrls: [
      "https://images.unsplash.com/photo-1503455637927-730bce8583c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1668681919287-7367677cdc4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1623150502742-6a849aa94be4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1623141629340-4686d65d60bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
};
