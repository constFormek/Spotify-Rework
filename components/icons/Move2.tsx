type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgMove2({ className = "", size = "2.5em" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <circle cx={16.727} cy={12.733} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={12.733} r={1.9} fill="currentColor" />
      <circle cx={16.727} cy={20.332} r={1.9} fill="currentColor" />
      <circle cx={16.727} cy={27.932} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={20.332} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={27.932} r={1.9} fill="currentColor" />
    </svg>
  );
}
