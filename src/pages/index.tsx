import SidescrollingGallery from "components/SidescrollingGallery/SidescrollingGallery";
import useBackgroundColorStore from "store/useBackgroundColorStore";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  const { color: backgroundColor } = useBackgroundColorStore();

  return (
    <motion.div
      className={styles.container}
      animate={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Pursuit of excellence A family Spirit</h1>
      </div>
      <SidescrollingGallery />
      <div className={styles.spacer} />
    </motion.div>
  );
}
