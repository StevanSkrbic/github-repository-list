import { ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Button } from '@material-ui/core';
import styled from 'styled-components';

// Domain
import { RepositoriesData, RepositoriesData_search_edges } from 'models/RepositoriesData';
import { GET_REPOSITORIES } from 'repositories/queries/RepositoriesQuery';
// Components
import Table from 'components/Table/Table';
import EmojiWithText from 'components/Emoji/EmojiWithText';

const starLabel = 'star';
const forkLabel = 'fork';
const getTableColumns = (repositories: any) => [
	{
		label: '<name>',
		name: 'node.name',
		options: {
			customBodyRenderLite: (dataIndex: number) => (
				<a href={repositories[dataIndex].node.url}>{repositories[dataIndex].node.name}</a>
			),
		},
	},
	{
		name: 'node.stargazerCount',
		options: {
			customHeadLabelRender: () => (
				<EmojiWithText label={starLabel} text="<stars>">
					🌟
				</EmojiWithText>
			),
			customBodyRender: (count: number) => (
				<EmojiWithText label={starLabel} text={count}>
					🌟
				</EmojiWithText>
			),
		},
	},
	{
		name: 'node.forkCount',
		options: {
			customHeadLabelRender: () => (
				<EmojiWithText label={forkLabel} text="<forks>">
					🍴
				</EmojiWithText>
			),
			customBodyRender: (count: number) => (
				<EmojiWithText label={forkLabel} text={count}>
					🍴
				</EmojiWithText>
			),
		},
	},
];

const ButtonWithTheme = styled(Button)`
	background-color: ${props => props.theme.buttonBackground};
	color: ${props => props.theme.buttonText};
`;
const loadingText = 'Loading...';
export default () => {
	const { data, loading, error, fetchMore } = useQuery<RepositoriesData>(GET_REPOSITORIES, {
		variables: { after: null },
		notifyOnNetworkStatusChange: true,
	});

	const handleLoadMore = (): void => {
		if (data?.search.pageInfo) {
			const { endCursor } = data.search.pageInfo;

			fetchMore({
				variables: { after: endCursor },
				updateQuery: (prevResults, { fetchMoreResult }) => {
					if (!fetchMoreResult) {
						return prevResults;
					}

					if (prevResults.search.edges && fetchMoreResult.search.edges) {
						return {
							search: {
								...prevResults.search,
								edges: [...prevResults.search.edges, ...fetchMoreResult.search.edges],
							},
						};
					}

					return prevResults;
				},
			});
		}
	};

	const repositories: (RepositoriesData_search_edges | null)[] | null | undefined = data?.search.edges;
	const renderTableSection = (): ReactElement => {
		if (loading && !repositories?.length) return <div data-testid="loading-text">Loading...</div>;
		if (error) return <div>Error loading repositories</div>;
		return <Table data={repositories} columns={getTableColumns(repositories)} title="Repositories" />;
	};
	console.log(repositories);
	return (
		<>
			<Grid item xs={10}>
				{renderTableSection()}
			</Grid>
			<Grid item xs={10}>
				{loading && repositories && <div>{loadingText}</div>}
				{!loading && <ButtonWithTheme onClick={handleLoadMore}>Load more</ButtonWithTheme>}
			</Grid>
		</>
	);
};
