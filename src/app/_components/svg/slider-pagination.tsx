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
    <g filter="url(#filter0_b_224_192)">
      <rect
        width="144"
        height="8"
        rx="4"
        fill="#C0BDBD"
        fillOpacity="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_224_192"
        x="-4"
        y="-4"
        width="152"
        height="16"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_224_192"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_224_192"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  )
}