import data from "data/gallery";
import Card from "./components/Card/Card";
import styles from "./SidescrollingGallery.module.scss";

const SidescrollingGallery = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.galleryWrapper}>
        {data.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default SidescrollingGallery;
