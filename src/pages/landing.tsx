import {
  faGithub,
  faGooglePlay,
  faHashnode,
  faLinkedin,
  faLinkedinIn,
  faMedium,
  faReddit,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import ParticleComponent from "@/components/ParticleComponent";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
    <br></br>Selectively social, constant learner, cis-het, creative at night,
    motivated during shower, occasionally good lookin and a humble human being.
    Belongs to House Targaryen.<br></br>
    <br></br>I am that guy, who cuts your call and texts you back,{" "}
    <i>I&apos;ll call you later</i>, but never does.
  </>
);
export default function Personal() {
  return (
    <main>
      <Head>
        <title>Personal | Vignesh Marimuthu</title>
        <meta
          name="description"
          content="This is my personal blog which tells a lot about who I am and my opinions, that nobody asked for"
          key="desc"
        />
        <meta name="image" content="https://vigneshmarimuthu.com/logo512.png" />
        <meta
          property="og:image"
          content="https://vigneshmarimuthu.com/logo512.png"
        ></meta>
      </Head>

      <div>
        <div className="padding25Horizontal">
          <div className="flex flex-dir-c flex-ai-c flex-jc-c superPaddingVertical">
            <div>
              <img
                src="https://cloud.appwrite.io/v1/storage/buckets/66f01cea000b336dfed6/files/66f01e3000339a63e72d/view?project=667bc0b800308c325c54&project=667bc0b800308c325c54&mode=admin"
                alt="round images"
                className="round-image easeIn"
              ></img>
            </div>
            <div className="space"></div>
            <h1 className="smallHeadingPrimary colorSecondary">
              👋 Hi, I am Vignesh Marimuthu
            </h1>
            <div className="space"></div>
            <h2 className="alignCenter">
              Building pixel perfect✨ scalable📈 high quality<br></br>mobile
              applications📱in Native Android framework.
            </h2>

            <div className="flex flex-ai-c flex-jc-c">
              <Link href="https://github.com/veeyaarVR">
                <FontAwesomeIcon className="socialIcon fa-xl" icon={faGithub} />
              </Link>
              <Link href="https://www.youtube.com/@BeingAverageEngineer">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faYoutube}
                />
              </Link>
              <Link href="https://blog.vigneshmarimuthu.com">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faHashnode}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/developer?id=Vignesh+Marimuthu">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faGooglePlay}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/vignesh-marimuthu-023552184/">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faLinkedin}
                />
              </Link>
            </div>
          </div>
          <IntroSection></IntroSection>
          <HighlightCards></HighlightCards>

          <ExperienceSection />
          <ExperienceSection />
        </div>

        <div className="fixed width100 height100">
          <ParticleComponent />
        </div>
      </div>
    </main>
  );
}

function ExperienceSection() {
  return (
    <div className="grid grid-template-col-8">
      <h3 className="grid-col-span-2 smallHeadingPrimary colorSecondary">
        2020 — Present
      </h3>
      <div className="grid-col-span-6">
        <h4>Cumulations Technologies</h4>
        <span>Senior Android Developer</span>
        <div className="space"></div>
        <div className="textAlignJustify">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a huge
          corporation, and a digital product studio.
        </div>
        <div className="flex flex-wrap relative widthFitContent">
          <div className="learnedSkills skillsText colorSecondary">Kotlin</div>
          <div className="learnedSkills skillsText colorSecondary">Flutter</div>
          <div className="learnedSkills skillsText colorSecondary">RxJava</div>
          <div className="learnedSkills skillsText colorSecondary">MLKit</div>
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="superPaddingVertical flex flex-jc-sa flex-ai-s">
      <p className="subHeadingSecondary colorPrimary textAlignJustify">
        {shortStory}
      </p>
    </div>
  );
}

function HighlightCards() {
  return (
    <div className="grid grid-template-col-3 grid-gap-1 superPaddingVertical">
      <div className="grid grid-gap-1 grid-col-span-1 grid-template-col-2 height250px">
        <div className="width100 height100 grid-col-span-1 flex cardHover roundedBorder">
          <div>
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/66f01cea000b336dfed6/files/66f4360d000e72e932bf/view?project=667bc0b800308c325c54&project=667bc0b800308c325c54&mode=admin"
              alt="round images"
              className="locationImage"
            ></img>
          </div>
        </div>
        <div className="width100 height100 grid-col-span-1 flex flex-dir-c flex-ai-c flex-jc-c cardHover roundedBorder ">
        <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faDownload}
                />
                <h3 className="smallHeadingPrimary colorSecondary">Download Resume</h3>
        </div>
      </div>
      <div className="grid grid-col-span-2 roundedBorder cardHover"></div>
    </div>
  );
}
