import { Row, Container, Col } from "react-bootstrap";

let interestList = [
  "Minimalism",
  "Atheism",
  "Periyaar",
  "Ambedkar",
  "Nolan Movies",
  "U1 Songs",
  "Solo Bike Rides",
  "Mech KB",
  "Coding",
  "Sci-Fi Movies",
  "Vijay Antony",
  "Torantino",
  "Long Car Rides",
  "Ilayaraja",
  "Paulo Coelho",
  "Communism",
  "Cs:GO",
  "Ginger Tea",
  "Slow living",
  "Naruto",
  "Beach",
  "Train Travel",
  "Bomb Squad",
  "Desk Setup",
  "Solid Tee",
  "Santhosh Narayanan",
  "Pradeep Kumar",
  "MKBHD",
  "Mysskin",
  "Time Travel",
];

let shortStory =
  "A full-time Android Dev based in India, who also runs a YouTube Channel and a blog, where I post and write tech tutorials. (Yeah! Nerd.)\nSelectively social, constant learner, cis-het, rarely creative, occasionally good lookin and an abnormal human.   ";

export default function Personal() {
  return (
    <div className="personal">
      <section className="personalIntro">
        <IntroSection />
      </section>
      <section className="personalIntro">
        <LikesSection />
      </section>

    </div>
  );
}

function IntroSection() {
  return (
    <div className="homeContainer">
      <h1 className="subHeadingFiraGreen">🤘 HI, I AM VIGNESH MARIMUTHU</h1>
      <h1 className="superTitleWhite" data-text="Vignesh Marimuthu">
        Minimalist | Stoic | Software Dev | Atheist | Human
      </h1>
    </div>
  );
}

function LikesSection() {
  return (
    <div className="likesCenter">
      <div className="subHeadingEpilogueWhite padding25">
        If you could vibe to a lot of the below, we can be great friends 🙌
      </div>
      <div className="likesContainer">
        {interestList.map((item, index) => {
          return <a class="interests buttonText">{item}</a>;
        })}
      </div>
    </div>
  );
}
