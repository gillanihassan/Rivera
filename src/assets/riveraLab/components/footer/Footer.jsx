import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";

import Logo from "../../../images/footer/logo.png";
import iconOne from "../../../images/footer/iconOne.png";
import iconTwo from "../../../images/footer/iconTwo.png";
import iconThree from "../../../images/footer/iconThree.png";

function Footer() {
  return (
    <div className={`mb-3 container-xxl ${styles.mainContainer}`}>
      <Row>
        <Col xs={6} sm={9} md={9} lg={9} xl={10} xxl={10}>
          <Image src={Logo} />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3} xl={2}>
          <Image src={iconOne} className="mx-3" />
          <Image src={iconTwo} className="mx-3" />
          <Image src={iconThree} className="mx-3" />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
