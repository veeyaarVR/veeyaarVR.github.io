import { Container } from "react-bootstrap";
import ParticleBackground from "../components/ParticleBackground";

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
    <div className="homeContainer">
      <h1 className="subHeadingFiraGreen">Hi, my name is</h1>
      <h1 className="superTitleWhite" data-text="Vignesh Marimuthu">
        Vignesh Marimuthu
      </h1>

      <Container>
        <div className="justify-content">
          <a href="/personal" class="personal-link buttonText">
            Personal→
          </a>
          <a href="/professional" class="personal-link buttonText">
            Professional→
          </a>
        </div>
      </Container>
    </div>
  );
}
