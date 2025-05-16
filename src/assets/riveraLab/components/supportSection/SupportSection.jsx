import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import image from "../../../images/supportSection/SupportSection.png";
import bullet from "../../../images/supportSection/bullet.png";

function SupportSection() {
  const items = [
    "Upsell/Direct Response Marketing",
    "Appointment Booking",
    "Product Catalogue",
    "Virtual Marketplace Catalogue",
    "Lead Generation",
    "Brand Promotion",
    "Scheduling",
    "Advertising",
  ];

  return (
    <div className={`container-xxl  text-center  ${styles.mainDiv}`}>
      <h2 className={styles.mainHeading}>We’ll take care of all your</h2>
      <p className={`mt-2 ${styles.firstPara}`}>
        Don't worry, this sub headline will become yours and help you sell more
        stuff
      </p>

      <Row className="g-3 mt-4">
        <Col xs={12} sm={4} md={4} xl={4}>
          <div className={`p-3 text-center ${styles.columnDivOne}`}>
            Customer support
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} xl={4}>
          <div className={`p-3 text-center ${styles.columnDivTwo}`}>
            Business process automation
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} xl={4}>
          <div className={`p-3 text-center ${styles.columnDivTwo}`}>
            Marketing and sales
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col sm={6} md={6} lg={6} xl={4} xxl={4}>
          <Image src={image} className={`${styles.customImage}`} />
        </Col>
        <Col
          sm={6}
          md={6}
          lg={6}
          xl={4}
          xxl={4}
          className="d-flex flex-column align-items-start align-items-sm-center  mt-0 mt-sm-0 mt-3"
        >
          <h3>Customer support</h3>
          <div>
            {items.map((item, index) => (
              <p key={index} className={`text-start ${styles.secondPara}`}>
                <Image
                  src={bullet}
                  style={{ width: "8px", height: "8px" }}
                  className="mx-3"
                />
                {item}
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SupportSection;
