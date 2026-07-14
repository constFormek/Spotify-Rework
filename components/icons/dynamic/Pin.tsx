type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgPin({
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
          stroke="#1ED760"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m29.32 16.426 1.519 1.518m-1.518-1.518-6.7 6.7a.78.78 0 0 0-.223.457l-.335 2.753a.779.779 0 0 1-1.323.457l-3.929-3.929m12.51-6.438-6.071-6.072m-1.518-1.517 1.518 1.517m0 0-6.7 6.7a.78.78 0 0 1-.457.223l-2.754.335a.779.779 0 0 0-.457 1.324l3.929 3.928m0 0-5.168 5.168"
        />
      ) : (
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m29.32 16.426 1.519 1.518m-1.518-1.518-6.7 6.7a.78.78 0 0 0-.223.457l-.335 2.753a.779.779 0 0 1-1.323.457l-3.929-3.929m12.51-6.438-6.071-6.072m-1.518-1.517 1.518 1.517m0 0-6.7 6.7a.78.78 0 0 1-.457.223l-2.754.335a.779.779 0 0 0-.457 1.324l3.929 3.928m0 0-5.168 5.168"
        />
      )}
    </svg>
  );
}
