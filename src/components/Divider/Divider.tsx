interface DividerProps {
  height?: number;
}

export const Divider = ({ height = 4 }: DividerProps) => {
  return <div className={`h-[${height}px] border-b border-gray-300`}></div>;
};
