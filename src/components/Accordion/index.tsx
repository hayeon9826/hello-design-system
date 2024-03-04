import React, { ReactNode } from "react";

export interface AccordionProps {
  rightIcon?: ReactNode;
  title: string;
  content: string;
  id: string;
}

const Accordion = ({ rightIcon, title, content, id }: AccordionProps) => {
  return (
    <div className="flex flex-wrap justify-start overflow-hidden text-gray-800 border-b border-gray-500">
      <label className="grow px-4 py-3 font-medium" htmlFor={id}>
        {title}
      </label>
      <input
        className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-gray-700 opacity-0"
        type="checkbox"
        name={id}
        id={id}
      />
      {rightIcon ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-500 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      )}
      <div className="-transparent absolute -translate-y-full scale-25 scale-y-0 px-4 py-3 opacity-0 transition-all duration-500 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-gray-50 peer-checked:opacity-100 text-sm">
        {content}
      </div>
    </div>
  );
};

export default Accordion;
