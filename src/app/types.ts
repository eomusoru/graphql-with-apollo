import gql from 'graphql-tag';

export interface Course {
  id: number;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
}

export interface Query {
  allCourses: Course[];
}


export const AllCoursesQuery = gql`
  query allCourses {
    allCourses {
      id
      title
      author
      description
      topic
      url
    }
  }
`;
