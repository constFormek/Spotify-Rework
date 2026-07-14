
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgDynamic({ className = "", size = "2.5em" }: Props) {
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
        d="M19.719 10.086h2.918l-2.918 9.655h3.862l-.944 2.655-2.918 8.207 2.152-8.207h-4.324z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m22.637 22.396.944-2.655H19.72l2.918-9.655h-2.918l-2.172 12.31h4.324m.766 0-2.918 8.207 2.152-8.207m.766 0h-.766"
      />
      <circle
        cx={20.205}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </svg>
  );
}


