import { Row, Col, Button, Container, Image } from "react-bootstrap";
import profile from "../../assets/ashahiri.jpg";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm="3">
          <Image src={profile} rounded style={{ maxHeight: "15rem" }} />
        </Col>
        <Col sm="9">
          <p>
            Amir Shahirinia received the B.S. and M.S. degrees in electrical
            engineering from the K.N.Toosi University of Technology. He finished
            his Ph.D. in Power Systems under supervision of Prof. A. Nasiri,
            Prof D. C. Yu and Prof. E. Soofi from the University of
            Wisconsin-Milwaukee in 2014.
          </p>
          <p>
            His main research interests are in the areas of Power Systems and
            Renewable Energy Grid Integration, Power Electronics and Motor
            Drives, Statistical Analysis and Modeling of Power Outputs of Smart
            Grids and Optimal Planning and Operation of Hybrid Systems.
          </p>
          <Button
            variant="light"
            size="lg"
            href="https://www.linkedin.com/in/shahirinia/"
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </Button>
          <Button
            variant="light"
            size="lg"
            href="https://scholar.google.com/citations?user=qR7_ldYAAAAJ&hl=en"
          >
            <i class="fa fa-google" aria-hidden="true"></i>
          </Button>
          <Button variant="light" size="lg" href="mailto:Shahirinia@ieee.org">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </Button>
          <Button variant="light" size="lg" href="tel:+1-414-419-1049">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
