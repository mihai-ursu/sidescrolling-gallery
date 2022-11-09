import data from "data/gallery";
import useElementSize from "hooks/useElementSize";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useRef } from "react";
import ScrollSideways from "../ScrollSideways/ScrollSideways";
import Card from "./components/Card/Card";
import styles from "./SidescrollingGallery.module.scss";
import useCurrentSlide from "./hooks/useCurrentSlide";
import useBackgroundColorStore from "store/useBackgroundColorStore";

const SidescrollingGallery = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const totalSlides = data.length;
  const [galleryWrapperRef, { width: galleryWidth }] = useElementSize();
  const [wrapperRef, currentSlide] = useCurrentSlide(
    titleRef,
    galleryWidth,
    totalSlides
  );

  const { setColor } = useBackgroundColorStore();

  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    setColor(data[currentSlide].color);
  }, [currentSlide]);

  return (
    <section>
      <div style={{ height: galleryWidth }}>
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
              offset={galleryWidth}
            >
              <div
                ref={(el) => {
                  galleryWrapperRef(el);
                  wrapperRef(el);
                }}
                className={styles.cardsWrapper}
              >
                {data.map((item, index) => {
                  return (
                    <Card
                      key={item.id}
                      cardIndex={index}
                      currentSlide={currentSlide}
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
