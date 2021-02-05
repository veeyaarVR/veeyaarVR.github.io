import { Button, Row, Container } from "react-bootstrap";
import ParticleBackground from "../components/ParticleBackground";
import "../css/HomeScreen.css";
import "../css/HoverAnimation.css";
import "../sass/gradientText.scss";
import "../sass/buttonAnimation.scss";

export default function Home() {
  return (
    <div>
      <div>
        <ParticleBackground />
        <UpperHalf />
        <LowerHalf />
      </div>
    </div>
  );
}

function UpperHalf() {
  return (
    <div id="top_div">
      <div className="center_all">
        <h1 className="custom-subTitle">Hai, I am</h1>
        <h1 className="custom-title glitch" data-text="Vignesh Marimuthu">
          Vignesh Marimuthu
        </h1>
        <h1 className="custom-subTitle">
          the Zodiac Coder | Android dev based in India
        </h1>
      </div>
    </div>
  );
}

function LowerHalf() {
  return (
    <div id="bottom_div">
      <div className="center_all">
        <h1 className="question">
          How would you like to know about me?
        </h1>
        <Container>
          <Row className="justify-content-center">
            <Button
              variant="outline-dark"
              href="/personal"
            >
              Personal
            </Button>
            <Button
              variant="outline-dark"
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
