import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";

import Logo from "../../../images/footer/logo.png";
import iconOne from "../../../images/footer/iconOne.png";
import iconTwo from "../../../images/footer/iconTwo.png";
import iconThree from "../../../images/footer/iconThree.png";

function Footer() {
  return (
    <Container className={`mb-3 ${styles.mainContainer}`}>
      <Row>
        <Col md={10}>
          <Image src={Logo} />
        </Col>
        <Col md={2}>
          <Image src={iconOne} className="mx-3" />
          <Image src={iconTwo} className="mx-3" />
          <Image src={iconThree} className="mx-3" />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
