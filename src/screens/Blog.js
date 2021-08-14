import { useQuery } from "@apollo/client";
import CATEGORIES_QUERY from "../queries/categories";
import ARTICLES_QUERY from "../queries/articles";
import { Link } from "react-router-dom";
import { Component } from "react";

let categoryList = [
  "Politics",
  "Fascism",
  "Life",
  "Fiction",
  "Fantasy",
  "Non-Fiction",
  "Poem",
  "Business",
  "Self-help",
  "Love",
  "Philosophy",
  "Religion",
  "Mystery",
  "Crime",
];

let booksList = [
  "Paulo Coelho",
  "Harry Potter",
  "Ikigai",
  "Paulo Coelho",
  "Harry Potter",
  "Ikigai",
];

export default function Blog() {
  return (
    <div className="blog superPadding fullScreen">
      <HeaderSection />
      <CategoriesSection />
      <div className="space"></div>
      <div className="space"></div>
      <BooksSection />
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="superTitleGreen">Book Notes</div>
      <div className="subHeadingFiraWhite">
        You can find my Book Notes and Summary of my very favourite books here.
        Please note, that these are not a review of the book, but simply my
        observations of how I percieved the book.
      </div>
      <div className="space"></div>
      <div className="space"></div>
    </div>
  );
}

function CategoriesSection() {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  if (loading) return <div></div>;
  if (error) return `Error! ${error.message}`;

  if (data) {
    return (
      <div className="likesContainer">
        {data.categories.map((category) => {
          return (
            <a className="interests buttonText" key={category.slug}>
              {category.slug}
            </a>
          );
        })}
      </div>
    );
  }
}

function BooksSection() {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);
  if (loading) return <div></div>;
  if (error) return `Error! ${error.message}`;

  if (data) {
    return (
      <div className="books">
        {data.articles.map((item, index) => {
          return (
            <Link to={`/personal/blog/${item.slug}`} className="book">
              <div
                className="book__image"
                style={{
                  backgroundImage: `url(${item.image.url})`,
                }}
              ></div>
              <div className="book__content ">
                <div className="book__title titleEpilogueGreen">
                  {item.title}
                </div>
                <div className="book__description smallHeadingEpilogueWhite">
                  {item.description}
                </div>
              </div>
              <div className="book__date smallHeadingEpilogueGreen">
              {item.author.name}
              </div>
              <div className="book__categories"></div>
            </Link>
          );
        })}
      </div>
    );
  }
}
