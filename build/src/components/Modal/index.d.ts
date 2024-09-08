import React from "react";
interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    title?: string;
    children: React.ReactNode;
}
export declare function Modal({ isOpen, closeModal, title, children }: ModalProps): import("react/jsx-runtime").JSX.Element;
export {};
