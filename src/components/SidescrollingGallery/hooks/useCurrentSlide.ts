import useEventListener from "hooks/useEventListener";
import { RefObject, useEffect, useState } from "react";

const useCurrentSlide = <T extends HTMLElement = HTMLDivElement>(
  titleRef: RefObject<HTMLElement>,
  galleryWidth: number,
  totalSlides: number
): [(node: T | null) => void, number] => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, setRef] = useState<T | null>(null);
  const [titleRight, setTitleRight] = useState(0);
  const [galleryWrapperLeft, setGalleryWrapperLeft] = useState<
    number | undefined
  >(undefined);

  const getGalleryWrapperLeft = (cardRef: T | null) => {
    if (!cardRef) return 0;

    const { left } = cardRef.getBoundingClientRect();
    return left;
  };

  useEventListener("scroll", () =>
    setGalleryWrapperLeft(getGalleryWrapperLeft(ref))
  );

  useEffect(() => {
    if (!galleryWrapperLeft) return;

    for (let i = 0; i < totalSlides; i++) {
      if (
        titleRight / 2 <
        galleryWrapperLeft + (galleryWidth / totalSlides) * i
      ) {
        setCurrentSlide(i);
        break;
      }
    }
  }, [galleryWidth, galleryWrapperLeft, titleRight, totalSlides]);

  useEffect(() => {
    if (!titleRef.current) return;
    const { right } = titleRef.current.getBoundingClientRect();
    setTitleRight(right);
  }, []);

  return [setRef, currentSlide];
};

export default useCurrentSlide;
