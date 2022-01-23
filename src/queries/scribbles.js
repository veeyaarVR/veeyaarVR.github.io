import gql from "graphql-tag";

const SCRIBBLES_QUERY = gql`
  query Scribble {
    scribbles(sort: "date:desc") {
      slug
      title
      date
    }
  }
`;

export default SCRIBBLES_QUERY;
