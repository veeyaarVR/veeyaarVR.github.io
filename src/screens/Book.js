import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ARTICLE_QUERY from "../queries/article";
import ReactMarkdown from "react-markdown";
import AudioComponent from "./subComponents/AudioComponent";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioSeekBar from "./subComponents/AudioSeekBar";
import { Helmet } from "react-helmet";

export default function Book() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: { id },
  });

  if (loading) {
    return (
      <div className="bookScreen superPadding blog">
        <h5 className="colorSecondary">fetching content. please wait</h5>
        <div className="spinner"></div>
      </div>
    );
  }
  if (error) return `Error! ${error.message}`;

  if (data) {
    return (
      <div>
        <Helmet>
          <title>
            {data.articles[0].title} | Book Notes | Vignesh Marimuthu
          </title>
          <meta name="title" content={data.articles[0].title} />
          <meta property="og:type" content="article" />
          <meta name="keywords" content="Book notes, Vignesh Marimuthu" />
          //og tags
          <meta property="og:title" content={data.articles[0].title} />
          <meta
            property="og:description"
            content="Personal Portfolio website of an Average Engineer"
          />
          <meta property="og:image" content={data.articles[0].image.url} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={data.articles[0].title} />
          <meta
            property="twitter:description"
            content="Personal Portfolio website of an Average Engineer"
          />
          <meta property="twitter:image" content={data.articles[0].image.url} />
        </Helmet>
        <div className="bookScreen superPadding fullScreen">
          <div className="colorPrimary paddingVertical  homeLink">
            <div className="space"></div>
            <div className="space"></div>
            <p>
              <a href="/">VIGNESH MARIMUTHU </a> /
              <a href="/personal"> PERSONAL </a> /
              <a href="/personal/blog"> BLOG </a> /
            </p>
            <div className="bottomLine"> </div>
          </div>
          <div className="padding25 bottomLine">
            <h1
              className="superTitlePrimary colorSecondary "
              data-text="Vignesh Marimuthu"
            >
              {data.articles[0].title}
            </h1>

            <div className="subHeadingSecondary colorPrimary">
              by {data.articles[0].author.name}
            </div>
          </div>

          <div className="content padding25">
            <ShowAudioComponent data={data} />
            <ReactMarkdown children={data.articles[0].content} />
          </div>
        </div>
      </div>
    );
  }
}

function ShowAudioComponent({ data }) {
  if (data.articles[0].audio != null) {
    return (
      <div className="bottomPadding">
        <div className="player">
          <AudioPlayerProvider>
            <AudioComponent url={data.articles[0].audio.url} />
            <AudioSeekBar />
          </AudioPlayerProvider>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
