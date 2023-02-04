import ParticleComponent from "@/components/ParticleComponent";
import {
  faTwitter,
  faReddit,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Vignesh Marimuthu | Portfolio, Scribbles & Stuff
        </title>
        <meta
          name="description"
          content="This is my personal blog which tells a lot about who I am and my opinions, that nobody asked for"
          key="desc"
        />
        <meta name="image" content="https://vigneshmarimuthu.com/logo512.png" />
        <meta property="og:image" content="https://vigneshmarimuthu.com/logo512.png"></meta>

      </Head>
      <div >
        <ParticleComponent />
        <div className="homeContainer">
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
      </div>
    </main>
  )
}
