import { useQuery } from "@apollo/client";
import CATEGORIES_QUERY from "../queries/categories";
import ARTICLES_QUERY from "../queries/articles";
import ARTICLE_CATEGORY_QUERY from "../queries/article-category";
import Query from "../components/Query";
import React, { useState } from "react";
import BooksList from "./subComponents/BooksList";

export default function Blog() {
  const [category, updateCategory] = useState("All");

  return (
    <div className="blog superPadding fullScreen">
      <HeaderSection />
      <CategoriesSection onSelectCategory={updateCategory} />
      <div className="space"></div>
      <div className="space"></div>
      <BooksSection category={category} />
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="superTitlePrimary colorSecondary">Book Notes</div>
      <div className="subHeadingSecondary colorPrimary">
        You can find my Book Notes and Summary of my very favourite books here.
        Please note, that these are not a review of the book, but simply my
        observations of how I perceived the book.
      </div>
      <div className="space"></div>
      <div className="space"></div>
    </div>
  );
}

function CategoriesSection({ onSelectCategory }) {
  return (
    <div>
      <Query query={CATEGORIES_QUERY}>
        {({ data, loading }) => {
          if (loading) return <div className="spinner"></div>;
          if (data) {
            return (
              <div className="categoriesContainer">
                <button
                  // eslint-disable-next-line
                  href="javascript:void(0)"
                  className="category-link categoryText colorSecondary"
                  onClick={() => onSelectCategory("All")}
                >
                  All
                </button>
                {data.categories.map((category) => {
                  return (
                    <button
                      className="category-link categoryText colorSecondary"
                      key={category.slug}
                      onClick={() => onSelectCategory(category.name)}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
            );
          }
        }}
      </Query>
    </div>
  );
}

function BooksSection({ category }) {
  if (category === "All") {
    return <FullBooks />;
  } else {
    return <PartBooks category={category} />;
  }
}

function FullBooks() {
  //fetch All Books
  const { loading, error, data } = useQuery(ARTICLES_QUERY);

  if (loading) return <div></div>;
  if (error) return `Error! ${error.message}`;

  if (data) {
    return <BooksList data={data} />;
  }
}

function PartBooks({ category }) {
  //Fetch Books based on Category Slug
  const { loading, error, data } = useQuery(ARTICLE_CATEGORY_QUERY, {
    variables: { category },
  });

  if (loading) return <div></div>;
  if (error) return `Error! ${error.message}`;

  if (data) {
    return <BooksList data={data} />;
  }
}
