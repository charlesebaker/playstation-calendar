import { twMerge } from "tailwind-merge";

interface ButtonLinkProps {
  to: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
}

export const ButtonLink = ({
  to,
  target = "_blank",
  className = "",
  children,
}: ButtonLinkProps) => {
  return (
    <a
      className={twMerge(
        "text-normal w-fit cursor-pointer px-4 py-2 font-normal text-white",
        className,
      )}
      href={to}
      target={target}
    >
      {children}
    </a>
  );
};
