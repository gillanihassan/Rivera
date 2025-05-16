import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import Heroimage from "../../../../assets/images/heroSection/Heroimage.png";
import RatingStars from "../../../../assets/images/heroSection/RatingStars.png";
import TestimonialOne from "../../../../assets/images/heroSection/TestimonialOne.png";
import TestimonialTwo from "../../../../assets/images/heroSection/TestimonialTwo.png";

import styles from "./styles.module.css";

function HeroSection() {
  return (
    <div className={`container-xxl mt-0 mt-md-5 ${styles.mainDiv}`}>
      <Row className="align-items-center text-md-start text-center">
        {/* Image Column - will appear first on small screens */}
        <Col
          md={6}
          className="d-flex justify-content-md-end justify-content-center order-1 order-md-2 mb-4 "
        >
          <Image src={Heroimage} className={`${styles.heroImage}`} />
        </Col>

        {/* Text Content Column */}
        <Col
          md={6}
          className="order-2 order-md-1 d-flex flex-column align-items-md-start align-items-start text-start"
        >
          <Image src={RatingStars} className="mb-2" />
          <h1 className={`${styles.mainHeading}`}>
            Empower Your Business with{" "}
            <span className={`${styles.mainHeadinSpan}`}> AI Support </span> &
            <span className={`${styles.mainHeadinSpan}`}>
              Workflow Automation
            </span>
          </h1>

          <p className={`${styles.paraOne}`}>
            Unleash Your Business Potential with Smart Automation Solutions
          </p>

          <Card className={`mt-4 ${styles.card}`}>
            <Card.Body>
              <Card.Title>
                <Image src={TestimonialOne} />
                <Image
                  src={TestimonialTwo}
                  className={`ms-3 ${styles.testimonialTwo}`}
                />
              </Card.Title>
              <Card.Text className={`${styles.cardText}`}>
                SRiveraLab did an amazing job streamlining my business. I feel
                like a huge weight as been lifted off my shoulders thanks to the
                chatbots and all the integrations they’ve set up for me. Can’t
                thank them enough!
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Button */}
          <Button className={`mt-4 ${styles.customBtn}`}>
            Book a Free Consultation
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
