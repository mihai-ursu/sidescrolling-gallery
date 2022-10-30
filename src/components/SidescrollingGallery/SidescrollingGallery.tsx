import data from "@/data/gallery";
import ScrollSideways from "../ScrollSideways/ScrollSideways";
import Card from "./components/Card/Card";
import styles from "./SidescrollingGallery.module.scss";

const SidescrollingGallery = () => {
  return (
    <section className={styles.wrapper}>
      <ScrollSideways direction="left" initialX={200} isEffectActive={true}>
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
