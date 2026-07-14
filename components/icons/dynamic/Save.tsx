type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgSave({
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
          strokeWidth={2.32}
          d="M12.076 12.402v16.304a1.16 1.16 0 0 0 1.834.943l4.936-3.526a2.32 2.32 0 0 1 2.697 0l4.937 3.526a1.16 1.16 0 0 0 1.834-.944V12.403a2.32 2.32 0 0 0-2.32-2.32H14.395a2.32 2.32 0 0 0-2.32 2.32Z"
        />
      ) : (
        <path
          stroke="currentColor"
          strokeWidth={2.32}
          d="M12.324 12.402v16.304a1.16 1.16 0 0 0 1.834.943l4.937-3.526a2.32 2.32 0 0 1 2.697 0l4.936 3.526a1.16 1.16 0 0 0 1.834-.944V12.403a2.32 2.32 0 0 0-2.32-2.32H14.645a2.32 2.32 0 0 0-2.32 2.32Z"
        />
      )}
    </svg>
  );
}
