import React, { useState } from 'react';
import {Divider, Radio, Switch, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
    key: React.Key;
    name: string;
    code: string;
    value: number;
    statement:string;
    time:string;
    belong:string;
    operate:string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '名称',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: '编码',
        dataIndex: 'code',
    },
    {
        title: '标签值',
        dataIndex: 'value',
    },
    {
        title: '状态',
        dataIndex: 'statement',
        render: () => (
            <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} />
        )
    },
    {
        title: '有效期',
        dataIndex: 'time',
    },
    {
        title: '所属分类',
        dataIndex: 'belong',
    },
    {
        title: '操作',
        dataIndex: 'operate',
    },

];

const data: DataType[] = [
    {
        key: '1',
        name: '重庆市',
        code: 'ASSX',
        value: 1,
        statement:'禁用',
        time:'永久',
        belong:'统计标签',
        operate:'string',

    },
    {
        key: '2',
        name: '重庆市',
        code: 'NBVF',
        value: 1,
        statement:'禁用',
        time:'永久',
        belong:'统计标签',
        operate:'string',
    },
    {
        key: '3',
        name: '主城九区',
        code: 'AFFF',
        value: 1,
        statement:'禁用',
        time:'永久',
        belong:'统计标签',
        operate:'string',
    },
    {
        key: '4',
        name: '合川',
        code: 'DDDD',
        value: 1,
        statement:'禁用',
        time:'永久',
        belong:'统计标签',
        operate:'string',
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const ViewTable: React.FC = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    return (
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default {ViewTable};