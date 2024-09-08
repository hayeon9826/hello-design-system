import React, { ReactNode, useState } from "react";
import cn from "classnames";
import { FiPlus } from "react-icons/fi";

export interface AccordionProps {
  rightIcon?: ReactNode;
  title: string;
  content: string;
  id: string;
  defaultOpen?: boolean;
}

export const Accordion = ({
  rightIcon,
  title,
  content,
  id,
  defaultOpen,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen ?? false);

  return (
    <div className="flex flex-wrap justify-start overflow-hidden text-gray-800 border-b border-gray-100 bg-white">
      <div
        className="flex gap-2 justify-between w-full cursor-pointer"
        onClick={() => setIsOpen((val) => !val)}
      >
        <label className="grow px-4 py-4 font-medium" htmlFor={id}>
          {title}
        </label>
        {rightIcon ?? (
          <FiPlus
            className={cn(
              "mx-4 my-3 h-6 w-6 transition-transform duration-300 transform",
              {
                "rotate-45": isOpen,
              }
            )}
          />
        )}
      </div>
      {isOpen && (
        <div className="scale-y-100 p-4 bg-gray-100 opacity-100 text-sm">
          {content}
        </div>
      )}
    </div>
  );
};
