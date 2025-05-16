import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  useAccordionButton,
  Card,
  Image,
  Button,
} from "react-bootstrap";
import topicon from "../../../../assets/images/BusinessStruggles/topicon.png";
import footerimg from "../../../../assets/images/BusinessStruggles/footerimg.png";
import imgOne from "../../../../assets/images/BusinessStruggles/imgOne.png";
import imgTwo from "../../../../assets/images/BusinessStruggles/imgTwo.png";
import imgThree from "../../../../assets/images/BusinessStruggles/imgThree.png";
import imgFour from "../../../../assets/images/BusinessStruggles/imgFour.png";
import imgFive from "../../../../assets/images/BusinessStruggles/imgFive.png";
import styles from "./styles.module.css";

const CustomToggle = ({ children, eventKey, isActive, onClick }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    onClick(eventKey)
  );

  return (
    <div
      onClick={decoratedOnClick}
      className={`d-flex justify-content-between align-items-center p-3 ${
        isActive ? styles.activeHeader : styles.inactiveHeader
      }`}
    >
      <span>{children}</span>
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          cursor: "pointer",
        }}
      >
        {isActive ? "−" : "+"}
      </span>
    </div>
  );
};

const BusinessStruggles = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      emoji: imgOne,
      title: "Too much time on lead qualification?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      emoji: imgTwo,
      title: "Need round the clock support?",
      body: "Our chatbots deliver 24/7 assistance, boosting customer satisfaction and capturing sales anytime.",
    },
    {
      emoji: imgThree,
      title: "Spending too much on customer service teams?",
      body: "Cut down your customer service cost with our AI automation.",
    },
    {
      emoji: imgFour,
      title: "Missing potential sales?",
      body: "Don’t let opportunities slip — our system follows up on every lead.",
    },
    {
      emoji: imgFive,
      title: "Do your customer interactions feel too mechanical?",
      body: "We humanize AI interactions to build better relationships with your customers.",
    },
  ];

  return (
    <div
      fluid
      className={`container-xxl text-white py-5 mb-5 ${styles.mainContainer}`}
    >
      <Row className=" mb-4">
        <Col xxl={12} className="d-flex justify-content-center">
          <Image src={topicon} />
        </Col>
        <Col xxl={12} className="d-flex justify-content-center">
          <h2 className={`justify-content-center ${styles.topHeading}`}>
            Is Your Business Struggling?
          </h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xl={9} xxl={9}>
          <Accordion activeKey={activeKey}>
            {items.map((item, index) => (
              <Card
                key={index}
                className={`mb-2 ${
                  activeKey === String(index)
                    ? styles.activeCard
                    : styles.inactiveCard
                }`}
              >
                <CustomToggle
                  eventKey={String(index)}
                  isActive={activeKey === String(index)}
                  onClick={(key) =>
                    setActiveKey(activeKey === key ? null : key)
                  }
                >
                  <div className="d-flex">
                    <Image src={item.emoji} className={styles.customEmoji} />
                    <h4 className={`mx-3 ${styles.title}`}>{item.title}</h4>
                  </div>
                </CustomToggle>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body className="px-4 py-2">
                    <span className={styles.body}>{item.body}</span>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h4 className={`text-center mt-4 ${styles.footerHeading}`}>
              Boost your business with AI solutions. Save money, work smarter,
              and serve customers better!
            </h4>
            <div>
              <Image src={footerimg} className="mt-2" />
            </div>
          </div>

          <div className="text-center mt-3">
            <Button className={styles.customButton}>Get Started</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BusinessStruggles;
