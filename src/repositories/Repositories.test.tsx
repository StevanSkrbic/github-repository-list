import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Repositories from 'repositories/Repositories';
import { GET_REPOSITORIES } from 'repositories/queries/RepositoriesQuery';

const mocks = [
	{
		request: { query: GET_REPOSITORIES, variables: { after: null } },
		result: {
			data: {
				search: {
					pageInfo: {
						endCursor: 'Y3Vyc29yOjEw',
					},
					edges: [
						{
							node: {
								name: 'DZNEmptyDataSet',
								forkCount: 1725,
								url: 'https://github.com/dzenbot/DZNEmptyDataSet',
								stargazerCount: 11997,
							},
						},
						{
							node: {
								name: 'SlidingMenu',
								forkCount: 5212,
								url: 'https://github.com/jfeinstein10/SlidingMenu',
								stargazerCount: 11183,
							},
						},
						{
							node: {
								name: 'react-redux-starter-kit',
								forkCount: 2343,
								url: 'https://github.com/davezuko/react-redux-starter-kit',
								stargazerCount: 10395,
							},
						},
						{
							node: {
								name: 'Alcatraz',
								forkCount: 1195,
								url: 'https://github.com/alcatraz/Alcatraz',
								stargazerCount: 10064,
							},
						},
						{
							node: {
								name: 'ievms',
								forkCount: 520,
								url: 'https://github.com/xdissent/ievms',
								stargazerCount: 10013,
							},
						},
						{
							node: {
								name: 'UITableView-FDTemplateLayoutCell',
								forkCount: 2042,
								url: 'https://github.com/forkingdog/UITableView-FDTemplateLayoutCell',
								stargazerCount: 9906,
							},
						},
						{
							node: {
								name: 'PNChart',
								forkCount: 1815,
								url: 'https://github.com/kevinzhow/PNChart',
								stargazerCount: 9757,
							},
						},
						{
							node: {
								name: 'MaterialDesignLibrary',
								forkCount: 2333,
								url: 'https://github.com/navasmdc/MaterialDesignLibrary',
								stargazerCount: 9128,
							},
						},
						{
							node: {
								name: 'is.js',
								forkCount: 660,
								url: 'https://github.com/arasatasaygin/is.js',
								stargazerCount: 9121,
							},
						},
						{
							node: {
								name: 'Parsley.js',
								forkCount: 1378,
								url: 'https://github.com/guillaumepotier/Parsley.js',
								stargazerCount: 9002,
							},
						},
					],
				},
			},
		},
	},
];

const renderUI = () =>
	render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<Repositories />
		</MockedProvider>,
	);

describe('Repositories', () => {
	// Accoring to Kent C Dodds creator of react-testing-library
	// Don't use cleanup https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-cleanup
	// afterEach(cleanup);

	it('should handle loading phase', async () => {
		renderUI();
		expect(screen.getByTestId('loading-text')).toBeInTheDocument();
	});

	// TODO: Write tests for list rendering 'should render repositories'
});
