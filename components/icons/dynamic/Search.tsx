type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgSearch({
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
        <>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2.021}
            d="M24.738 24.36a8.696 8.696 0 1 0-12.42-12.174 8.696 8.696 0 0 0 12.42 12.175Zm0 0 5.094 5.218"
          />
          <circle cx={18.532} cy={18.278} r={5.7} fill="currentColor" />
        </>
      ) : (
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2.021}
          d="M24.736 24.36a8.696 8.696 0 1 0-12.42-12.174 8.696 8.696 0 0 0 12.42 12.175Zm0 0 5.094 5.218"
        />
      )}
    </svg>
  );
}
