import { Col, Row } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react';
import PaginationCustomComponent from '../Pagination.component/PaginationCustom.component';

interface DataType {
	key: React.Key;
	name: string;
	age: number;
	address: string;
}

export enum PositionPagination {
	START = 'start',
	END = 'end',
	CENTER = 'center',
	SPACEAROUND = 'space-around',
	SPACEBETWEEN = 'space-between',
	SPACEEVENLY = 'space-evenly'
}

interface Props {
	columns: ColumnsType<DataType>;
	dataSource: any;
	loading: boolean;
	totalRow: number;
	style?: React.CSSProperties;
	positionPagination?: PositionPagination
	pageSize?: number;
	pageCurrent?: number;


}
const TableCustomComponent: React.FC<Props> = (props) => {
	const { columns, dataSource, loading, style, positionPagination, totalRow, pageCurrent, pageSize } = props;
	const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	}
	return (
		<>
			<Col span={24}>
				<Table
					style={style}
					loading={loading}
					columns={columns}
					dataSource={dataSource}
					bordered
					pagination={false}
					rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
				/>
			</Col>
			<Row justify={positionPagination || 'end'} style={{ width: '100%', padding: '5px 0 5px 0' }}>
				<PaginationCustomComponent total={totalRow} defaultPageSize={pageSize || 20} defaultCurrent={pageCurrent || 1} loading={loading} />
			</Row>
		</>

	);
};

export default TableCustomComponent;