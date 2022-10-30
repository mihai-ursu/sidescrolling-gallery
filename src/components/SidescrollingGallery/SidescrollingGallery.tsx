import data from "data/gallery";
import useWindowSize from "hooks/useWindowSize";
import ScrollSideways from "../ScrollSideways/ScrollSideways";
import Card from "./components/Card/Card";
import styles from "./SidescrollingGallery.module.scss";

const SidescrollingGallery = () => {
  const { width } = useWindowSize();

  return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Our Collection</h1>
      </div>
      <ScrollSideways
        direction="left"
        initialX={width * 0.75}
        isEffectActive={true}
      >
        <div className={styles.galleryWrapper}>
          {data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </ScrollSideways>
    </section>
  );
};

export default SidescrollingGallery;
