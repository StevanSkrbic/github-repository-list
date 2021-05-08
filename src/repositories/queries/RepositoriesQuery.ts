import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query RepositoriesData($after: String) {
		search(query: "is:public", type: REPOSITORY, first: 10, after: $after) {
			pageInfo {
				endCursor
			}
			edges {
				node {
					... on Repository {
						name
						forkCount
						url
						stargazerCount
					}
				}
			}
		}
	}
`;
