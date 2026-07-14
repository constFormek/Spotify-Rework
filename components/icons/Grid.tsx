
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgGrid({ className = "", size = "2.5em" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <rect
        width={8.182}
        height={8.182}
        x={10.335}
        y={10.081}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={10.335}
        y={21.899}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={22.153}
        y={10.081}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={22.153}
        y={21.899}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
    </svg>
  );
}


