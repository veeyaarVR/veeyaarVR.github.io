import { Link } from "react-router-dom";

export default function BooksList({data}) {
    return (
      <div className="books">
        {data.articles.map((item, index) => {
          return (
            <Link to={`/personal/blog/${item.slug}`} className="book" key={item.slug}>
              <div
                className="book__image"
                style={{
                  backgroundImage: `url(${item.image.url})`,
                }}
              ></div>
              <div className="book__content ">
                <div className="book__title titlePrimary colorPrimary">
                  {item.title}
                </div>
                <div className="book__author smallHeadingSecondary colorPrimary">
                {item.author.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }