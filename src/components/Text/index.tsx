import React, { useMemo } from "react";
import { TextType, TextTypeStyle } from "./text.constant";
import cn from "classnames";

export interface TextProps {
  type?: TextType;
  label: string;
  className?: string;
}

const Text = ({ type = TextType.DESC, label, className }: TextProps) => {
  const TextClassName = useMemo(() => {
    if (type) {
      return TextTypeStyle[type];
    }
    return "";
  }, [type]);

  return <div className={cn(TextClassName, className)}>{label}</div>;
};

export default Text;
