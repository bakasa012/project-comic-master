import { Pagination, Skeleton } from 'antd';
import React from 'react';



interface Props {
	total: number;
	defaultPageSize: number;
	defaultCurrent: number;
	loading?: boolean
	fnOnChange?: (page: number, pageSize: number) => void
}
/**
 * @description pagination is custom from ant design
 * @param total is the total number of records in the database
 * @param defaultPageSize is total numbber is display in a page
 * @param defaultCurrent is page number current
 */
const PaginationCustomComponent: React.FC<Props> = (props) => {
	const { defaultCurrent, defaultPageSize, total, fnOnChange, loading } = props
	const onPageChange = (page: number, pageSize: number) => {
		console.log('onPageNumberChange : ', page, pageSize);
		fnOnChange && fnOnChange(page, pageSize)
	}
	return (
		<Skeleton paragraph={{ rows: 0 }} title={{ width: '100%' }} loading={loading} active={loading} round>
			<Pagination
				total={total}
				defaultPageSize={defaultPageSize}
				defaultCurrent={defaultCurrent}
				showSizeChanger={false}
				onChange={onPageChange}
				showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
			/>
		</Skeleton>
	);
};

export default PaginationCustomComponent;