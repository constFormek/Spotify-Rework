type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgCheck({
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
          <circle cx={20.584} cy={20.081} r={11} fill="#1ED760" />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m16.335 20.58 3 3 5.5-5.5"
          />
        </>
      ) : (
        <circle
          cx={20.584}
          cy={20.081}
          r={10.1}
          stroke="currentColor"
          strokeWidth={1.8}
        />
      )}
    </svg>
  );
}
