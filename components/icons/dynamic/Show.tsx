type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgShow({
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
          {' '}
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
            d="M20.403 27.003c-1.963-.014-3.759-.632-5.32-1.504m5.32 1.504v3.082m0-3.082c2.019.014 3.852-.614 5.43-1.504m6.035-5.654s-.646.993-1.804 2.24M8.84 19.687s.705 1.073 1.959 2.398m0 0L8.084 24.8m2.715-2.715c1.065 1.124 2.525 2.43 4.285 3.414m0 0-2 3.086m12.749-3.086 1.75 3.086m-1.75-3.086c1.756-.99 3.198-2.303 4.23-3.414m0 0 2.52 2.52"
          />
        </>
      ) : (
        <>
          <path
            stroke="currentColor"
            strokeWidth={2}
            d="M20.302 12.222c4.386.03 7.966 3.15 10.043 5.5 1.309 1.48 1.287 3.638-.074 5.07-2.062 2.17-5.553 4.958-9.863 4.928-4.331-.03-7.875-2.894-9.962-5.096a3.71 3.71 0 0 1-.087-5.069c2.05-2.318 5.576-5.362 9.943-5.333Z"
          />
          <circle cx={20.38} cy={19.936} r={4.252} fill="currentColor" />
        </>
      )}
    </svg>
  );
}
