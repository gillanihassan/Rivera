import LogoOne from "../../../images/logoSection/logo1.png";
import LogoTwo from "../../../images/logoSection/logo2.png";
import LogoThree from "../../../images/logoSection/logo3.png";
import LogoFour from "../../../images/logoSection/logo4.png";
import LogoFive from "../../../images/logoSection/logo5.png";
import LogoSix from "../../../images/logoSection/logo6.png";
import styles from "./styles.module.css";

import { Col, Image, Row } from "react-bootstrap";

function LogoSection() {
  return (
    <div className={`container-xxl mt-5 mb-5 ${styles.mainContainer}`}>
      <Row className="align-items-center">
        <Col
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          className="d-flex justify-content-center"
        >
          <Image src={LogoOne} />
        </Col>
        <Col
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          className="d-flex justify-content-center"
        >
          <Image src={LogoTwo} />
        </Col>
        <Col
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          className="d-flex justify-content-center"
        >
          <Image src={LogoThree} />
        </Col>
        <Col
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          className="d-flex justify-content-center"
        >
          <Image src={LogoFour} />
        </Col>
        <Col
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          className="d-flex justify-content-center"
        >
          <Image src={LogoFive} />
        </Col>
        <Col
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          className="d-flex justify-content-center"
        >
          <Image src={LogoSix} />
        </Col>
      </Row>
    </div>
  );
}

export default LogoSection;
