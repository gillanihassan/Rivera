import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import imgOne from "../../../images/choose/imgOne.png";
import imgTwo from "../../../images/choose/imgTwo.png";
import imgThree from "../../../images/choose/imgThree.png";
import imgFour from "../../../images/choose/imgFour.png";
import imgFive from "../../../images/choose/imgFive.png";
import imgSix from "../../../images/choose/imgSix.png";

function ChooseUs() {
  const cardData = [
    {
      title: "Generate and Qualify Leads",
      text: "Our chatbots leverage AI to identify and qualify leads, optimizing the conversion process by focusing on prospects with a high likelihood of closing. This increases the efficiency of the sales team and enhances customer loyalty.",
      image: imgOne,
    },
    {
      title: "24-Hour Assistance",
      text: "We provide an uninterrupted customer service experience, ensuring that every inquiry is immediately addressed, which improves customer satisfaction and loyalty while capturing sales opportunities at any moment.",
      image: imgTwo,
    },
    {
      title: "Cost Reduction",
      text: "Our chatbots optimize operational expenses by handling routine tasks and standard inquiries, reducing the need for a large customer support team. This allows for the reallocation of human resources to higher-value roles, decreasing labor costs and boosting overall productivity.",
      image: imgThree,
    },
    {
      title: "Sales Increase",
      text: "Our chatbots are designed to be the perfect, tireless salesperson. Capable of interacting with customers in real time, guiding them through the purchasing process, and suggesting additional products, our chatbots drive a significant increase in sales.",
      image: imgFour,
    },
    {
      title: "Responding to Frequently Asked Questions",
      text: "Equipped to handle all types of frequently asked questions, our chatbots offer coherent and accurate responses. This improves operational efficiency and allows staff to focus on more complex tasks and strategic decision-making.",
      image: imgFive,
    },
    {
      title: "Advanced AI Functions",
      text: "Our chatbots continuously adapt and learn to provide more human-like and effective interactions. The implementation of these personalized AI features enhances understanding of customer needs and elevates the quality of service.",
      image: imgSix,
    },
  ];
  return (
    <div className={`container-xxl mb-5 ${styles.mainDiv}`}>
      <div className="text-center">
        <h2 className={`${styles.topHeading}`}>Why should you choose us?</h2>
      </div>
      <Row className="g-3 justify-content-center mt-5">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={4}>
            <Card className={`${styles.mainCard}`}>
              <Image
                src={card.image}
                style={{ width: "33px", height: "30px" }}
                className="mx-3"
              />
              <Card.Body>
                <Card.Title className={`${styles.cardTitle}`}>
                  {card.title}
                </Card.Title>
                <Card.Text className={`${styles.cardText}`}>
                  {card.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Col className="d-flex justify-content-center">
        <Button className={`mt-4 ${styles.customButton}`}>
          Book a Free Consultation
        </Button>
      </Col>
    </div>
  );
}

export default ChooseUs;
