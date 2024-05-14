export const SliderPagination = () => {
  return (
    <svg
      className="pagination-controls"
      width="144"
      height="8"
      viewBox="0 0 144 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_225_193)">
        <rect width="144" height="8" rx="4" fill="#C0BDBD" fillOpacity="0.16" />
      </g>
      <path d="M4 4H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M76 4H92" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 4H44" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M100 4H116"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M52 4H68" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M124 4H140"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_b_225_193"
          x="-4"
          y="-4"
          width="152"
          height="16"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_225_193"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_225_193"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
