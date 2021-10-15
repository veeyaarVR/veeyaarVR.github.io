import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Book($id: String!) {
    articles(where: {slug: $id}) {
      slug
      title
      image {
        url
      }
      content
      author{
        name
      }
      audio {
        url
      }
    }
  }
`;

export default ARTICLE_QUERY;
