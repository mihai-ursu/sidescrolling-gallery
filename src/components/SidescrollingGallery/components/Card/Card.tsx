import CardProps from "./CardProps";
import styles from "./Card.module.scss";
import Image from "next/image";

const Card = (props: CardProps) => {
  const { title, image } = props;

  return (
    <div className={styles.card}>
      <Image src={image} alt={title} fill />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
