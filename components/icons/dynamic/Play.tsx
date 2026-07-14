import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgPlay({
  className = '',
  size = '2.5em',
  active = false,
}: Props) {

  const styles = cn(className, "group");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={styles}
    >
      {active ? (
        <>
          <circle className="group-hover:fill-[#1ED760] fill-[#65D46E]" cx={20.205} cy={20.205} r={20.205} fill="currentColor" />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={3.368}
            d="M16.838 15.154v10.103M23.573 15.154v10.103"
          />
        </>
      ) : (
        <>
          <circle className="group-hover:fill-[#1ED760] fill-[#65D46E]" cx={20.205} cy={20.205} r={20.205} fill="#1ED760" />
          <path
            fill="currentColor"
            d="M26.328 18.88a1.53 1.53 0 0 1 0 2.652l-8.036 4.64a1.53 1.53 0 0 1-2.296-1.326v-9.28a1.53 1.53 0 0 1 2.296-1.325z"
          />
        </>
      )}
    </svg>
  );
}
