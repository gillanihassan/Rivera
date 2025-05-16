import React from "react";
import { Image } from "react-bootstrap";
import image from "../../../../assets/images/fullScreenImage/image.png";
import styles from "./styles.module.css";

function FullScreenImage() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Image src={image} className={`${styles.image}`} />
    </div>
  );
}

export default FullScreenImage;
