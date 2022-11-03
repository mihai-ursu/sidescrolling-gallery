import data from "data/gallery";
import useElementSize from "hooks/useElementSize";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import ScrollSideways from "../ScrollSideways/ScrollSideways";
import Card from "./components/Card/Card";
// import useCurrentSlide from "./hooks/useCurrentSlide";
import styles from "./SidescrollingGallery.module.scss";

const SidescrollingGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width: windowWidth } = useWindowSize();
  const [galleryWrapperRef, { width: galleryWrapperWidth }] = useElementSize();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleRight, setTitleRight] = useState(0);

  useEffect(() => {
    if (!titleRef.current) return;
    const { right } = titleRef.current.getBoundingClientRect();
    setTitleRight(right);
  }, []);

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
            </ScrollSideways>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidescrollingGallery;
