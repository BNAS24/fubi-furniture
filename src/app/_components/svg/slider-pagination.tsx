"use client";
import { useState, useCallback, useEffect } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
};

export const usePagination = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
  };
};

export const SliderPagination = (indexSelected: any) => {
  console.log("index selected in slider component", indexSelected);
  const colors = {
    color1: indexSelected.indexSelected === 0 ? "white" : "black",
    color2: indexSelected.indexSelected === 1 ? "white" : "black",
    color3: indexSelected.indexSelected === 2 ? "white" : "black",
    color4: indexSelected.indexSelected === 3 ? "white" : "black",
    color5: indexSelected.indexSelected === 4 ? "white" : "black",
    color6: indexSelected.indexSelected === 6 ? "white" : "black",
  };

  const paths = [
    { key: 1, d: "M4 4H20", color: colors.color1 },
    { key: 2, d: "M28 4H44", color: colors.color2 },
    { key: 3, d: "M76 4H92", color: colors.color3 },
    { key: 4, d: "M100 4H116", color: colors.color4 },
    { key: 5, d: "M52 4H68", color: colors.color5 },
    { key: 6, d: "M124 4H140", color: colors.color6 },
  ];

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
