import { Button, Row, Container} from "react-bootstrap";
import ParticleBackground from "../components/ParticleBackground";
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
