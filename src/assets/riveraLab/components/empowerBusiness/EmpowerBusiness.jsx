import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import image from "../../../images/empowerBusiness/mainimg.png";
import cardimgOne from "../../../images/empowerBusiness/cardimgOne.png";
import cardimgTwo from "../../../images/empowerBusiness/cardimgTwo.png";
import stars from "../../../images/empowerBusiness/stars.png";
import badge from "../../../images/empowerBusiness/badge.png";

function EmpowerBusiness() {
  return (
    <div className={` container-xxl ${styles.mainDiv}`}>
      <div className="text-center">
        <Image src={image} className={`${styles.topImage}`} />
      </div>
      <div style={{ position: "relative" }}>
        <Row className={`text-white ${styles.customRow}`}>
          <Col md={7}>
            <h2 className={`mt-3 ${styles.colLeftHeading}`}>
              Empower Your Business with Cutting-Edge AI Automation
            </h2>
            <p className={`${styles.colLeftPara}`}>
              Empower Your Business with Cutting-Edge AI Automation
            </p>
            <Card className={`${styles.card}`}>
              <Card.Body>
                <Card.Title className="d-flex">
                  <Col md={5} className="d-flex align-items-center">
                    <Image src={cardimgOne} />
                    <div className="mx-3">
                      <h6 className={styles.cardHeadingOne}>
                        Chris Heppenstall
                      </h6>
                      <h6 className={styles.cardHeadingTwo}>
                        Just getting started!
                      </h6>
                    </div>
                  </Col>
                  <Col md={4}>
                    <Image src={cardimgTwo} />
                  </Col>
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  RiveraLab did an amazing job streamlining my business. I feel
                  like a huge weight as been lifted aff my shoulders thanks to
                  the chatbots and all the integrations they’ve set up for me.
                  Can’t thank them enough!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <h3 className={`${styles.colRightHeading}`}>
              Ready to transform your business with AI? Let our expert team
              guide you to automation success.
            </h3>
            <div>
              <Image src={stars} className="mt-2" />
              <span className={`mx-3 ${styles.span}`}>
                4.8 &nbsp; / &nbsp; 5
              </span>
            </div>
            <Row className="mt-4">
              <Col xs={5} sm={3} xxl={12}>
                <Button className={`mb-3 ${styles.customButton}`}>
                  Get Started Now
                </Button>
              </Col>
              <Col xs={5} sm={4} xxl={6}>
                <p className={`${styles.colRightPara}`}>
                  100% Satisfaction Guarantee See results or get your money
                  back!
                </p>
              </Col>
              <Col xs={2} sm={4} xxl={6}>
                <Image src={badge} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default EmpowerBusiness;
