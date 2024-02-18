import { ButtonType } from "./button.constant";
interface ButtonProps {
    primary?: boolean;
    type?: ButtonType;
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}
declare const Button: ({ primary, type, label, className, disabled, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
