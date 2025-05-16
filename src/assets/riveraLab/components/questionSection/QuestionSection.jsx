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
          color: "black",
          cursor: "pointer",
        }}
      >
        {isActive ? "−" : "+"}
      </span>
    </div>
  );
};

const QuestionSection = () => {
  const [activeKey, setActiveKey] = useState("2");

  const items = [
    {
      title: "What specific problems can AI automation solve in my business?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      title: "Can AI automation be built around my industry and company size?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      title: "What is the typical implementation timeline for AI automation?",
      body: "The implementation timeline can vary based on the complexity of the solution and your specific needs. Typically, it ranges from a few weeks for basic automation setups to several months for more comprehensive integrations. We work closely with your team to ensure a smooth and timely implementation.",
    },
    {
      title: "How will AI automation affect my existing workforce?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      title: "What are the ongoing costs after initial setup?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      title:
        "How does AI automation integrate with other digital transformation initiatives?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      title: "What kind of data is required to start using AI automation?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      title:
        "What happens if the AI automation doesn't deliver the expected results?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
    {
      title:
        "Can I see case studies or examples of similar businesses that have successfully implemented AI automation?",
      body: "Our AI tools help automate lead qualification for better conversion rates.",
    },
  ];

  return (
    <div
      fluid
      className={`container-xxl text-white py-5 mb-5 ${styles.mainContainer}`}
    >
      <Row className=" mb-4">
        <Col xxl={12} className="d-flex justify-content-center">
          <h2 className={`justify-content-center  ${styles.mainHeading}`}>
            Frequently Asked Questions
          </h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xl={9} xxl={8}>
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
                  <h5 className={`${styles.title}`}>{item.title}</h5>
                </CustomToggle>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body className="px-4 py-2">
                    <span className={styles.body}>{item.body}</span>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default QuestionSection;
