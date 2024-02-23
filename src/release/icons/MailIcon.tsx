
import { IconProps } from "../../types";

const MailIcon = ({ width, height, color, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.75C0 1.92157 0.671573 1.25 1.5 1.25H12.5C13.3284 1.25 14 1.92157 14 2.75V3.09195L7.3834 7.5038C7.29008 7.5638 7.15462 7.60663 6.99999 7.60663C6.84537 7.60663 6.70991 7.5638 6.61659 7.5038L0 3.09196V2.75ZM0 4.59435V11.25C0 12.0784 0.671573 12.75 1.5 12.75H12.5C13.3284 12.75 14 12.0784 14 11.25V4.59434L8.0734 8.54611L8.06764 8.54995C7.75299 8.75476 7.37513 8.85663 6.99999 8.85663C6.62486 8.85663 6.24702 8.75473 5.93237 8.54992L5.92657 8.54614L0 4.59435Z"
      />
    </svg>
  );
};

export default MailIcon;