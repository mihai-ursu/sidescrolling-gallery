import SidescrollingGallery from "components/SidescrollingGallery/SidescrollingGallery";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Scroll Down</h1>
        <div className={styles.spacer} />
      </div>
      <SidescrollingGallery />
      <div className={styles.spacer} />
    </div>
  );
}
