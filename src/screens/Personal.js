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

const shortStory = (
  <>
    A full-time Android Dev based in India, who also runs a{" "}
    <a
      href="https://www.youtube.com/channel/UCUjFwZ-SEMK5k-i24VzRu0w?sub_confirmation=1"
      target="_blank"
      class="buttonText"
    >
      YouTube Channel
    </a>{" "}
    and a{" "}
    <a
      href="https://beingaverageengineer.com/"
      target="_blank"
      class="buttonText"
    >
      Blog
    </a>
    , where I post and write tech tutorials. (Yeah! Nerd.)<br></br>
    <br></br>Selectively social, constant learner, cis-het, rarely creative,
    occasionally good lookin and an abnormal human.<br></br>
    <br></br>I am that guy, who cuts your call and texts you back, I'll call you
    later, but never does.
  </>
);
export default function Personal() {
  return (
    <div className="personal">
      <IntroSection />
      <ShortStorySection />
      <LikesSection />
    </div>
  );
}

function IntroSection() {
  return (
    <div className="fullScreen flex flex-ai-c superPadding">
      <div>
        <h1 className="subHeadingFiraGreen">🤘 HI, I AM VIGNESH MARIMUTHU</h1>
        <div className="space"> </div>
        <h1 className="superTitleWhite" data-text="Vignesh Marimuthu">
          He/Him | Minimalist | Stoic | Atheist | Human
        </h1>
        <div className="space"> </div>
        <a href="/personal" class="personal-link buttonText ">
          View Blog →
        </a>
      </div>
    </div>
  );
}

function ShortStorySection() {
  return (
    <div>
      <div className="fullScreen flex flex-jc-sa flex-ai-c superPadding">
        <h1 className="superTitleGreen padding25" data-text="Vignesh Marimuthu">
          ShortStory
        </h1>
        <p className="subHeadingFiraWhite padding25">{shortStory}</p>
      </div>
      <div className="space"> </div>
    </div>
  );
}

function LikesSection() {
  return (
    <div className="fullScreen flex flex-ai-c flex-jc-c superPadding">
      <div>
        <div className=" subHeadingEpilogueWhite subHeadingEpilogueWhite-align-center padding25">
          If you could vibe to a lot of the below, we can be great friends 🙌
        </div>
        <div className="likesContainer">
          {interestList.map((item, index) => {
            return <a class="interests buttonText">{item}</a>;
          })}
        </div>
      </div>
    </div>
  );
}
