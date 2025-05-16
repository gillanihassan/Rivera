import { Container } from "react-bootstrap";
import styles from "./styles.module.css";

function AnnouncementBar() {
  return (
    <Container fluid className={`text-center  ${styles.mainContainer}`}>
      <p className={`${styles.customPara}`}>
        Unlock Free Business Checking with $0 Monthly Maintenance!
        <a href="#" className={`${styles.customLink}`}>
          Explore Now
        </a>
      </p>
    </Container>
  );
}

export default AnnouncementBar;
