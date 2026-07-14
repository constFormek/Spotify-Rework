type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgPlaySimple({ className = "", size = "2.5em" }: Props) {
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
        fill="currentColor"
        d="M28.094 18.234c1.257.726 1.257 2.54 0 3.266l-9.897 5.714c-1.257.726-2.828-.181-2.828-1.633V14.153c0-1.452 1.57-2.359 2.828-1.633z"
      />
    </svg>
  );
}
