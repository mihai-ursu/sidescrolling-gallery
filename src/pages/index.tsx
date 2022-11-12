import SidescrollingGallery from "components/SidescrollingGallery/SidescrollingGallery";
import useBackgroundColorStore from "store/useColorStore";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const { backgroundColor } = useBackgroundColorStore();

  return (
    <>
      <Head>
        <title>
          Sidescrolling Gallery | Next.js + Framer Motion + TypeScript
        </title>
      </Head>
      <motion.div
        className={styles.container}
        animate={{ backgroundColor: backgroundColor }}
      >
        <div className={styles.content}>
          <h1 className={styles.title}>
            Pursuit of excellence A family Spirit
          </h1>
        </div>
        <SidescrollingGallery />
        <div className={styles.spacer} />
      </motion.div>
    </>
  );
}
