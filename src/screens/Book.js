import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ARTICLE_QUERY from "../queries/article";
import ReactMarkdown from "react-markdown";

export default function Book() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: { id },
  });

  if (loading) {
    return (
      <div className="bookScreen superPadding blog">
        <div className="spinner"></div>
      </div>
    );
  }
  if (error) return `Error! ${error.message}`;

  if (data) {
    return (
      <div className="bookScreen superPadding fullScreen">
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
          <ReactMarkdown children={data.articles[0].content} />
        </div>
      </div>
    );
  }
}
