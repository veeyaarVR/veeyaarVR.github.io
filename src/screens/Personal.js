import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faReddit, faMedium } from "@fortawesome/free-brands-svg-icons";

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
      className="buttonText colorSecondary"
    >
      YouTube Channel
    </a>{" "}
    and a{" "}
    <a
      href="https://beingaverageengineer.com/"
      className="buttonText colorSecondary"
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
      <SocialLinks />
    </div>
  );
}

function IntroSection() {
  return (
    <div className="fullScreen flex flex-ai-c superPadding">
      <div>
        <h1 className="smallHeadingPrimary colorSecondary">🤘 HI, I AM VIGNESH MARIMUTHU</h1>
        <h1 className="superTitlePrimary colorPrimary" data-text="Vignesh Marimuthu">
          He/Him | Minimalist | Stoic | Atheist | Human
        </h1>
        <div className="space"> </div>
        <a href="/personal/blog" className="personal-link buttonText colorSecondary">
          View Blog →
        </a>
      </div>
    </div>
  );
}

function ShortStorySection() {
  return (
    <div className="fullScreen">
      <div className="flex flex-jc-sa flex-ai-c superPadding">
        <h1 className="superTitlePrimary  padding25 colorSecondary" data-text="Vignesh Marimuthu">
          ShortStory
        </h1>
        <p className="subHeadingSecondary padding25 colorPrimary textAlignCenter">{shortStory}</p>
      </div>
    </div>
  );
}

function LikesSection() {
  return (
    <div className="fullScreen flex flex-ai-c flex-jc-c superPadding">
      <div>
        <div className="subHeadingPrimary subHeadingSecondary-align-center padding25 colorPrimary">
          If you could vibe to a lot of the below, we can be great friends ✌️
        </div>
        <div className="likesContainer">
          {interestList.map((item, index) => {
            let url = "https://www.google.com/search?q=" + item
            return <a href={url} key={url} className="interests buttonText colorSecondary">{item}</a>;
          })}
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="fullScreen flex flex-ai-c flex-jc-c superPadding">
      <div>
        <div className=" subHeadingSecondary colorSecondary subHeadingSecondary-align-center padding25">
          Connect with me even if you don't vibe with any of the above 🙌
          <br></br> I desperately need some friends.
        </div>
        <div className="flex flex-ai-c flex-jc-c">
          <a href="https://twitter.com/veeraakurilil">
            <FontAwesomeIcon
              className="socialIcon"
              icon={faTwitter}
              size="2x"
            />
          </a>
          <a href="https://www.instagram.com/paal_paayasam/">
            <FontAwesomeIcon
              className="socialIcon"
              icon={faInstagram}
              size="2x"
            />
          </a>
          <a href="https://www.reddit.com/user/VeeraaKurilil">
            <FontAwesomeIcon
              className="socialIcon"
              icon={faReddit}
              size="2x"
            />
          </a>
          <a href="https://medium.com/@vigneshmarimuthu2302">
            <FontAwesomeIcon
              className="socialIcon"
              icon={faMedium}
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
