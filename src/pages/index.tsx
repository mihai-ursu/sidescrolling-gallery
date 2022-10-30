import SidescrollingGallery from "@/components/SidescrollingGallery/SidescrollingGallery";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <div className={styles.spacer} />
      <SidescrollingGallery />
      <div className={styles.spacer} />
    </div>
  );
}
