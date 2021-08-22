import gql from "graphql-tag";

const ARTICLE_CATEGORY = gql`
  query Article($category: String!) {
    articles(where: {categories: {name: $category}}) {
      slug
      title
      description
      image {
        url
      }
      author {
        name
      }
      categories {
        name
      }
    }
  }
`;

export default ARTICLE_CATEGORY;