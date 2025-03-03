import clsx from "clsx";

export const ArrowLinkIcon = () => {
  return (
    <svg
      // className="text-black dark:text-white"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="46" height="46" rx="16" fill="white" fill-opacity="0.35" />
      <g clip-path="url(#clip0_239_3601)">
        <path
          d="M27.8275 21.9392V17.6966M27.8275 17.6966H23.5849M27.8275 17.6966L17.2209 28.3032"
          stroke-width="1.44395"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_239_3601">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(35.2522 23) rotate(135)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowLeftIcon = () => (
  <svg
    className="text-black dark:text-white"
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M38 3.95825C56.8005 3.95825 72.0417 19.1994 72.0417 37.9999C72.0417 56.8004 56.8005 72.0416 38 72.0416C19.1995 72.0416 3.95837 56.8004 3.95837 37.9999C3.95837 19.1994 19.1995 3.95825 38 3.95825ZM42.845 28.5949C43.2646 28.1447 43.493 27.5492 43.4821 26.9339C43.4712 26.3186 43.222 25.7316 42.7868 25.2964C42.3517 24.8613 41.7646 24.6121 41.1494 24.6012C40.5341 24.5903 39.9386 24.8187 39.4884 25.2383L28.405 36.3216C27.9603 36.7669 27.7105 37.3705 27.7105 37.9999C27.7105 38.6293 27.9603 39.2329 28.405 39.6783L39.4884 50.7616C39.7058 50.9949 39.968 51.1821 40.2593 51.3119C40.5507 51.4417 40.8652 51.5115 41.1841 51.5171C41.5029 51.5228 41.8197 51.4641 42.1154 51.3446C42.4112 51.2252 42.6798 51.0474 42.9053 50.8219C43.1309 50.5963 43.3086 50.3277 43.4281 50.032C43.5475 49.7363 43.6062 49.4195 43.6006 49.1006C43.595 48.7817 43.5252 48.4672 43.3953 48.1759C43.2655 47.8846 43.0784 47.6223 42.845 47.4049L33.44 37.9999L42.845 28.5949Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowLeftIconAlt = ({ className = "" }) => (
  <svg
    className={className}
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 2.18744C31.3897 2.18744 39.8125 10.6102 39.8125 20.9999C39.8125 31.3897 31.3897 39.8124 21 39.8124C10.6103 39.8124 2.1875 31.3897 2.1875 20.9999C2.1875 10.6102 10.6103 2.18744 21 2.18744ZM23.6775 15.8024C23.9093 15.5536 24.0356 15.2246 24.0296 14.8845C24.0236 14.5445 23.8858 14.2201 23.6453 13.9796C23.4049 13.7391 23.0804 13.6014 22.7404 13.5954C22.4004 13.5894 22.0713 13.7156 21.8225 13.9474L15.6975 20.0724C15.4517 20.3185 15.3137 20.6521 15.3137 20.9999C15.3137 21.3478 15.4517 21.6813 15.6975 21.9274L21.8225 28.0524C21.9427 28.1814 22.0876 28.2848 22.2486 28.3566C22.4096 28.4283 22.5834 28.4669 22.7596 28.47C22.9358 28.4731 23.1109 28.4407 23.2743 28.3747C23.4377 28.3086 23.5862 28.2104 23.7108 28.0858C23.8354 27.9611 23.9337 27.8127 23.9997 27.6492C24.0657 27.4858 24.0981 27.3108 24.095 27.1345C24.0919 26.9583 24.0534 26.7845 23.9816 26.6235C23.9099 26.4625 23.8065 26.3176 23.6775 26.1974L18.48 20.9999L23.6775 15.8024Z"
      fill="white"
    />
  </svg>
);

export const PlainArrowIcon = ({ className = "" }) => (
  <svg
    className={clsx("text-black dark:text-white", className)}
    width="26"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6_58)">
      <path
        d="M18.8274 11.9392V7.69655M18.8274 7.69655H14.5848M18.8274 7.69655L8.22081 18.3032"
        // stroke="white"
        stroke-width="1.44395"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_58">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(26.2522 13) rotate(135)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const PlainArrowIconAlt = () => (
  <svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6_58)">
      <path
        d="M18.8274 11.9392V7.69655M18.8274 7.69655H14.5848M18.8274 7.69655L8.22081 18.3032"
        stroke="white"
        stroke-width="1.44395"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_58">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(26.2522 13) rotate(135)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const BendArrowIcon = () => (
  <svg
    className="text-black dark:text-white"
    width="77"
    height="52"
    viewBox="0 0 77 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.197213 7.69604C-0.132255 7.25279 -0.0400282 6.62638 0.403216 6.29691L7.62631 0.927834C8.06955 0.598361 8.69597 0.690592 9.02543 1.13383C9.35491 1.57708 9.26268 2.20349 8.81944 2.53297L2.39891 7.30548L7.17142 13.726C7.50089 14.1692 7.40866 14.7957 6.96542 15.1251C6.52218 15.4546 5.89576 15.3624 5.56629 14.9191L0.197213 7.69604ZM75.1481 51.6235C66.2869 37.2211 57.7029 27.8482 46.4025 21.3214C35.0772 14.7802 20.936 11.0456 0.854115 8.08881L1.14545 6.11014C21.2978 9.07728 35.7433 12.8553 47.4027 19.5895C59.087 26.3381 67.8859 36.0033 76.8515 50.5755L75.1481 51.6235Z"
      fill="currentColor"
    />
  </svg>
);
