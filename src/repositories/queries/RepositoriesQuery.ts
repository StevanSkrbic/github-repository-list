import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query RepositoriesData {
		search(query: "is:public", type: REPOSITORY, first: 10) {
			pageInfo {
				endCursor
			}
			edges {
				node {
					... on Repository {
						name
						forkCount
						urls
						stargazerCount
					}
				}
			}
		}
	}
`;
