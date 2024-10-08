import { TextType } from "./text.constant";
export interface TextProps {
    type?: TextType;
    label: string;
    className?: string;
}
export declare const Text: ({ type, label, className }: TextProps) => import("react/jsx-runtime").JSX.Element;
