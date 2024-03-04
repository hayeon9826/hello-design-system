import { ReactNode } from "react";
export interface AccordionProps {
    rightIcon?: ReactNode;
    title: string;
    content: string;
    id: string;
}
declare const Accordion: ({ rightIcon, title, content, id }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
