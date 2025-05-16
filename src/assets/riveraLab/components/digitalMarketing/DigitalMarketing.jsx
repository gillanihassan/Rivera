import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import leftimg from "../../../images/digitalMarketing/leftimg.png";
import logoOne from "../../../images/digitalMarketing/logoOne.png";
import logoTwo from "../../../images/digitalMarketing/logoTwo.png";
import logoThree from "../../../images/digitalMarketing/logoThree.png";
import logoFour from "../../../images/digitalMarketing/logoFour.png";
import logoFive from "../../../images/digitalMarketing/logoFive.png";
import logoSix from "../../../images/digitalMarketing/logoSix.png";
import logoSeven from "../../../images/digitalMarketing/logoSeven.png";

function DigitalMarketing() {
  return (
    <div className={styles.rootDiv}>
      <div className={`container-xxl  mb-5 ${styles.mainDiv}`}>
        <div className={styles.contentDiv}>
          <h2 className={`mb-5 text-center ${styles.mainHeading}`}>
            Hi there! I'm Carlos 👋
          </h2>
          <Row>
            <Col
              md={6}
              className="d-flex justify-content-center justify-content-md-start"
            >
              <Image src={leftimg} className={styles.leftimg} />
            </Col>
            <Col md={6} className="mt-3">
              <div className="d-flex">
                <Image
                  src={logoOne}
                  style={{ width: "28px", height: "28px" }}
                />
                <p className={`mx-4 ${styles.customPara}`}>
                  Digital marketing maverick with a knack for e-commerce success
                  and driving digital service sales.
                </p>
              </div>
              <div className="d-flex">
                <Image
                  src={logoTwo}
                  style={{ width: "28px", height: "28px" }}
                />
                <p className={`mx-4 ${styles.customPara}`}>
                  Crafted clever AI chatbots with movie banter, ensuring
                  customer engagement is never dull.
                </p>
              </div>
              <div className="d-flex">
                <Image
                  src={logoThree}
                  style={{ width: "28px", height: "28px" }}
                />
                <p className={`mx-4 ${styles.customPara}`}>
                  Data whiz? You bet! Transformed raw numbers into actionable
                  strategies for giants like Instacar.
                </p>
              </div>
              <div className="d-flex">
                <Image
                  src={logoFour}
                  style={{ width: "28px", height: "28px" }}
                />
                <p className={`mx-4 ${styles.customPara}`}>
                  Meticulously mined music streaming data, uncovering the beat
                  of customer preferences across cities.
                </p>
              </div>
              <div className="d-flex">
                <Image
                  src={logoFive}
                  style={{ width: "28px", height: "28px" }}
                />
                <p className={`mx-4 ${styles.customPara}`}>
                  Guided a fintech startup's marketing brigade to victory,
                  dominating the competition in just 18 months!
                </p>
              </div>
              <div className="d-flex">
                <Image
                  src={logoSix}
                  style={{ width: "28px", height: "28px" }}
                />
                <p className={`mx-4 ${styles.customPara}`}>
                  Email marketing maestro, spinning follow-ups into gold and
                  filling funnels with eager leads.
                </p>
              </div>
              <div className="d-flex">
                <Image
                  src={logoSeven}
                  style={{ width: "28px", height: "28px" }}
                />
                <p className={`mx-4 ${styles.customPara}`}>
                  Personas, UX, Slack – all in my digital toolbox, weaving them
                  into a seamless customer support tapestry.
                </p>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-center text-center">
            <h4 className={`mt-5 ${styles.footerHeading}`}>
              Mastering sales, operations, and data, I turn digital marketing
              into your success story—smart automation included.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
