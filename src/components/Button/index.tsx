import React, { useMemo } from "react";
import cn from "classnames";
import { ButtonType, ButtonTypeStyle } from "./button.constant";

export interface ButtonProps {
  primary?: boolean;
  type?: ButtonType;
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  primary = false,
  type = ButtonType.PRIMARY_LARGE,
  label,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const ButtonStyle = useMemo(() => {
    if (primary) {
      return ButtonTypeStyle.PRIMARY_LARGE;
    }
    if (type) {
      return ButtonTypeStyle[type];
    }
    return "";
  }, [type, primary, ButtonTypeStyle]);

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(ButtonStyle, className)}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
