import MUIDataTable from 'mui-datatables';

// TODO: Define static types for data and columns not to be any
type TableProps = {
	data: any;
	columns: any;
	title: string;
};

export default ({ data, columns, title }: TableProps) => {
	return (
		<MUIDataTable
			data={data}
			title={title}
			columns={columns}
			options={{
				enableNestedDataAccess: '.',
				// Disable default selectable rows
				selectableRows: 'none',
				// Disable in-built pagination
				pagination: false,
			}}
		/>
	);
};
