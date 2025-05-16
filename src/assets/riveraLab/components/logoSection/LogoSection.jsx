import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo1 from "../../../../assets/images/logoSection/logo1.png";
import { Image } from "react-bootstrap";
import styles from "./styles.module.css";

function LogoSection() {
  return (
    <Carousel>
      <div>
        <Image src={logo1} className={`${styles.image}`} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <Image src={logo1} className={`${styles.image}`} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <Image src={logo1} className={`${styles.image}`} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default LogoSection;
