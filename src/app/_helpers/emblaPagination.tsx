import { useState, useCallback, useEffect } from "react";
import { EmblaCarouselType } from "embla-carousel";

interface PaginationType {
  selectedIndex: number;
  scrollSnaps: number[];
}

export const usePagination = (
  emblaApi: EmblaCarouselType | undefined
): PaginationType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
  };
};
