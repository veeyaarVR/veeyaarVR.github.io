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

        <div className="landing">
          <div className="flex flex-dir-c flex-ai-c flex-jc-c superPaddingVertical">
            <div>
              <img
                src="https://cloud.appwrite.io/v1/storage/buckets/66f01cea000b336dfed6/files/66f01e3000339a63e72d/view?project=667bc0b800308c325c54&project=667bc0b800308c325c54&mode=admin"
                alt="round images" 
                className="round-image"
              ></img>
            </div>
            <div className="spacer"></div>
            <h1 className="smallHeadingPrimary colorSecondary">
              👋 Hi, I am Vignesh Marimuthu
            </h1>
            <div className="spacer"></div>
            <h2 className="alignCenter">Building pixel perfect✨ scalable📈 high quality<br></br>mobile applications📱in Native Android framework.</h2>

            <div className="flex flex-ai-c flex-jc-c">
          <Link href="https://github.com/veeyaarVR">
            <FontAwesomeIcon
              className="socialIcon fa-xl"
              icon={faGithub}
              
            />
          </Link>
          <Link href="https://www.youtube.com/@BeingAverageEngineer">
            <FontAwesomeIcon className="socialIcon fa-xl" icon={faYoutube} />
          </Link>
          <Link href="https://blog.vigneshmarimuthu.com">
            <FontAwesomeIcon className="socialIcon fa-xl" icon={faHashnode}  />
          </Link>
          <Link href="https://play.google.com/store/apps/developer?id=Vignesh+Marimuthu">
            <FontAwesomeIcon className="socialIcon fa-xl" icon={faGooglePlay} />
          </Link>
          <Link href="https://www.linkedin.com/in/vignesh-marimuthu-023552184/">
            <FontAwesomeIcon className="socialIcon fa-xl" icon={faLinkedin}  />
          </Link>
        </div>
          </div>
          <IntroSection></IntroSection>
        </div>

        <div className="dark-layer">
        <ParticleComponent />

        </div>
      </div>
    </main>
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
