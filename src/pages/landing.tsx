import { faMedium, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
    <br></br>Selectively social, constant learner, cis-het, creative at night, motivated during shower,
    occasionally good lookin and a humble human being. Belongs to House Targaryen.<br></br>
    <br></br>I am that guy, who cuts your call and texts you back, <i>I&apos;ll call you
      later</i>, but never does.
  </>
);
export default function Personal() {
  return (
    <main>
      <Head>
        <title>
          Personal | Vignesh Marimuthu
        </title>
        <meta
          name="description"
          content="This is my personal blog which tells a lot about who I am and my opinions, that nobody asked for"
          key="desc"
        />
        <meta name="image" content="https://vigneshmarimuthu.com/logo512.png" />
        <meta property="og:image" content="https://vigneshmarimuthu.com/logo512.png"></meta>

      </Head>
        {/* <ParticleComponent /> */}
        <div className="landingContainer flex-jc-sb">
          <div className="stickyContainer flex-jc-sb">
            <h1 className="smallHeadingPrimary colorSecondary">
              👋 Hello there, my name is
            </h1>
            <h1
              className="superTitlePrimary colorPrimary"
              data-text="Vignesh Marimuthu"
            >
              Vignesh Marimuthu
            </h1>

            <div className="flex flex-jc-start">
              <Link
                href="/personal"
                className="personal-link buttonText colorSecondary"
              >
                Personal →
              </Link>
              <Link
                href="/professional"
                className="personal-link buttonText colorSecondary"
              >
                Professional →
              </Link>
            </div>
          </div>
          <div className="regularContainer">
            <ShortStorySection />
          <ShortStorySection />
          <ShortStorySection />

          </div>
        </div>


    </main>

  );
}

function IntroSection() {
  return (
    <div className="superPaddingVertical flex flex-jc-sa flex-ai-s superPadding introContainer">
      <div className="flexThirty">
        <h1 className="superTitleSecondary colorPrimary padding">
          VIGNESH MARIMUTHU
        </h1>
        <h1
          className="subHeadingPrimary colorSecondary"
        >
          Senior Android Developer
        </h1>
      </div>
      <p className="subHeadingSecondary colorPrimary superPadding textAlignJustify">
        {shortStory}
      </p>
    </div>
  );
}

function ShortStorySection() {
  return (
      <div className="">
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
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-ai-c flex-jc-c superPadding">
      <div>
        <div className="subHeadingSecondary colorSecondary subHeadingSecondary-align-center padding25">
          Connect with me even if you don&apos;t vibe with any of the above 🙌
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
