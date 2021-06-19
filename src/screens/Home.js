import { Button, Row, Container, Col } from "react-bootstrap";
import ParticleBackground from "../components/ParticleBackground";
import MediaQuery from "react-responsive";
import "../css/HomeScreen.css";
import "../css/HoverAnimation.css";
import "../sass/buttonAnimation.scss";

export default function Home() {
  return (
    <div>
      <div>
        <ParticleBackground />
        <UpperHalf />
        {/* <LowerHalf /> */}
      </div>
    </div>
  );
}

function UpperHalf() {
  return (
    <div className="center_all">
      <h1 className="custom-subTitle">Hi, my name is</h1>
      <h1 className="custom-title" data-text="Vignesh Marimuthu">
        Vignesh Marimuthu
      </h1>

      <Container>
        <Row className="justify-content">
            <a href="/personal" class="personal-link">
              Personal→
            </a>
            <a href="/professional" class="personal-link">
              Professional→
            </a>
        </Row>
      </Container>
    </div>
  );
}

function LowerHalf() {
  return (
    <div id="bottom_div">
      <div className="center_all">
        <h1 className="custom-subTitle">
          How would you like to know about me?
        </h1>
        <Container>
          <Row className="justify-content-center">
            <Button
              variant="outline-dark"
              className="btn fourth"
              href="/personal"
            >
              Personal
            </Button>
            <Button
              variant="outline-dark"
              className="btn fourth"
              href="/professional"
            >
              professional
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

/* <div>
<div >
  <ParticleBackground />
  <div className="top-box " id="top_div">
    <h1 className="custom-subTitle">Hai, I am</h1>
    <h1 className="gradient-text custom-title">Vignesh Marimuthu</h1>
    <h1 className="custom-subTitle">
      the Zodiac Coder | Android dev based in India
    </h1>
  </div>

  <div className="bottom_div">
    <div className="question">
      <h1 className="custom-subTitle">
        How would you like to know about me?
      </h1>
      <Row>
        <Col>
          <Button variant="outline-primary" href="/personal">Personal</Button>
        </Col>
        <Col>
          <Button variant="outline-primary" href="/professional">Professional</Button>
        </Col>
      </Row>
    </div>
  </div>
</div>
</div> */
