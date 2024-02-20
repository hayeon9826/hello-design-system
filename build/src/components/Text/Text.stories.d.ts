import type { StoryObj } from "@storybook/react";
import { TextType } from "./text.constant";
declare const meta: {
    title: string;
    component: ({ type, label, className }: import("./index").TextProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        label: {
            control: string;
        };
        className: {
            control: string;
        };
        type: {
            control: string;
            options: string[];
            mapping: typeof TextType;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TextStory: Story;
