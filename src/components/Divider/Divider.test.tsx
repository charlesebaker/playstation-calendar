import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Divider } from "./Divider";

describe("Divider Component", () => {
  it("renders with default variant and without custom className", () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toHaveClass("border-gray-300 border-b-[3px]");
  });

  it("renders with custom className", () => {
    const customClass = "mt-4";
    const { container } = render(<Divider className={customClass} />);
    expect(container.firstChild).toHaveClass(`border-gray-300 ${customClass} border-b-[3px]`);
  });

  const variants = {
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
  };

  (Object.keys(variants) as (keyof typeof variants)[]).forEach((variant) => {
    it(`renders with variant ${variant}`, () => {
      const { container } = render(<Divider variant={variant} />);
      expect(container.firstChild).toHaveClass(`border-gray-300 ${variants[variant]}`);
    });
  });
});
