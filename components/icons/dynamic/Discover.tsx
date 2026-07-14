type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgDiscover({
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
          strokeWidth={2}
          d="M20.59 10.823a13 13 0 0 0 9.002 9.002l1.795.504-1.795.504a13 13 0 0 0-9.002 9.002l-.504 1.795-.503-1.795a13 13 0 0 0-9.002-9.002l-1.795-.504 1.795-.504a13 13 0 0 0 9.002-9.002l.503-1.795z"
        />
      ) : (
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M20.59 10.823a13 13 0 0 0 9.002 9.002l1.795.504-1.795.504a13 13 0 0 0-9.002 9.002l-.504 1.795-.503-1.795a13 13 0 0 0-9.002-9.002l-1.795-.504 1.795-.504a13 13 0 0 0 9.002-9.002l.503-1.795z"
        />
      )}
    </svg>
  );
}
