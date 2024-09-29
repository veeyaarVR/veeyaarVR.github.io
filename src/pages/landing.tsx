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
import { useRouter } from "next/router";

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
        <div className="absolute fullScreen">
          <ParticleComponent />
        </div>

        <div className=" absolute padding25Horizontal">
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
              <Link href="https://github.com/veeyaarVR" title="View my projects">
                <FontAwesomeIcon className="socialIcon fa-xl" icon={faGithub} />
              </Link>
              <Link href="https://www.youtube.com/@BeingAverageEngineer" title="My YouTube channel">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faYoutube}
                />
              </Link>
              <Link href="https://blog.vigneshmarimuthu.com" title="Read my blog">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faHashnode}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/developer?id=Vignesh+Marimuthu" title="Try my apps">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faGooglePlay}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/vignesh-marimuthu-023552184/" title="Hire me">
                <FontAwesomeIcon
                  className="socialIcon fa-xl"
                  icon={faLinkedin}
                />
              </Link>
            </div>
          </div>
          <HighlightCustomCards></HighlightCustomCards>

          <ExperienceSection />
          <ExperienceSection />
        </div>
      </div>
    </main>
  );
}

function ExperienceSection() {
  return (
    <div className="grid grid-template-col-8 padding25px">
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

function HighlightCustomCards() {
  const router = useRouter();

  return (
    <div className="grid grid-template-col-7  md-grid-template-col-2 grid-gap-1 superPaddingVertical">
      <Link
        className="width100 height100 grid-col-span-2 md-grid-col-span-1 flex cardHover roundedBorder-primary"
        href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9542802,77.4661302,11z"
        target="_blank"
      >
        <div>
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/66f01cea000b336dfed6/files/66f8e3b1000893ac0a3c/view?project=667bc0b800308c325c54&project=667bc0b800308c325c54&mode=admin"
            alt="round images"
            className="locationImage"
          ></img>
        </div>
      </Link>

      <div className="grid grid-gap-1 grid-col-span-5 md-grid-col-span-2 grid-template-row-2">
        <div
          className="width100 height100 grid-col-span-1 cardHover bg-container-secondary roundedBorder-primary"
          onClick={() => {
            router.push("/journal");
          }}
        >
          <div className="padding25px">
            <h2 className="flex-ai-c  superTitlePrimary ">Journal Entries</h2>
            <h3 className="colorSecondary">Take a peek into my tech journal</h3>
          </div>
        </div>
        <div className="grid grid-col-span-1  grid-template-col-2 grid-gap-1">
          <Link href="https://cloud.appwrite.io/v1/storage/buckets/66f01cea000b336dfed6/files/66f8fce600150e8c2826/view?project=667bc0b800308c325c54&project=667bc0b800308c325c54&mode=admin" className="flex flex-dir-c flex-ai-c flex-jc-c  roundedBorder colorTransition cardHover bg-container-primary grid-col-span-1">
            <FontAwesomeIcon className="socialIcon fa-xl" icon={faDownload} />
            <h3 className="smallHeadingPrimary colorSecondary">
              Download Resume
            </h3>
          </Link>
          <div className="roundedBorder cardHover grid-col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
