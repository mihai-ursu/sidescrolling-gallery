import { Dispatch, SetStateAction } from "react";

export default interface CardProps {
  title: string;
  image: string;
  cardIndex: number;
  currentSlide: number;
  titleRight: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
}
