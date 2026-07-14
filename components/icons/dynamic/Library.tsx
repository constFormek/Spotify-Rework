type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgLibrary({
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
            strokeLinejoin="round"
            strokeWidth={2.021}
            d="M11.562 11.563v17.286M17.324 11.563v17.286"
          />
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.021}
            d="M23.087 28.85V11.562l5.762 3.989v13.297z"
          />
        </>
      ) : (
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="M11.562 11.563v17.286M17.324 11.563v17.286M23.087 28.85V11.562l5.762 3.989v13.297z"
        />
      )}
    </svg>
  );
}
