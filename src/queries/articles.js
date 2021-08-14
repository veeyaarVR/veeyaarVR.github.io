import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Book {
    articles {
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

export default ARTICLES_QUERY;
