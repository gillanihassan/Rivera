import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import NavbarLogo from "../../../../assets/images/navbar/navbarLogo.png";

function CustomNavbar() {
  const [isFluid, setIsFluid] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsFluid(window.innerWidth < 1400);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar expand="lg" className={`${styles.navbar}`}>
      <Container fluid={isFluid}>
        <Navbar.Brand href="#">
          <Image src={NavbarLogo} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles.customToggler}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" className={styles.navLink}>
              How It Works
            </Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>
              Examples
            </Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>
              Testimonials
            </Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>
              About Us
            </Nav.Link>
          </Nav>
          <Button className={styles.navbarBtn}>Book a Free Consultation</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
