import CardProps from "./CardProps";
import styles from "./Card.module.scss";
import Image from "next/image";
import { useRef } from "react";

const Card = (props: CardProps) => {
  const cardRef = useRef(null);
  const { title, image } = props;

  return (
    <div ref={cardRef} className={styles.card}>
      <Image src={image} alt={title} fill />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
