import CardProps from "./CardProps";
import styles from "./Card.module.scss";
import Image from "next/image";
import { memo, RefObject, useEffect, useRef, useState } from "react";
import useEventListener from "hooks/useEventListener";
import { AnimatePresence, motion } from "framer-motion";
import useBackgroundColorStore from "store/useBackgroundColorStore";

const Card = (props: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [elementLeft, setElementLeft] = useState<number | undefined>(undefined);
  const {
    title,
    image,
    cardIndex,
    currentSlide,
    titleRight,
    setCurrentSlide,
    color,
  } = props;
  const isActive = cardIndex === currentSlide;

  const getElementLeft = (cardRef: RefObject<HTMLDivElement>) => {
    if (!cardRef.current) return 0;

    const { left } = cardRef.current.getBoundingClientRect();
    return left;
  };

  // useEventListener("scroll", () => setElementLeft(getElementLeft(cardRef)));

  const { setColor } = useBackgroundColorStore();

  // useEffect(() => {
  //   if (cardIndex === currentSlide) {
  //     setColor(color);
  //   }
  // }, [cardIndex, currentSlide, color, setColor]);

  // useEffect(() => {
  //   if (elementLeft && elementLeft < titleRight) {
  //     setCurrentSlide(cardIndex);
  //   }
  // }, [elementLeft, cardIndex, setCurrentSlide, titleRight]);

  console.log("component rendered");

  const titleVariants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      opacity: 0,
      y: 20,
    },
    initial: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div ref={cardRef} className={styles.card}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 384px, (min-width: 1200px) 384px, 384px"
      />
      <AnimatePresence>
        {isActive ? (
          <motion.h3
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.title}
          >
            {title}
          </motion.h3>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default memo(Card);
