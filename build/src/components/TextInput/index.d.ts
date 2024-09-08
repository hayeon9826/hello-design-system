import { InputHTMLAttributes } from "react";
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: "success" | "error" | "default";
    message?: string;
}
export declare function TextInput({ label, message, type, ...props }: TextInputProps): import("react/jsx-runtime").JSX.Element;
export {};
