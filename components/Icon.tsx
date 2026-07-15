import { IconMap, IconName } from "./IconMap";

interface IconProps {
  name: IconName;
  size?: number;
  isActive?: boolean;
  className?: string;
}
const Icon = ({
  name,
  size = 20,
  className = "",
  isActive = false,
}: IconProps) => {
  const icon = IconMap[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={`${className} group`}
    >
      {"default" in icon ? (isActive ? icon.active : icon.default) : icon}
    </svg>
  );
};

export default Icon;
