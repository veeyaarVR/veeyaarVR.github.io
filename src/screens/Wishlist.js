import { useQuery } from "@apollo/client";
import WISHLIST_QUERY from "../queries/wishlist";
import ReactMarkdown from "react-markdown";

export default function Wishlist() {
  const { loading, error, data } = useQuery(WISHLIST_QUERY);

  if (loading) {
    return (
      <div className="bookScreen superPadding blog">
        <h5 className="colorSecondary">fetching wishlist. please wait</h5>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) return `Error! ${error.message}`;
  if (data) {
    return (
      <div className="bookScreen superPadding fullScreen">
        <div className="colorPrimary paddingVertical  homeLink">
          <div className="space"></div>
          <p>
            <a href="/">VIGNESH MARIMUTHU </a> /
            <a href="/personal"> PERSONAL </a> /
          </p>
          <div className="bottomLine"> </div>
          <div className="space"></div>
          <div className="space"></div>
        </div>
        <div className="content paddingVertical ">
          <ReactMarkdown children={data.wishlist.content} />
        </div>
      </div>
    );
  }
}
