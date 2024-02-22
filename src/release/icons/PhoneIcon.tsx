 
import { IconProps } from "../../types";

const PhoneIcon = ({ width, height, color, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      className={className}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1222_7775)">
        <path d="M0.759178 5.16951C0.345878 4.52896 0.165778 3.76565 0.249178 3.00793C0.332477 2.25021 0.674178 1.54429 1.21678 1.00888L1.67448 0.540808C1.88438 0.335601 2.16628 0.220703 2.45978 0.220703C2.75338 0.220703 3.03528 0.335601 3.24518 0.540808L5.21103 2.52751C5.41559 2.73565 5.53021 3.0158 5.53021 3.30763C5.53021 3.59946 5.41559 3.87961 5.21103 4.08775C5.00583 4.29765 4.89093 4.57953 4.89093 4.87307C4.89093 5.16661 5.00583 5.44849 5.21103 5.65839L8.33151 8.77886C8.43409 8.88296 8.55635 8.96562 8.69117 9.02205C8.82599 9.07847 8.97068 9.10752 9.11683 9.10752C9.26298 9.10752 9.40767 9.07847 9.54249 9.02205C9.67731 8.96562 9.79956 8.88296 9.90215 8.77886C10.1103 8.57431 10.3904 8.45969 10.6823 8.45969C10.9741 8.45969 11.2542 8.57431 11.4624 8.77886L13.4387 10.7551C13.6439 10.965 13.7588 11.2469 13.7588 11.5405C13.7588 11.834 13.6439 12.1159 13.4387 12.3258L12.9706 12.7834C12.4352 13.326 11.7293 13.6677 10.9716 13.7511C10.2138 13.8344 9.45054 13.6544 8.80998 13.2411C5.63674 11.0879 2.90418 8.3483 0.759178 5.16951Z" />
      </g>
    </svg>
  );
};

export default PhoneIcon;
