type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgMore({ className = "", size = "2.5em" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <circle cx={11.787} cy={20.207} r={1.684} fill="currentColor" />
      <circle cx={20.205} cy={20.207} r={1.684} fill="currentColor" />
      <circle cx={28.624} cy={20.207} r={1.684} fill="currentColor" />
    </svg>
  );
}
