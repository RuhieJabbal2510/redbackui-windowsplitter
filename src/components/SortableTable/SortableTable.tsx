import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyledSortableTable, StyledSortIcon, StyledSortingButton } from './SortableTable.style';

type Column = {
    value: keyof Row;
    label: string;
    sortable?: boolean;
    format?: 'text' | 'number' | string; // affects the styling
};

type Row = {
    [key: string]: string;
};

type Order = 'asc' | 'desc';

type SortableTableProps = {
    columns: Column[];
    initialData: Row[];
    initialSortField: keyof Row;
};

type SortingButtonProps = {
    label: string;
    direction: Order;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    active: boolean;
};

/**
 * Function to sort the rows based on a given field name and order
 * @param data
 * @param field
 * @param order
 */
function sortRows(data: Row[], field: keyof Row, order: Order) {
	return data.sort((a, b) => {
		let aValue: string | number = a[field];
		let bValue: string | number = b[field];

		// Check if values can be converted to numbers
		if (!isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue))) {
			aValue = parseFloat(aValue);
			bValue = parseFloat(bValue);
		}

		// Check if the values are strings
		if (typeof aValue === 'string' && typeof bValue === 'string') {
			const comparison = aValue.localeCompare(bValue);

			return order === 'asc' ? comparison : -comparison;
		}

		// Otherwise, assume the values are numbers or comparable
		if (aValue > bValue) {
			return order === 'asc' ? 1 : -1;
		}
		if (aValue < bValue) {
			return order === 'asc' ? -1 : 1;
		}

		return 0;
	});
}

/**
 * Inner component for the sorting button
 * @param label
 * @param direction
 * @param onClick
 * @param active
 * @constructor
 */
const SortingButton: FC<SortingButtonProps> = ({ label, direction, onClick, active = false }) => {
	return (
		<StyledSortingButton data-testid="SortingButton" onClick={onClick} $direction={direction} $active={active}>
			{label}
			<StyledSortIcon $direction={direction}>
				<span className="arrow">&darr;</span>
			</StyledSortIcon>
		</StyledSortingButton>
	);
};

/**
 * The actual SortableTable component
 * @param columns
 * @param initialData
 * @param initialSortField
 * @constructor
 */
export const SortableTable: FC<SortableTableProps> = ({ columns, initialData, initialSortField }) => {
	// The data set that will be displayed - allows for sorting, filtering, etc. without mutating the original data
	const [data, setData] = useState<Row[]>([]);
	const [activeSortField, setActiveSortField] = useState<string>(initialSortField.toString());

	// Re-sync `data` state with `initialData` prop whenever it changes
	useEffect(() => {
		setData(sortRows(initialData, initialSortField, 'asc'));
	}, [initialData, initialSortField]);

	const sortableColumns = columns.filter(column => column.sortable);

	const [ordering, setOrdering] = useState<{ [key: string]: Order }>(() => {
		const order = {};
		sortableColumns.forEach(column => {
			Object.assign(order, { [column.value]: 'asc' });
		});

		return order;
	});

	const handleSort = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		const sort = (field: keyof Row, order: Order) => {
			setData(() => sortRows(data, field, order));
		};

		const field = event.currentTarget.closest('th')?.dataset.fieldkey as keyof Row;
		if(field) {
			const newOrder: Order = ordering[field] === 'asc' ? 'desc' : 'asc';
			sort(field, newOrder);
			setActiveSortField(field.toString());
			setOrdering(prevOrdering => ({
				...prevOrdering,
				[field]: newOrder,
			}));
		}
	}, [data, ordering]);

	const cellContent = (row: Row, columnValue: string) => {
		return row[columnValue as keyof Row];
	};

	return (
		data && (
			<StyledSortableTable data-testId="SortableTable">
				<thead>
					<tr>
						{columns.map((column) => (
							<th key={column.value} data-fieldkey={column.value} data-format={column?.format ?? 'text'}>
								{sortableColumns.find(sortable => column.value === sortable.value) ? (
									<SortingButton label={column.label}
										direction={ordering[column.value]}
										onClick={handleSort}
										active={activeSortField === column.value}
									/>
								) : (
									<>{column.label}</>
								)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={`row-${row.id}`}>
							{columns.map((column, columnIndex) => (
								<td key={columnIndex} data-fieldkey={column.value} data-format={column?.format ?? 'text'}>
									{cellContent(row, column.value.toString())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</StyledSortableTable>
		)
	);
};