import { faMedium, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
let interestList = [
    "Minimalism",
    "Atheism",
    "Periyaar",
    "Ambedkar",
    "Nolan Movies",
    "U1 Songs",
    "Solo Bike Rides",
    "F.R.I.E.N.D.S",
    "Game of Thrones",
    "Mech KB",
    "Coding",
    "Harmonica",
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
      <Link
        href="https://www.youtube.com/channel/UCUjFwZ-SEMK5k-i24VzRu0w?sub_confirmation=1"
        className="buttonText colorSecondary"
      >
        YouTube Channel
      </Link>{" "}
      and a{" "}
      <Link
        href="https://blog.vigneshmarimuthu.com/"
        className="buttonText colorSecondary"
      >
        Blog
      </Link>
      , where I post and write tech tutorials. (Yeah! Nerd.)<br></br>
      <br></br>Selectively social, constant learner, cis-het, creative at night, motivated during shower,
      occasionally good lookin and a humble human being. Belongs to House Targaryen.<br></br>
      <br></br>I am that guy, who cuts your call and texts you back, <i>I`&apos;`ll call you
      later</i>, but never does.
    </>
  );
  export default function Personal() {
    return (
      <div className="personal">
        <div className="colorPrimary padding25  homeLink centerHorizontal">
          <Link href="/">⌂ VIGNESH MARIMUTHU</Link>
          <div className="bottomLine"> </div>
        </div>
        <IntroSection />
        <ShortStorySection />
        <LikesSection />
        <SocialLinks />
        <WishListInfo />
      </div>
    );
  }
  
  function IntroSection() {
    return (
      <div className="fullScreen flex flex-jc-c flex-ai-c superPadding">
        <div>
          <h1 className="smallHeadingPrimary colorSecondary">
            🤘 HI, I AM VIGNESH MARIMUTHU
          </h1>
          <h1
            className="superTitlePrimary colorPrimary"
            data-text="Vignesh Marimuthu"
          >
            He/Him. Minimalist. Stoic. Atheist. Human
          </h1>
          <div className="space"> </div>
          <Link
            href="https://blog.vigneshmarimuthu.com"
            className="personal-link buttonText colorSecondary"
          >
            Blog →
          </Link>
          <Link
            href="/personal/scribbles"
            className="personal-link buttonText colorSecondary"
          >
            Scribbles →
          </Link>
        </div>
      </div>
    );
  }
  
  function ShortStorySection() {
    return (
      <div className="">
        <div className="superPaddingVertical flex flex-jc-sa flex-ai-c superPadding">
          <h1
            className="superTitlePrimary  padding25 colorSecondary"
            data-text="Vignesh Marimuthu"
          >
            ShortStory
          </h1>
          <p className="subHeadingSecondary padding25 colorPrimary textAlignCenter">
            {shortStory}
          </p>
        </div>
      </div>
    );
  }
  
  function LikesSection() {
    return (
      <div className="fullScreen superPaddingVertical flex flex-ai-c flex-jc-c superPadding">
        <div>
          <div className="subHeadingPrimary subHeadingSecondary-align-center padding25 colorPrimary">
            If you could vibe to a lot of the below, we can be great friends ✌️
          </div>
          <div className="likesContainer">
            {interestList.map((item, index) => {
              let url = "https://www.google.com/search?q=" + item;
              return (
                <Link
                  href={url}
                  key={url}
                  className="interests buttonText colorSecondary"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  function SocialLinks() {
    return (
      <div className="flex flex-ai-c flex-jc-c superPadding">
        <div>
          <div className="subHeadingSecondary colorSecondary subHeadingSecondary-align-center padding25">
            Connect with me even if you don`&apos;`t vibe with any of the above 🙌
            <br></br> I desperately need some friends.
          </div>
          <div className="flex flex-ai-c flex-jc-c">
            <Link href="https://twitter.com/veeraakurilil">
              <FontAwesomeIcon
                className="socialIcon"
                icon={faTwitter}
                size="2x"
              />
            </Link>
            <Link href="https://www.reddit.com/user/VeeraaKurilil">
              <FontAwesomeIcon className="socialIcon" icon={faReddit} size="2x" />
            </Link>
            <Link href="https://medium.com/@vigneshmarimuthu2302">
              <FontAwesomeIcon className="socialIcon" icon={faMedium} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  function WishListInfo() {
    return (
      <div className="flex flex-ai-c flex-jc-c ">
        <div>
          <div className=" subHeadingSecondary colorPrimary subHeadingSecondary-align-center padding25">
            Incase and unfortunately, if you are already my friend 😅
            <br></br> I have shamelessly made a wishlist of things, that you can
            gift me 🥳
          </div>
          <div className="flex flex-ai-c flex-jc-c">
            <Link
              href="/personal/wishlist"
              className="personal-link buttonText colorSecondary"
            >
              My Wishlist →
            </Link>
          </div>
          <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        </div>
  
      </div>
    );
  }
  