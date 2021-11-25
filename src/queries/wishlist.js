import gql from "graphql-tag";

const WISHLIST_QUERY = gql`
  query Wishlist {
    wishlist {
      content
    }
  }
`;

export default WISHLIST_QUERY;
