type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgHome({
  className = '',
  size = '2.5em',
  active = false,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      {active ? (
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.357}
          d="M10.103 19.433v7.508c0 .93.754 1.684 1.684 1.684h3.367a.99.99 0 0 0 1.041-.99v-4.907c0-.926.747-1.678 1.673-1.684l4.787-.03a1.684 1.684 0 0 1 1.695 1.683v5.022c0 .5.406.906.907.906h3.367c.93 0 1.684-.754 1.684-1.684v-7.508c0-.495-.218-.966-.596-1.285l-8.419-7.124a1.684 1.684 0 0 0-2.175 0l-8.42 7.124c-.377.32-.595.79-.595 1.285"
        />
      ) : (
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.357}
          d="M25.257 28.625h3.367c.93 0 1.684-.754 1.684-1.684v-7.508c0-.495-.218-.966-.596-1.285l-8.419-7.124a1.684 1.684 0 0 0-2.175 0l-8.42 7.124c-.377.32-.595.79-.595 1.285v7.508c0 .93.754 1.684 1.683 1.684h3.368"
        />
      )}
    </svg>
  );
}
