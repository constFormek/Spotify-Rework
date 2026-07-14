
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgAddToLibrary({ className = "", size = "2.5em" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M11.562 20.08v8.77M17.324 20.08v8.77M23.087 28.85V11.562l2.88 1.994 2.882 1.995v13.297zM11.832 14.047h2.526m2.526 0h-2.526m0 0v-2.526m0 2.526v2.526"
      />
    </svg>
  );
}


