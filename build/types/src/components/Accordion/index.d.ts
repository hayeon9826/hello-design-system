import { ReactNode } from "react";
export interface AccordionProps {
    rightIcon?: ReactNode;
    title: string;
    content: string;
    id: string;
    defaultOpen?: boolean;
}
export declare const Accordion: ({ rightIcon, title, content, id, defaultOpen, }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
