import { ReactNode } from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const Hamburguer = ({ height = 24, width = 24, fill = "#2C3132" }: Props) => {
  return (
    <div style={{ width, height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"inheirit"}
        height={"inheirit"}
        viewBox="0 -960 960 960"
        fill={fill}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
};
