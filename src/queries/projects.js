import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
  query Projects {
    projects(sort: "created_at:asc") {
        title
        created_at
        techstack{
            tagname
        }
        content
    }
  }
`;

export default PROJECTS_QUERY;