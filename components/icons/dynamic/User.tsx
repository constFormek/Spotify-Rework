type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgUser({
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
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2.021}
            d="M23.573 13.47a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
          />
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.021}
            d="m13.286 22.573.75-.5a11.12 11.12 0 0 1 12.339 0l.75.5a3.37 3.37 0 0 1 1.5 2.802v1.677c0 .868-.704 1.572-1.572 1.572H13.358a1.57 1.57 0 0 1-1.572-1.572v-1.677c0-1.126.563-2.177 1.5-2.802"
          />
        </>
      ) : (
        <>
          {' '}
          <path
            stroke="currentColor"
            strokeWidth={2.021}
            d="M23.573 13.47a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.021}
            d="m13.286 22.573.75-.5a11.12 11.12 0 0 1 12.339 0l.75.5a3.37 3.37 0 0 1 1.5 2.802v1.677c0 .868-.704 1.572-1.572 1.572H13.358a1.57 1.57 0 0 1-1.572-1.572v-1.677c0-1.126.563-2.177 1.5-2.802"
          />
        </>
      )}
    </svg>
  );
}
