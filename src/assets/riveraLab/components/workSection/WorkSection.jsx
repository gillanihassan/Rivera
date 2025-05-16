import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import imgWork from "../../../images/workSection/imgWork.png";
import iconOne from "../../../images/workSection/iconOne.png";
import iconTwo from "../../../images/workSection/iconTwo.png";
import iconThree from "../../../images/workSection/iconThree.png";
import iconFour from "../../../images/workSection/iconFour.png";

function WorkSection() {
  return (
    <div className={`container-xxl mb-5 ${styles.mainDiv}`}>
      <h2 className={` ${styles.customHeading}`}>
        How it works: 4 easy steps to boost your business and simplify your life
      </h2>

      <Row className="mt-5">
        <Col md={6} className="order-2 order-md-1">
          <Card className={`${styles.card}`}>
            <Card.Body>
              <Card.Title>
                <div className="d-flex">
                  <Image
                    src={iconOne}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div>
                    <h6 className={`mx-4 ${styles.cardHeadingOne}`}>Step 1:</h6>
                    <p className={`mx-4 ${styles.cardHeadingTwo}`}>
                      Understand Your Business
                    </p>
                  </div>
                </div>
              </Card.Title>
              <Card.Text className={`mx-5 ${styles.cardText}`}>
                Help us understand your business goals and ideal customers. Tell
                us about your process pains or automation complexities. We will
                customize your automation solutions to meet your unique needs
                and challenges.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-5">
            <Row className="align-items-center">
              <Col xs={1} sm={1} lg={1} xl={1} xxl={1}>
                <Image src={iconTwo} />
              </Col>
              <Col xs={5} sm={5} lg={4} xl={2} xxl={2} className="mt-3">
                <h6 className={styles.headingSix}>Step 2:</h6>
                <p className={styles.sixPara}>Design</p>
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <Row className="align-items-center">
              <Col xs={1} sm={1} lg={1} xl={1} xxl={1}>
                <Image src={iconThree} />
              </Col>
              <Col xs={5} sm={5} lg={4} xl={2} xxl={2} className="mt-3">
                <h6 className={styles.headingSix}>Step 2:</h6>
                <p className={styles.sixPara}>Implementation</p>
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <Row className="align-items-center">
              <Col xs={1} sm={1} lg={1} xl={1} xxl={1}>
                <Image src={iconFour} />
              </Col>
              <Col xs={5} sm={5} lg={4} xl={2} xxl={4} className="mt-3">
                <h6 className={styles.headingSix}>Step 2:</h6>
                <p className={styles.sixPara}>Supervise & Optimize</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          md={6}
          className="order-1 order-md-2 d-flex justify-content-center justify-content-md-start"
        >
          <div>
            <Image src={imgWork} className={`${styles.customImage}`} />
          </div>
        </Col>
      </Row>
      <div className="text-center mt-5">
        <h3 className={`${styles.footerHeading}`}>
          Ready to change your business with AI automation?
        </h3>
        <Button className={`mt-3 ${styles.cutomButton}`}>
          Get Started Now
        </Button>
      </div>
    </div>
  );
}

export default WorkSection;
