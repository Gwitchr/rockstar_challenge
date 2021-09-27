import { useMemo, ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color: "primary" | "outline" | "secondary";
}

function Button({
  children,
  className,
  color,
  onClick,
  ...rest
}: IButtonProps): JSX.Element {
  const colorStyles: string = useMemo(() => {
    switch (color) {
      case "primary":
        return "text-white bg-accent hover:bg-contrast shadow-md";
      case "outline":
        return "text-white bg-transparent  hover:shadow-md";
      case "secondary":
        return "text-accent bg-white hover:bg-gray-200 hover:shadow-md";
      default:
        return "text-white bg-accent hover:bg-contrast shadow-md";
    }
  }, [color]);
  return (
    <button
      onClick={onClick}
      className={`${className} ${colorStyles} py-2 px-5 focus:ring-accent-dark focus:outline-none   font-light rounded  focus:ring-2 focus:ring-opacity-75`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
