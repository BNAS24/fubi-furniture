"use client";
import { useEffect, useState } from "react";

type Page = {
  slide: {
    name: string;
    backgroundImage: string;
    id: number;
  }[];
  selectedIndex: number;
};

export const SliderPagination = ({ slide, selectedIndex }: Page) => {
  type Paths = {
    key: number;
    d: string;
    color: string;
  }[];

  const [paths, setPaths] = useState<Paths>([
    { key: 0, d: "M4 4H20", color: "black" },
    { key: 1, d: "M28 4H44", color: "black" },
    { key: 2, d: "M52 4H68", color: "black" },
    { key: 3, d: "M76 4H92", color: "black" },
    { key: 4, d: "M100 4H116", color: "black" },
    { key: 5, d: "M124 4H140", color: "black" },
  ]);

  useEffect(() => {
    setPaths((prevPaths) =>
      prevPaths.map((path) =>
        path.key === selectedIndex
          ? { ...path, color: "white" }
          : { ...path, color: "black" }
      )
    );
  }, [selectedIndex]);

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
      {paths.map((path) => (
        <path
          key={path.key}
          d={path.d}
          stroke={path.color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
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
