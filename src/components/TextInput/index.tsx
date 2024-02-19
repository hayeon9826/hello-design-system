import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: "success" | "error" | "default";
  message?: string;
}

export default function TextInput({
  label,
  message,
  type = "default",
  ...props
}: TextInputProps) {
  return (
    <div>
      {!!label && (
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative mt-2 rounded-md">
        <input
          {...props}
          className={cn(
            "block w-full text-sm rounded-md border py-1.5 px-2.5 text-gray-900 outline-none placeholder:text-gray-400 placeholder:text-sm  focus:border-rose-300 sm:text-sm sm:leading-6",
            {
              "border-rose-500": type === "error",
            }
          )}
        />
      </div>
      {message && (
        <div
          className={cn(
            "mt-2 text-xs text-gray-500",
            {
              "!text-green-600": type === "success",
            },
            {
              "!text-rose-700": type === "error",
            }
          )}
        >
          {message}
        </div>
      )}
    </div>
  );
}
