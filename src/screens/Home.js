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
      <h1 className="smallHeadingFiraGreen">Hi, my name is</h1>
      <h1 className="superTitleWhite" data-text="Vignesh Marimuthu">
        Vignesh Marimuthu
      </h1>

      <div className="flex flex-jc-start">
        <a href="/personal" className="personal-link buttonText">
          Personal→
        </a>
        <a href="/professional" className="personal-link buttonText">
          Professional→
        </a>
      </div>
    </div>
  );
}
