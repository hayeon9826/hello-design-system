import React, { ReactNode } from "react";

export function GridLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 mt-16 max-w-7xl mx-auto px-4">
      {children}
    </div>
  );
}

export function Loader({
  className,
  count = 3,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div className={`flex gap-3 justify-center mt-10 ${className}`}>
      {[...Array(count)].map((e, i) => (
        <div
          className="w-1 h-1 animate-ping rounded-full bg-gray-600"
          key={i}
        />
      ))}
    </div>
  );
}

export function GridLoader({
  className,
  count = 12,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <GridLayout>
      {[...Array(count)].map((e, i) => (
        <div
          key={i}
          className={`rounded-md w-full h-80 md:h-56 object-fit bg-gray-200 animate-pulse ${className}`}
        />
      ))}
    </GridLayout>
  );
}

export function ListLoader({
  className,
  count = 8,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}>
      {[...Array(count)].map((e, i) => (
        <div
          key={i}
          className="rounded-md w-full h-20 md:h-16 object-fit bg-gray-200 animate-pulse"
        />
      ))}
    </div>
  );
}

export function FullPageLoader() {
  return (
    <div className="fixed w-full top-0 inset-x-0 h-screen flex flex-col justify-center bg-black/60 z-50">
      <div className="animate-spin w-10 h-10 text-rose-400 rounded-full border-[4px] m-auto border-t-transparent border-current" />
    </div>
  );
}

export function ColorLoader({
  className,
  count = 3,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center z-50">
      <div className={`flex gap-5 items-center justify-center ${className}`}>
        {[...Array(count)].map((e, i) => (
          <div
            className="w-2 h-2 animate-ping rounded-full bg-rose-600"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
