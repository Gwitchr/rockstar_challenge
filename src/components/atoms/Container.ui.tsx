import { ReactNode } from "react";

interface IContainerProps {
  children?: ReactNode;
  className?: string;
  fluid?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

function Container({
  children,
  className,
  fluid = false,
  tag,
}: IContainerProps): JSX.Element {
  const Tag = tag || "div";
  return (
    <Tag
      className={`${className} ${
        fluid ? "max-w-full" : "max-w-7xl px-2 py-3 md:px-6 lg:px-8"
      } mx-auto container`}
    >
      {children}
    </Tag>
  );
}

export default Container;
