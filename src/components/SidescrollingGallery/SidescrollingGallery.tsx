import data from "data/gallery";
import useElementSize from "hooks/useElementSize";
import useWindowSize from "hooks/useWindowSize";
import { RefObject, useEffect, useRef, useState } from "react";
import ScrollSideways from "../ScrollSideways/ScrollSideways";
import Card from "./components/Card/Card";
import styles from "./SidescrollingGallery.module.scss";
import useEventListener from "hooks/useEventListener";

const SidescrollingGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [elementLeft, setElementLeft] = useState<number | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { width: windowWidth } = useWindowSize();
  const [galleryWrapperRef, { width: galleryWrapperWidth }] = useElementSize();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleRight, setTitleRight] = useState(0);

  const getElementLeft = (cardRef: RefObject<HTMLDivElement>) => {
    if (!cardRef.current) return 0;

    const { left } = cardRef.current.getBoundingClientRect();
    return left;
  };

  useEventListener("scroll", () => setElementLeft(getElementLeft(wrapperRef)));

  useEffect(() => {
    if (!titleRef.current) return;
    const { right } = titleRef.current.getBoundingClientRect();
    setTitleRight(right);
  }, []);

  console.log(elementLeft);

  return (
    <section>
      <div style={{ height: galleryWrapperWidth }}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title} ref={titleRef}>
              Our Collection
            </h1>
          </div>
          <div className={styles.galleryWrapper}>
            <ScrollSideways
              direction="left"
              initialX={windowWidth * 0.8}
              isEffectActive={true}
              offset={galleryWrapperWidth}
            >
              <div ref={wrapperRef}>
                <div ref={galleryWrapperRef} className={styles.cardsWrapper}>
                  {data.map((item, index) => {
                    return (
                      <Card
                        titleRight={titleRight}
                        key={item.id}
                        cardIndex={index}
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        {...item}
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollSideways>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidescrollingGallery;
