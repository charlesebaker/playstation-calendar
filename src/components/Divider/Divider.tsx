import { twMerge } from "tailwind-merge";

interface DividerProps {
  className?: string;
  variant?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

export const Divider = ({ className, variant = "base" }: DividerProps) => {
  const heightWidthClasses = {
    xs: "border-b-[1px]",
    sm: "border-b-[2px]",
    base: "border-b-[3px]",
    lg: "border-b-[4px]",
    xl: "border-b-[5px]",
    "2xl": "border-b-[6px]",
    "3xl": "border-b-[7px]",
    "4xl": "border-b-[8px]",
    "5xl": "border-b-[9px]",
    "6xl": "border-b-[10px]",
    "7xl": "border-b-[11px]",
    "8xl": "border-b-[12px]",
    "9xl": "border-b-[13px]",
  }[variant];

  return <div className={twMerge("border-gray-300", className, heightWidthClasses)}></div>;
};
