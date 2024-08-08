interface Props {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const Email = ({ height = 24, width = 24, fill = "#2C3132" }: Props) => {
  return (
    <div style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 20C2.3125 20 1.72396 19.7552 1.23438 19.2656C0.744792 18.776 0.5 18.1875 0.5 17.5V2.5C0.5 1.8125 0.744792 1.22396 1.23438 0.734375C1.72396 0.244792 2.3125 0 3 0H23C23.6875 0 24.276 0.244792 24.7656 0.734375C25.2552 1.22396 25.5 1.8125 25.5 2.5V17.5C25.5 18.1875 25.2552 18.776 24.7656 19.2656C24.276 19.7552 23.6875 20 23 20H3ZM13 11.25L3 5V17.5H23V5L13 11.25ZM13 8.75L23 2.5H3L13 8.75ZM3 5V2.5V17.5V5Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
