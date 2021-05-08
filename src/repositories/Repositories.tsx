import { ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';

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

export default () => {
	const { data, loading, error } = useQuery<RepositoriesData>(GET_REPOSITORIES);

	const repositories: (RepositoriesData_search_edges | null)[] | null | undefined = data?.search.edges;
	const renderTableSection = (): ReactElement => {
		if (loading && !repositories?.length) return <div>Loading...</div>;
		if (error) return <div>Error loading repositories</div>;
		return <Table data={repositories} columns={getTableColumns(repositories)} title="Repositories" />;
	};

	return (
		<>
			<Grid item xs={10}>
				{renderTableSection()}
			</Grid>
		</>
	);
};
