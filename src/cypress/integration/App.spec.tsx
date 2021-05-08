import { GRAPHQL_URL } from 'setup/apolloclient';

export {};

export const query = `
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

describe('App main page', () => {
	it('should trigger the request', () => {
		// TODO: Turn off warning eslint through esLintConfig file
		// eslint-disable-next-line jest/valid-expect-in-promise
		cy.request({
			url: GRAPHQL_URL,
			body: { query },
			failOnStatusCode: false, // not a must but in case the fail code is not 200 / 400
		}).then(response => {
			console.log(response);
		});
	});
});

it('should work', () => {
	cy.visit('http://localhost:3000');
	cy.get('h1').should('have.text', 'Repositories table App');
});
