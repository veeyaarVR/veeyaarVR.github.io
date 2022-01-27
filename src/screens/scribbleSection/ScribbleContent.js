import SCRIBBLE_QUERY from "../../queries/scribble";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ScribbleContent() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(SCRIBBLE_QUERY, {
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
            {data.scribbles[0].title} | Scribbles | Vignesh Marimuthu
          </title>
        </Helmet>
        <div className="bookScreen superPadding fullScreen">
          <div className="colorPrimary paddingVertical  homeLink">
            <div className="space"></div>
            <div className="space"></div>
            <p>
              <a href="/">VIGNESH MARIMUTHU </a> /
              <a href="/personal"> PERSONAL </a> /
              <a href="/personal/scribbles"> SCRIBBLES </a> /
            </p>
            <div className="bottomLine"> </div>
          </div>
          <div className="padding25 bottomLine">
            <h1
              className="superTitlePrimary colorSecondary "
              data-text="Vignesh Marimuthu"
            >
              {data.scribbles[0].title}
            </h1>
          </div>

          <div className="scribbleContent content padding25">
            <ReactMarkdown children={data.scribbles[0].content} />
          </div>
        </div>
      </div>
    );
  }
}
