import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import imageOne from "../../../images/testimonial/imageOne.png";

function Testimonial() {
  return (
    <div className={`mb-5 container-xxl  ${styles.mainDiv}`}>
      <div className={`${styles.contentDiv}`}>
        <h2 className={`text-center ${styles.customHeading}`}>
          See what our customers say
        </h2>
        <Row className="g-3">
          <Col xxl={4} xl={4} lg={4} md={6} sm={6}>
            <Card className={`${styles.card}`}>
              <Card.Body>
                <Card.Title>
                  <Image src={imageOne} className={styles.cardImg} />
                </Card.Title>
                <Card.Text className={`${styles.text}`}>
                  RiveraLab did an amazing job streamlining my business. I feel
                  like a huge weight as been lifted aff my shoulders thanks to
                  the chatbots and all the integrations they’ve set up for me.
                  Can’t thank them enough!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={6} sm={6}>
            <Card className={`${styles.card}`}>
              <Card.Body>
                <Card.Title>
                  <Image src={imageOne} className={styles.cardImg} />
                </Card.Title>
                <Card.Text className={`${styles.text}`}>
                  RiveraLab did an amazing job streamlining my business. I feel
                  like a huge weight as been lifted aff my shoulders thanks to
                  the chatbots and all the integrations they’ve set up for me.
                  Can’t thank them enough!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={6} sm={6}>
            <Card className={`${styles.card}`}>
              <Card.Body>
                <Card.Title>
                  <Image src={imageOne} className={styles.cardImg} />
                </Card.Title>
                <Card.Text className={`${styles.text}`}>
                  RiveraLab did an amazing job streamlining my business. I feel
                  like a huge weight as been lifted aff my shoulders thanks to
                  the chatbots and all the integrations they’ve set up for me.
                  Can’t thank them enough!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Testimonial;
