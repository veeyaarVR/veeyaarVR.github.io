import gql from "graphql-tag";

const SCRIBBLE_QUERY = gql`
  query Scribble($id: String!) {
    scribbles(where: {slug: $id}) {
      slug
      title
      content
      date
    }
  }
`;

export default SCRIBBLE_QUERY;
