import { RefObject, useState } from "react";

const useCurrentSlide = (titleRef: RefObject<HTMLElement>) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return currentSlide;
};

export default useCurrentSlide;
